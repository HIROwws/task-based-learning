let score = 0;
let totalTasks = 14; // Укажи точное количество всех вопросов
let answeredTasks = 0;

function showTask(taskId) {
    const sections = document.querySelectorAll('.task-section');
    sections.forEach(section => {
        if (section.id === taskId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

function selectAnswer(button, isCorrect) {
    if (button.classList.contains('answered')) return;

    answeredTasks++;

    if (isCorrect) {
        score++;
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
    }

    const container = button.closest('.question-block');
    const buttons = container.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.add('answered'));

    updateScore();
    checkEnd();
}

function updateScore() {
    document.getElementById('score').textContent = score;
    const progress = (answeredTasks / totalTasks) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

function checkEnd() {
    if (answeredTasks >= totalTasks) {
        setTimeout(() => {
            alert(`Игра окончена! Твой результат: ${score} из ${totalTasks}`);
        }, 500);
    }
}

function restartGame() {
    score = 0;
    answeredTasks = 0;

    // Обновляем очки и прогресс
    document.getElementById('score').textContent = score;
    document.getElementById('progressBar').style.width = '0%';

    // Сброс состояния кнопок
    const allButtons = document.querySelectorAll('.question-block button');
    allButtons.forEach(button => {
        button.classList.remove('correct', 'wrong', 'answered');
    });

    // Прячем все задания
    const sections = document.querySelectorAll('.task-section');
    sections.forEach(section => section.classList.remove('active'));
}
