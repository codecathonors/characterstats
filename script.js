const h2 = document.createElement("h2");
h2.textContent = "Yes, character stats as in a video game...";

document.querySelector("body").appendChild(h2);

let chartable = '';
let rows = 4;
let cols = 2;
for (let r = 0; r < rows;r++){
    table += '<tr>';
        for(let c = 0; c < cols;c++) {
            table += '<td>' + c + '</td>';
        }
    table += '</tr>';
}