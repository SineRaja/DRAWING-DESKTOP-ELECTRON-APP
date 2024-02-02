// mainDesign.js

// Get references to HTML elements
const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const rectangleBtn = document.getElementById('rectangle');
const circleBtn = document.getElementById('circle');

// Get 2D context for the canvas
const ctx = canvas.getContext('2d');

// Initialize drawing variables
let size = 10;
let isPressed = false;
let color = 'black';
let x, y;

// Function to draw a circle at a given position
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

// Function to draw a rectangle at a given position
function drawRectangle(x, y) {
    ctx.fillStyle = color;
    ctx.fillRect(x - size, y - size, size * 2, size * 2);
}

// Function to draw a line between two points
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

// Function to update the displayed size on screen
function updateSizeOnScreen() {
    sizeEl.innerText = size;
}

// Function to clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Event listeners for mouse actions
canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

document.addEventListener('mouseup', () => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

// Event listeners for button clicks
increaseBtn.addEventListener('click', () => {
    size += 5;
    size = Math.min(size, 50);
    updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', () => {
    size -= 5;
    size = Math.max(size, 5);
    updateSizeOnScreen();
});

colorEl.addEventListener('input', (e) => {
    color = e.target.value;
});

clearEl.addEventListener('click', clearCanvas);

rectangleBtn.addEventListener('click', () => {
    // Toggle the active state of the rectangle button
    rectangleBtn.classList.toggle('active');
});

circleBtn.addEventListener('click', () => {
    // Toggle the active state of the circle button
    circleBtn.classList.toggle('active');
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'c' && e.ctrlKey) {
        clearCanvas();
    } else if (e.key === 'r') {
        // Toggle the active state of the rectangle button on 'r' key press
        rectangleBtn.classList.toggle('active');
        circleBtn.classList.remove('active');
    } else if (e.key === 'o') {
        // Toggle the active state of the circle button on 'o' key press
        circleBtn.classList.toggle('active');
        rectangleBtn.classList.remove('active');
    }
});
