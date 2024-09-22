//your JS code here. If required.
let angle = 0;

function rotateLine() {
    const line = document.getElementById('line');
    angle = (angle + 2) % 360; // Increment angle and keep it within 0-359 degrees
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; // Center and rotate the line
}

// Rotate the line every 20 milliseconds
setInterval(rotateLine, 20);