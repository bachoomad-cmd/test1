const questions = [
    "من معتقدم نظم و اقتدار در حکومت ضروری است.",
    "قدرت باید در دست یک فرد قوی متمرکز باشد.",
    "پیشرفت جامعه نیازمند رهبری نیرومند است.",
    "فرمانروا باید در تصمیم‌گیری قاطع باشد.",
    "و ... بقیه سوال‌ها"
];

let index = 0;

const qNumber = document.getElementById("q-number");
const qText = document.getElementById("question-text");
const progressBar = document.getElementById("progress-bar");

function loadQuestion(){
    qText.innerText = questions[index];
    qNumber.innerText = `سوال ${index+1} از ${questions.length}`;
    progressBar.style.width = ((index)/questions.length)*100 + "%";
}

document.getElementById("nextBtn").addEventListener("click", ()=>{
    index++;
    if(index < questions.length){
        loadQuestion();
    } else {
        window.location.href = "results.html";
    }
});

loadQuestion();
