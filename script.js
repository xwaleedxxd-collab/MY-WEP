// الانتقال من الشاشة الرئيسية إلى شاشة اختيار المستخدم
document.getElementById('start-btn').addEventListener('click', () => {
    document.getElementById('landing-page').classList.remove('active');
    document.getElementById('selection-page').classList.add('active');
});

// دالة الدخول وتحديد المستخدم (وليد أو همس)
function login(username) {
    // إخفاء شاشة الاختيار وإظهار لوحة التحكم
    document.getElementById('selection-page').classList.remove('active');
    document.getElementById('dashboard-page').classList.add('active');

    // تخصيص الترحيب
    document.getElementById('welcome-msg').innerText = `أهلين ${username} 👋`;

    // رسائل التحفيز المخصصة بناءً على الشخصية التي دخلت
    const motivationBox = document.getElementById('motivation-msg');
    
    if (username === 'وليد') {
        motivationBox.style.backgroundColor = 'var(--light-blue)';
        motivationBox.innerHTML = `
            <p>والله مستواك قاعد يتحسن.</p>
            <p>كفو يا وحش. 💪</p>
            <p>همس أكيد بتنبسط إذا شافت تقدمك 🌸</p>
        `;
    } else if (username === 'همس') {
        motivationBox.style.backgroundColor = 'var(--light-pink)';
        motivationBox.innerHTML = `
            <p>شطورة 🌸</p>
            <p>كملي... باقي شوي.</p>
            <p>وليد بيفتخر فيك 🤍</p>
        `;
    }
}