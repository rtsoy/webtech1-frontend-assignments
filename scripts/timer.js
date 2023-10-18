let timer;
let progressBar;

// Start timer
function startTimer() {
    // Get the user-specified duration or default to 0 if no value is provided
    const duration = parseInt(document.getElementById("duration").value) || 0;
    let timeLeft = duration;

    clearInterval(timer);
    updateDisplay(timeLeft);

    progressBar = document.getElementById("progress-bar");
    progressBar.style.width = "0%";

    timer = setInterval(function () {
        if (timeLeft <= 0) {
            // If the time is up, clear the interval to stop the timer
            clearInterval(timer);

            alert("Time is up!");

            // Reset the progress bar
            progressBar.style.width = "0%";
        } else {
            // Update the display with the new time
            timeLeft--;
            updateDisplay(timeLeft);

            // Update the progress bar
            const progress = (duration - timeLeft) / duration * 100;
            progressBar.style.width = progress + "%";
        }
    }, 1000);
}

// Update display
function updateDisplay(timeLeft) {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    document.getElementById("time").innerText = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    // Update the display with the remaining time in "MM:SS" format
}
