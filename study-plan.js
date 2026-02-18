// تحميل البيانات من التخزين المحلي
let plans = JSON.parse(localStorage.getItem("studyPlans")) || [];

// إعادة عرض البيانات
function renderPlans() {
    const list = document.querySelector(".plan-list");
    list.innerHTML = "";

    plans.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "plan-card";

        card.innerHTML = `
            <button class="delete-btn" onclick="deletePlan(${index})">حذف</button>

            <div class="plan-title">${item.day}</div>

            <div class="plan-info"><b>المادة:</b> ${item.subject}</div>
            ${item.desc ? `<div class="plan-info"><b>ملاحظات:</b> ${item.desc}</div>` : ""}

            <div class="plan-info"><b>الوقت:</b> ${item.start} — ${item.end}</div>
        `;

        list.appendChild(card);
    });
}

// إضافة خطة جديدة
function addPlan() {
    const day = document.getElementById("day").value;
    const subject = document.getElementById("subject").value.trim();
    const desc = document.getElementById("desc").value.trim();
    const startTime = document.getElementById("startTime").value;
    const endTime = document.getElementById("endTime").value;

    // التحقق من الحقول
    if (!subject || !startTime || !endTime) {
        alert("الرجاء ملء المادة ووقت البداية والنهاية.");
        return;
    }

    if (startTime >= endTime) {
        alert("وقت البداية يجب أن يكون قبل وقت النهاية!");
        return;
    }

    // إضافة البيانات
    plans.push({
        day,
        subject,
        desc,
        start: startTime,
        end: endTime
    });

    // حفظها
    localStorage.setItem("studyPlans", JSON.stringify(plans));

    // تنظيف الحقول
    document.getElementById("subject").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("startTime").value = "";
    document.getElementById("endTime").value = "";

    renderPlans();
}

// حذف خطة
function deletePlan(i) {
    plans.splice(i, 1);
    localStorage.setItem("studyPlans", JSON.stringify(plans));
    renderPlans();
}

// تشغيل أولي
renderPlans();