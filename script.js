let progress = 0;

function increaseProgress() {
    if (progress < 100) {
        progress += 1; // increase by 1% each step
        document.getElementById('progress-bar').style.width = progress + '%';
        setTimeout(increaseProgress, 50); // wait 50ms between steps
    }
}

// Start animation automatically
increaseProgress();
