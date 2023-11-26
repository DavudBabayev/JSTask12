document.querySelector("button").addEventListener("click", function () {
    let text1 = document.querySelector("#text1");
    let text2 = document.querySelector("#text2");
    let radio = document.querySelector('input[name="rad"]:checked');
    let text3 = document.querySelector("#text3");

    if (text1 && text2 && radio && text3.value) {
        let table = document.querySelector("table").getElementsByTagName('tbody')[0];
        let newRow = table.insertRow(table.rows.length);
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);

        cell1.textContent = text1.value;
        cell2.textContent = text2.value;
        cell3.textContent = radio.value;

        document.getElementById("text1").value = "";
        document.getElementById("text2").value = "";
        radio.checked = false;


        newRow.style.backgroundColor = text3.value;
        text3.value = "";

    } else {
        alert("Zehmet olmasa, butun saheleri doldurun.");
    }
});
