const h2 = document.createElement("h2");
h2.textContent = "Yes, character stats as in a video game...";

document.querySelector("body").appendChild(h2);

let tlou = document.getElementsByClassName("tlou");

tlou.forEach(tlou => {
    tlou.addEventListener('click', function handleClick(event) {
        console.log('tlou clicked', event);

        tlou.setAttribute()
    })
}