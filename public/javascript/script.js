let shorten;
let nav;
let copy;

function navDrop() {
    document.querySelector(".dropdown").classList.toggle("shownav");
    document.querySelector(".pic2").classList.toggle('hidepic');
}

function displayLinks() {
    document.querySelector('.coloruniter').classList.add("mobileactive");
}

document.addEventListener('DOMContentLoaded', () => {
    nav = document.querySelector('button.dropdownmenu');
    nav.addEventListener('click', navDrop);

    shorten = document.querySelector('button.shorten');
    shorten.addEventListener('click', () => {
        const url = document.querySelector('.shorten').value;

        fetch(`https://cu8.in/api/?action=short&urls=|${url}|`)
            .then(res => res.json())
            .then((res) => {
                const url = document.querySelector('.shorten').value;

                var link = document.createElement("div");
                link.setAttribute('class', 'link')

                var biglink = document.createElement("div");
                biglink.setAttribute('class', 'biglink')
                biglink.textContent = url;

                var shortlink = document.createElement("input");
                shortlink.setAttribute('class', 'shortlink')
                shortlink.setAttribute('readonly', 'true')
                shortlink.value = res.data.shortUrl.secure;
                shortlink.blur();

                var copybutton = document.createElement('button');
                copybutton.setAttribute('class', 'copybutton')
                copybutton.textContent = 'Copy!'

                link.appendChild(biglink);
                link.appendChild(shortlink);
                link.appendChild(copybutton);

                var element = document.querySelector(".activestate");

                element.appendChild(link);

                displayLinks();

                copy = document.querySelectorAll('button.copybutton');
                var x;

                for (x of copy) {
                    x.addEventListener('click', (event) => {
                        console.log(event)
                        var copyText = event.target.parentNode.children[1];
                        copyText.select();
                        document.execCommand("copy");
                    })
                }
            });
    });
});