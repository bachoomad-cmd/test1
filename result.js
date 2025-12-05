// --- معرفی پادشاه‌ها با عکس + جمله معرفی + توضیحات ---
const kings = {
    "کوروش": {
        img: "assets/کوروش.png",
        tagline: "بنیان‌گذار یک امپراتوری و نماد خرد و انسانیت.",
        desc: "تو شبیه رهبری هستی که با عقلانیت، مدارا و برنامه‌ریزی پیش میره."
    },
    "داریوش": {
        img: "assets/داریوش.png",
        tagline: "معمار امپراتوری و پادشاه نظم و قانون.",
        desc: "ثبت‌نامِ قدرت همراه با نظم، ساختار و مدیریت عالی."
    },
    "خشایار": {
        img: "assets/خشایار.png",
        tagline: "فرمانروایی با شکوه و جاه‌طلبی بلندپروازانه.",
        desc: "تو شخصیت بزرگی داری و همیشه دنبال اثرگذاری واقعی هستی."
    },
    "شاپور یکم": {
        img: "assets/شاپور یکم.png",
        tagline: "فاتح هوشمند و سیاست‌مدار حسابگر.",
        desc: "هوش استراتژیک و تحمل فشارهای بزرگ از ویژگی‌هات هست."
    },
    "نادر": {
        img: "assets/نادر.png",
        tagline: "شمشیر برق‌آسا؛ نابغه نظامی ایران.",
        desc: "تو در شرایط سخت بهترین نسخه‌ات میشی — قوی، محکم، بی‌تسلیم."
    },
    "کریم خان": {
        img: "assets/کریم خان.png",
        tagline: "پادشاه مردم؛ نماد عدالت و آرامش.",
        desc: "شخصیتی مهربان ولی قاطع داری. بقیه کنارت احساس امنیت می‌کنن."
    },
    "رضاخان": {
        img: "assets/رضاخان.png",
        tagline: "سازنده ایران نوین؛ آهنین، مصمم، سرسخت.",
        desc: "تو اهل ساختن، اصلاح و نظم‌دادن به هرجایی که وارد میشی هستی."
    },
    "محمدرضا شاه": {
        img: "assets/محمدرضا شاه.png",
        tagline: "پادشاه مدرن‌سازی و اصلاحات.",
        desc: "منطقی، متین و آینده‌نگر هستی، حتی در شرایط سخت."
    },
    "آقا محمد خان": {
        img: "assets/آقا محمد خان.png",
        tagline: "فرمانروایی آهنین با اراده‌ای شکست‌ناپذیر.",
        desc: "تو جاه‌طلب و بسیار پرتلاش هستی و عقب‌نشینی در لغت‌نامه‌ات نیست."
    },
    "ناصرالدین شاه": {
        img: "assets/ناصرالدین شاه.png",
        tagline: "پادشاه هنر، فرهنگ و سیاست‌ورزی طولانی.",
        desc: "تو آدمی هستی که می‌تونی مدت‌ها جایگاهت رو حفظ کنی و روابط رو مدیریت کن."
    }
};

// --- گرفتن نمره‌های ذخیره‌شده ---
const scores = JSON.parse(localStorage.getItem("scores")) || {};

// --- انتخاب پادشاه نهایی ---
// تقویت اختلاف‌ها → اختلاف واقعی 2 برابر میشه
let bestKing = null;
let bestScore = -999999;

for (let king in scores) {
    const boosted = scores[king] * 2.3;  // افزایش اختلاف
    if (boosted > bestScore) {
        bestScore = boosted;
        bestKing = king;
    }
}

const kingData = kings[bestKing];

// --- نمایش نتیجه ---
document.getElementById("king-img").src = kingData.img;
document.getElementById("king-name").textContent = bestKing;
document.getElementById("king-tagline").textContent = kingData.tagline;
document.getElementById("king-desc").textContent = kingData.desc;
