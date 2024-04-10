document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".question");
    const answers = document.querySelectorAll(".answer");

    questions.forEach((question, index) => {
        question.addEventListener("click", () => {
            if (answers[index].classList.contains("show-answer")) {
                answers[index].classList.remove("show-answer");
            } else {
                answers.forEach((answer) => {
                    answer.classList.remove("show-answer");
                });
                answers[index].classList.add("show-answer");
            }
        });
    });
});
