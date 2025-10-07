let totalTasks = 0;  
let completedTasks = 0;  
     
function showDate() {
    const dateBox = document.getElementById('date-box');
    const today = new Date();

    const weekday = today.toLocaleDateString('en-US', { weekday: 'long' });
    const day = today.getDate();
    const month = today.toLocaleDateString('en-US', { month: 'long' });

    dateBox.innerHTML = `${weekday}<br>${day}<br>${month}`;
}
 
function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    if (totalTasks === 0) {
        progressBar.style.width = "0%";
        progressText.textContent = "0 / 0 tasks done";
    } else {
        const percent = (completedTasks / totalTasks) * 100;
        progressBar.style.width = percent + "%";
        progressText.textContent = `${completedTasks} / ${totalTasks} tasks done`;
    }
}

function addTask() {
    const input = document.getElementById('task-input');
    const taskText = input.value.trim();
    if (taskText === "") return;

    totalTasks++;
    updateProgress();

    const li = document.createElement('li');
    li.textContent = taskText;

    li.addEventListener('click', () => {
        if (!li.classList.contains('done')) {
            li.classList.add('done');
            completedTasks++;
        } else {
            li.classList.remove('done');
            completedTasks--;
        }
        updateProgress();
    });

    document.getElementById('task-list').appendChild(li);
    input.value = "";
}

showDate();
updateProgress();
