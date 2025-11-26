// ----------------------------
//     SETTINGS
// ----------------------------
let qTotal = 20;      // تعداد کل سوال‌ها
let qIndex = 1;       // شماره سوال فعلی

// ----------------------------
//     ELEMENTS
// ----------------------------
const qNumberEl = document.getElementById("q-number");

// 🔥 اصلاح شد: question-text
const questionText = document.getElementById("question-text");

const progressBar = document.getElementById("progress-bar");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

// ----------------------------
//     UPDATE UI
// ----------------------------

// شماره سوال + نوار پیشرفت
function updateProgress() {
    qNumberEl.textContent = `سوال ${qIndex} از ${qTotal}`;
    progressBar.style.width = ((qIndex - 1) / (qTotal - 1)) * 100 + "%";
}

// متن سوال (اینجا سوال‌ها را تغییر بده)
function updateQuestionText() {
    questionText.style.opacity = 0;
    setTimeout(() => {
        questionText.textContent = `این متن نمونه برای سوال شماره ${qIndex}`;
        questionText.style.opacity = 1;
    }, 200);
}

// ----------------------------
//     NEXT BUTTON
// ----------------------------
nextBtn.addEventListener("click", () => {

    // اگر هنوز سوال باقی مانده
    if (qIndex < qTotal) {
        qIndex++;
        updateProgress();
        updateQuestionText();
        fadeContent();
        return;
    }

    // اگر سوال آخر تمام شد → برو به نتایج
    window.location.href = "results.html";
});

// ----------------------------
//     BACK BUTTON
// ----------------------------
backBtn.addEventListener("click", () => {
    if (qIndex > 1) {
        qIndex--;
        updateProgress();
        updateQuestionText();
        fadeContent();
    }
});

// ----------------------------
//     FADE ANIMATION
// ----------------------------
function fadeContent() {
    document.querySelectorAll(".fade-box").forEach(el => {
        el.classList.remove("show");
        setTimeout(() => el.classList.add("show"), 30);
    });
}

// اجرای اولیه
updateProgress();
updateQuestionText();
fadeContent();

