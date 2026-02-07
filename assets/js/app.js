const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

const redValue = document.getElementById("redValue");
const greenValue = document.getElementById("greenValue");
const blueValue = document.getElementById("blueValue");

const colorBox = document.getElementById("colorBox");
const rgbText = document.getElementById("rgbText");
const hexText = document.getElementById("hexText");
const colorPicker = document.getElementById("colorPicker");

// Inicializar valores
red.value = redInput.value = 0;
green.value = greenInput.value = 0;
blue.value = blueInput.value = 0;

// Función principal
function updateColor() {
    const r = parseInt(red.value);
    const g = parseInt(green.value);
    const b = parseInt(blue.value);

    redValue.textContent = r;
    greenValue.textContent = g;
    blueValue.textContent = b;

    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.backgroundColor = rgbColor;
    rgbText.textContent = rgbColor;

    const hex =
        "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0");

    hexText.textContent = hex.toUpperCase();
    colorPicker.value = hex;
}

// HEX → RGB
function hexToRgb(hex) {
    return {
        r: parseInt(hex.substring(1, 3), 16),
        g: parseInt(hex.substring(3, 5), 16),
        b: parseInt(hex.substring(5, 7), 16)
    };
}

// Sliders → Inputs
red.addEventListener("input", () => {
    redInput.value = red.value;
    updateColor();
});

green.addEventListener("input", () => {
    greenInput.value = green.value;
    updateColor();
});

blue.addEventListener("input", () => {
    blueInput.value = blue.value;
    updateColor();
});

// Inputs → Sliders
redInput.addEventListener("input", () => {
    red.value = redInput.value;
    updateColor();
});

greenInput.addEventListener("input", () => {
    green.value = greenInput.value;
    updateColor();
});

blueInput.addEventListener("input", () => {
    blue.value = blueInput.value;
    updateColor();
});

// Color Picker → RGB
colorPicker.addEventListener("input", () => {
    const rgb = hexToRgb(colorPicker.value);

    red.value = redInput.value = rgb.r;
    green.value = greenInput.value = rgb.g;
    blue.value = blueInput.value = rgb.b;

    updateColor();
});