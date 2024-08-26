document.getElementById('generate-btn').addEventListener('click', generatePalette);

function generatePalette() {
    for (let i = 1; i <= 5; i++) {
        let color = generateRandomColor();
        document.getElementById(`color${i}`).style.backgroundColor = color;
        document.getElementById(`hex${i}`).textContent = color;
    }
}

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
