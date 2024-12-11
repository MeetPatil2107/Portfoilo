// Add background color changing interaction
document.body.addEventListener("click", () => {
    const colors = [
        "linear-gradient(to right, #ff7e5f, #feb47b)",
        "linear-gradient(to right, #6a11cb, #2575fc)",
        "linear-gradient(to right, #00c6ff, #0072ff)"
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[randomIndex];
    console.log("Background color changed!");
});
