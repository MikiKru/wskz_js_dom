const newElement = document.createElement("div");
newElement.innerText = "jestem nowym elementem";
const divToInsert = document.querySelector("#to_insert");
divToInsert.appendChild(newElement);

const newAHref = document.createElement("a");
newAHref.innerHTML = "<a href='index.html'> odśwież </a>";
divToInsert.insertBefore(newAHref, newElement);

const newParagraf = document.createElement("p");
newParagraf.innerHTML = "<p> <b> przykładowy paragraf </b> </p>";
divToInsert.before(newParagraf);

// klonowanie elementow
const rowToClone = document.querySelector("#row");
for (i = 0; i < 10; i++) {
    newRow = rowToClone.cloneNode(true);
    rowToClone.after(newRow);
}
// edycja elementów
const lastRow = document.getElementsByTagName("tr");
const updateRow = document.createElement("tr");
const name = document.createElement("td");
const lastName = document.createElement("td");
name.innerText = "Adam";
lastName.innerText = "Kowalski";
updateRow.appendChild(name);
updateRow.appendChild(lastName);
lastRow[lastRow.length - 1].replaceWith(updateRow);

// usunięcie elementu
const table = document.querySelector("table");
table.remove();