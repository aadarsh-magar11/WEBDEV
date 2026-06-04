const textbox = document.getElementById("textbox");
const degree = document.getElementById("degree");

function convert() {
    let temp = Number(textbox.value);
    event.preventDefault();
    if (degree.value === "c") {
        temp = (9/5) * temp + 32;
        textbox.value = temp;
    }
    else if (degree.value === "f") {
        temp = (5/9) * (temp - 32);
        textbox.value = temp;
    }
}