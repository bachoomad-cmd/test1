// ----------------------------
// SETTINGS
// ----------------------------
let qTotal = 20;
let qIndex = 1;

// ----------------------------
// ELEMENTS
// ----------------------------
const qNumberEl = document.getElementById("q-number");
const questionText = document.getElementById("questionText"); // ← مطابق HTML
const progressBar = document.getElementById("progress-bar");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

// ----------------------------
// UPDATE UI
// ----------------------------
function updateProgress() {
    qNumberEl.textContent = `سوال ${qIndex} از ${qTotal}`;
    progressBar.style.width = ((qIndex - 1) / (qTotal - 1)) * 100 + "%";
}

function updateQuestionText() {
    questionText.style.opacity = 0;
    setTimeout(() => {
        questionText.textContent = `این متن نمونه برای سوال شماره ${qIndex}`;
        questionText.style.opacity = 1;
    }, 200);
}

// ----------------------------
// NEXT BUTTON
// ----------------------------
nextBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (qIndex < qTotal) {
        qIndex++;
        updateProgress();
        updateQuestionText();
        fadeContent();
        return;
    }

    // LAST QUESTION → GO TO RESULTS
    setTimeout(() => {
        window.location.replace("results.html");
    }, 50);
});

// ----------------------------
// BACK BUTTON
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
// FADE ANIMATION
// ----------------------------
function fadeContent() {
    document.querySelectorAll(".fade-box").forEach(el => {
        el.classList.remove("show");
        setTimeout(() => el.classList.add("show"), 30);
    });
}

// ----------------------------
// INIT
// ----------------------------
updateProgress();
updateQuestionText();
fadeContent();
