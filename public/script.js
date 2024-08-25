let headsCount = 0;
let tailsCount = 0;

function flipCoin() {
    const resultElement = document.getElementById("result");
    const headsCountElement = document.getElementById("headsCount");
    const tailsCountElement = document.getElementById("tailsCount");

    resultElement.style.transform = "rotateY(360deg)"; // Add rotation animation
    setTimeout(() => {
        const outcome = Math.random() < 0.5 ? "HEADS" : "TAILS";
        resultElement.innerText = outcome;
        resultElement.style.transform = "rotateY(0deg)";

        // Update the counters
        if (outcome === "HEADS") {
            headsCount++;
            headsCountElement.innerText = headsCount;
        } else {
            tailsCount++;
            tailsCountElement.innerText = tailsCount;
        }
    }, 500); // Adjust the timing to match the CSS animation
}
