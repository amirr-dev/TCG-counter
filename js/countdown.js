// التاريخ الثابت للامتحان (6 يونيو 2026)
const examDate = new Date("2026-06-06T08:00:00");

// جلب العناصر من HTML
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// تحديث العد التنازلي كل ثانية
function updateCountdown() {
    const now = new Date();
    const diff = examDate - now;

    // إذا الوقت انتهى
    if (diff <= 0) {
        daysEl.textContent = "0";
        hoursEl.textContent = "0";
        minutesEl.textContent = "0";
        secondsEl.textContent = "0";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // تنسيق الأرقام: 08 - 07 - 01
    daysEl.textContent = days;
    hoursEl.textContent = hours < 10 ? "0" + hours : hours;
    minutesEl.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;
}

// تشغيل الدالة فوراً
updateCountdown();

// التحديث كل ثانية
setInterval(updateCountdown, 1000);