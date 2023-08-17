const textArea = document.getElementById("text-area");
const textAreaValue = textArea.value;

document.getElementById("bold").addEventListener("click", function () {
  textArea.style.fontWeight = "800";
});
document.getElementById("italic").addEventListener("click", function () {
  textArea.style.fontStyle = "italic";
});
document.getElementById("underline").addEventListener("click", function () {
  textArea.style.textDecoration = "underline";
});
document.getElementById("align-left").addEventListener("click", function () {
  textArea.style.textAlign = "left";
});
document.getElementById("align-center").addEventListener("click", function () {
  textArea.style.textAlign = "center";
});
document.getElementById("align-right").addEventListener("click", function () {
  textArea.style.textAlign = "right";
});
document.getElementById("align-justify").addEventListener("click", function () {
  textArea.style.textAlign = "justify";
});

document.getElementById("number-input").addEventListener("click", function () {
const numberInput = document.getElementById("number-input");
const numberInputValue = numberInput.value;
textArea.style.fontSize = numberInputValue + 'px' ;
});

document.getElementById("color-input").addEventListener("mousemove", function () {
    const colorInput = document.getElementById("color-input");
    const colorInputValue =colorInput.value;
    textArea.style.color = colorInputValue ;
});
