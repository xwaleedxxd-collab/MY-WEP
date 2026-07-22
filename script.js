// === قاعدة البيانات الضخمة والموسعة (مستويات غنية ومناسبة للاستخدام الطويل) ===
const wordsDatabase = {
    easy: [
        { word: "cat", meaning: "قطة", example: "The cat is sleeping.", translation: "القطة نائمة." },
        { word: "sun", meaning: "شمس", example: "The sun is bright.", translation: "الشمس ساطعة." },
        { word: "book", meaning: "كتاب", example: "I read a book.", translation: "أنا أقرأ كتاباً." },
        { word: "happy", meaning: "سعيد", example: "Be happy today.", translation: "كن سعيداً اليوم." },
        { word: "moon", meaning: "قمر", example: "The moon looks nice.", translation: "القمر يبدو جميلاً." },
        { word: "smile", meaning: "ابتسامة", example: "Keep smiling.", translation: "استمر بالابتسام." },
        { word: "door", meaning: "باب", example: "Open the door.", translation: "افتح الباب." },
        { word: "tree", meaning: "شجرة", example: "The tree is tall.", translation: "الشجرة طويلة." },
        { word: "water", meaning: "ماء", example: "Drink some water.", translation: "اشرب بعض الماء." },
        { word: "light", meaning: "ضياء / خفيف", example: "Turn on the light.", translation: "شغّل النور." },
        { word: "star", meaning: "نجمة", example: "Look at the star.", translation: "انظر إلى النجمة." },
        { word: "time", meaning: "وقت", example: "Time passes fast.", translation: "الوقت يمر سريعاً." },
        { word: "heart", meaning: "قلب", example: "A kind heart.", translation: "قلب طيب." },
        { word: "dream", meaning: "حلم", example: "Follow your dream.", translation: "اتبع حلمك." },
        { word: "life", meaning: "حياة", example: "Life is beautiful.", translation: "الحياة جميلة." },
        { word: "pen", meaning: "قلم", example: "Write with a pen.", translation: "اكتب بالقلم." },
        { word: "fish", meaning: "سمكة", example: "The fish swims fast.", translation: "السمكة تسبح بسرعة." },
        { word: "milk", meaning: "حليب", example: "Drink fresh milk.", translation: "اشرب حليباً طازجاً." },
        { word: "ball", meaning: "كرة", example: "Kick the ball.", translation: "ركل الكرة." },
        { word: "apple", meaning: "تفاحة", example: "An apple a day.", translation: "تفاحة كل يوم." },
        { word: "bird", meaning: "طائر", example: "The bird is flying.", translation: "الطائر يطير." },
        { word: "chair", meaning: "كرسي", example: "Sit on the chair.", translation: "اجلس على الكرسي." },
        { word: "desk", meaning: "مكتب", example: "Clean your desk.", translation: "نظف مكتبك." },
        { word: "hand", meaning: "يد", example: "Wash your hands.", translation: "اغسل يديك." },
        { word: "rain", meaning: "مطر", example: "I like the rain.", translation: "أنا أحب المطر." }
    ],
    medium: [
        { word: "friend", meaning: "صديق", example: "You are a good friend.", translation: "أنت صديق جيد." },
        { word: "future", meaning: "مستقبل", example: "Your future is bright.", translation: "مستقبلك مشرق." },
        { word: "journey", meaning: "رحلة", example: "Enjoy the journey.", translation: "استمتع بالرحلة." },
        { word: "believe", meaning: "يؤمن / يثق", example: "Believe in yourself.", translation: "ثق بنفسك." },
        { word: "success", meaning: "نجاح", example: "Hard work brings success.", translation: "العمل الجاد يجلب النجاح." },
        { word: "courage", meaning: "شجاعة", example: "Have the courage to start.", translation: "امتلك الشجاعة للبدء." },
        { word: "freedom", meaning: "حرية", example: "Freedom is precious.", translation: "الحرية قيمة." },
        { word: "patience", meaning: "صبر", example: "Patience brings peace.", translation: "الصبر يجلب السلام." },
        { word: "wisdom", meaning: "حكمة", example: "Wisdom comes with experience.", translation: "الحكمة تأتي مع الخبرة." },
        { word: "strength", meaning: "قوة", example: "Find your inner strength.", translation: "جد قوتك الداخلية." },
        { word: "balance", meaning: "توازن", example: "Find balance in life.", translation: "جد التوازن في الحياة." },
        { word: "discover", meaning: "يكتشف", example: "Discover new things.", translation: "اكتشف أشياء جديدة." },
        { word: "strategy", meaning: "استراتيجية", example: "We need a clear strategy.", translation: "نحن بحاجة لإستراتيجية واضحة." },
        { word: "experience", meaning: "تجربة / خبرة", example: "Gain valuable experience.", translation: "اكتسب خبرة قيّمة." },
        { word: "challenge", meaning: "تحدي", example: "Accept the challenge.", translation: "اقبل التحدي." },
        { word: "create", meaning: "يبتكر / يصنع", example: "Create your own path.", translation: "اصنع طريقك الخاص." },
        { word: "develop", meaning: "يطور", example: "Develop your skills daily.", translation: "طور مهاراتك يومياً." },
        { word: "focus", meaning: "يركز", example: "Focus on your goals.", translation: "ركز على أهدافك." },
        { word: "manage", meaning: "يدير", example: "Manage your time well.", translation: "أدر وقتك جيداً." },
        { word: "active", meaning: "نشيط", example: "Stay active every day.", translation: "ابق نشيطاً كل يوم." }
    ],
    hard: [
        { word: "extraordinary", meaning: "استثنائي", example: "An extraordinary effort leads to exceptional results.", translation: "جهد استثنائي يؤدي إلى نتائج استثنائية." },
        { word: "perseverance", meaning: "مثابرة / إصرار", example: "Perseverance is the secret of all triumphs.", translation: "المثابرة هي سر كل الانتصارات." },
        { word: "accomplishment", meaning: "إنجاز كبير", example: "Be proud of every single accomplishment.", translation: "كن فخوراً بكل إنجاز تحققه." },
        { word: "sophisticated", meaning: "معقد / متطور", example: "This requires a sophisticated approach.", translation: "هذا يتطلب مقاربة متطورة." },
        { word: "determination", meaning: "عزيمة وإرادة", example: "His determination helped him overcome all obstacles.", translation: "ساعدته عزيمته في التغلب على كل العقبات." },
        { word: "implementation", meaning: "تنفيذ / تطبيق", example: "The successful implementation of the project.", translation: "التنفيذ الناجح للمشروع." },
        { word: "comprehensive", meaning: "شامل / متكامل", example: "We need a comprehensive review of the system.", translation: "نحن بحاجة لمراجعة شاملة للنظام." },
        { word: "resilience", meaning: "مرونة / قدرة على التعافي", example: "Mental resilience is essential in tough times.", translation: "المرونة الذهنية ضرورية في الأوقات الصعبة." },
        { word: "transformation", meaning: "تحوّل جذري", example: "Personal transformation takes time and effort.", translation: "التحول الشخصي يستغرق وقتاً وجهداً." },
        { word: "interpretation", meaning: "تفسير / تأويل", example: "There are multiple interpretations of the data.", translation: "هناك تفسيرات متعددة للبيانات." },
        { word: "consciousness", meaning: "وعي إدراكي", example: "Raising public consciousness is vital.", translation: "رفع الوعي العام أمر حيوي." },
        { word: "characteristics", meaning: "خصائص / سمات", example: "Identify the key characteristics of success.", translation: "حدد السمات الرئيسية للنجاح." },
        { word: "unprecedented", meaning: "غير مسبوق", example: "We are living in unprecedented times.", translation: "نحن نعيش في أوقات غير مسبوقة." },
        { word: "simultaneously", meaning: "في نفس الوقت / بالتزامن", example: "The two events happened simultaneously.", translation: "حدث الأمران في نفس الوقت." },
        { word: "sophistication", meaning: "رقي / تعقيد متطور", example: "The sophistication of modern technology.", translation: "رقي التكنولوجيا الحديثة." },
        { word: "acknowledgment", meaning: "اعتراف / شكر", example: "Thank you in acknowledgment of your efforts.", translation: "شكراً تقديراً لجهودك." }
    ]
};

const textDatabase = {
    easy: [
        { text: "I love learning english.", translation: "أنا أحب تعلم الإنجليزية." },
        { text: "Today is a beautiful day.", translation: "اليوم يوم جميل." },
        { text: "Smile every single day.", translation: "ابتسم في كل يوم." },
        { text: "Keep moving forward always.", translation: "واضل التقدم دائماً." },
        { text: "You are doing great.", translation: "أنت تقوم بعمل رائع." },
        { text: "Reading books helps a lot.", translation: "قراءة الكتب تساعد كثيراً." },
        { text: "Drink water to stay healthy.", translation: "اشرب الماء لتظل بصحة جيدة." },
        { text: "Always believe in your dreams.", translation: "دائماً آمن بأحلامك." }
    ],
    medium: [
        { text: "Practice every day to get better at speaking.", translation: "تدرب كل يوم لكي تصبح أفضل في التحدث." },
        { text: "Learning step by step makes the process easy.", translation: "التعلم خطوة بخطوة يجعل العملية سهلة." },
        { text: "Believe you can and you will achieve your goals.", translation: "آمن بأنك تستطيع وستحقق أهدافك." },
        { text: "Consistency creates amazing growth over time.", translation: "الاستمرارية تصنع نمواً مذهلاً بمرور الوقت." },
        { text: "Every challenge you face makes you stronger.", translation: "كل تحدٍ تواجهه يجعلك أقوى." },
        { text: "Success is built through daily small habits.", translation: "النجاح يبنى من خلال العادات اليومية الصغيرة." }
    ],
    hard: [
        { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", translation: "النجاح ليس نهائياً، والفشل ليس قاتلاً: بل الشجاعة للاستمرار هي ما تحسب." },
        { text: "The only limit to our realization of tomorrow will be our doubts of today.", translation: "الحد الوحيد لتحقيقنا لأحلامنا غداً سيكون شكوكنا اليوم." },
        { text: "In the middle of every difficulty lies hidden opportunity waiting to be discovered.", translation: "في منتصف كل صعوبة تكمن فرصة مخفية تنتظر أن تُكتشف." },
        { text: "Small daily improvements over time lead to stunning and extraordinary results.", translation: "التحسينات اليومية الصغيرة بمرور الوقت تؤدي إلى نتائج مذهلة واستثنائية." },
        { text: "Excellence is not an act, but a habit that you build through continuous practice.", translation: "التميز ليس مجرد فعل، بل هو عتبة تبنيها من خلال الممارسة المستمرة." },
        { text: "Hard work combined with absolute persistence will always lead to remarkable achievements.", translation: "العمل الجاد مقترناً بالإصرار المطلق سيؤدي دائماً إلى إنجازات رائعة." },
        { text: "Your mindset determines your direction in both your personal and professional life.", translation: "طريقة تفكيرك تحدد اتجاهك في حياتك الشخصية والمهنية." }
    ]
};

const walidQuotes = [
    "والله مستواك قاعد يتحسن كفو يا وحش 💪",
    "كل يوم أفضل من اللي قبله يا وليد 🚀",
    "استمرارك هو السر، كمل يا بطل ⚡",
    "همس أكيد بتنبسط لما تشوف مستواك اليوم 🌸"
];

const hamsQuotes = [
    "شطورة يا همس 🌸 خطوة بخطوة وبتتقني كل الكلمات!",
    "ما شاء الله عليك، استمرارية رهيبة ✨",
    "وليد يفتخر فيك وبكل تدريب تسوينه 🤍",
    "إنجاز لطيف وجميل كل يوم 🎀"
];

let currentUser = "";
let selectedLevel = "easy";
let currentItems = [];
let currentIndex = 0;

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

document.getElementById('start-btn').addEventListener('click', () => showScreen('selection-page'));

function login(user) {
    currentUser = user;
    showDashboard();
}

function setLevel(lvl) {
    selectedLevel = lvl;
    document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`lvl-${lvl}`).classList.add('active');
    
    const lvlNames = { easy: "🟢 مبتدئ", medium: "🟡 متوسط", hard: "🔴 متقدم" };
    document.getElementById('level-badge').innerText = lvlNames[lvl];
}

function showDashboard() {
    showScreen('dashboard-page');
    document.getElementById('welcome-msg').innerText = `أهلين ${currentUser} 👋`;
    const motivationBox = document.getElementById('motivation-msg');

    if (currentUser === 'وليد') {
        motivationBox.style.backgroundColor = 'var(--light-blue)';
        const randomQuote = walidQuotes[Math.floor(Math.random() * walidQuotes.length)];
        motivationBox.innerHTML = `<p>${randomQuote}</p>`;
    } else {
        motivationBox.style.backgroundColor = 'var(--light-pink)';
        const randomQuote = hamsQuotes[Math.floor(Math.random() * hamsQuotes.length)];
        motivationBox.innerHTML = `<p>${randomQuote}</p>`;
    }
}

function exitToDashboard() {
    showDashboard();
}

// خوارزمية الخلط العشوائي الصارمة (Fisher-Yates Shuffle)
function shuffleArray(array) {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ===================== 1. تدريب الكلمات =====================
function startWordPractice() {
    currentItems = shuffleArray(wordsDatabase[selectedLevel]);
    currentIndex = 0;
    showScreen('practice-page');
    loadWord();
}

function loadWord() {
    const item = currentItems[currentIndex];
    document.getElementById('progress-text').innerText = `${currentIndex + 1} من ${currentItems.length}`;
    
    document.getElementById('prev-btn').disabled = (currentIndex === 0);

    const input = document.getElementById('type-input');
    input.value = "";
    input.disabled = false;
    input.focus();
    document.getElementById('card-details').style.display = "none";
    renderWordDisplay("");
}

function renderWordDisplay(typed) {
    const target = currentItems[currentIndex].word;
    let html = "";
    for (let i = 0; i < target.length; i++) {
        if (i < typed.length) {
            html += typed[i].toLowerCase() === target[i].toLowerCase() 
                ? `<span class="char-correct">${target[i]}</span>`
                : `<span class="char-incorrect">${target[i]}</span>`;
        } else {
            html += `<span class="char-untyped">${target[i]}</span>`;
        }
    }
    document.getElementById('word-display').innerHTML = html;
}

document.getElementById('type-input').addEventListener('input', (e) => {
    const typed = e.target.value;
    const target = currentItems[currentIndex].word;
    renderWordDisplay(typed);

    if (typed.toLowerCase() === target.toLowerCase()) {
        e.target.disabled = true;
        const obj = currentItems[currentIndex];
        document.getElementById('detail-word').innerText = obj.word;
        document.getElementById('detail-meaning').innerText = obj.meaning;
        document.getElementById('detail-example').innerText = obj.example;
        document.getElementById('detail-translation').innerText = obj.translation;
        document.getElementById('card-details').style.display = "block";
    }
});

function nextWord() {
    currentIndex++;
    if (currentIndex < currentItems.length) loadWord();
    else showScreen('result-page');
}

function prevWord() {
    if (currentIndex > 0) {
        currentIndex--;
        loadWord();
    }
}

function skipWord() {
    nextWord();
}

// ===================== 2. تدريب الجمل =====================
function startTextPractice() {
    currentItems = shuffleArray(textDatabase[selectedLevel]);
    currentIndex = 0;
    showScreen('text-practice-page');
    loadText();
}

function loadText() {
    const item = currentItems[currentIndex];
    document.getElementById('text-progress-text').innerText = `${currentIndex + 1} من ${currentItems.length}`;
    
    document.getElementById('text-prev-btn').disabled = (currentIndex === 0);

    const input = document.getElementById('text-type-input');
    input.value = "";
    input.disabled = false;
    input.focus();
    document.getElementById('text-card-details').style.display = "none";
    renderTextDisplay("");
}

function renderTextDisplay(typed) {
    const target = currentItems[currentIndex].text;
    let html = "";
    for (let i = 0; i < target.length; i++) {
        if (i < typed.length) {
            html += typed[i] === target[i]
                ? `<span class="char-correct">${target[i]}</span>`
                : `<span class="char-incorrect">${target[i]}</span>`;
        } else {
            html += `<span class="char-untyped">${target[i]}</span>`;
        }
    }
    document.getElementById('text-display').innerHTML = html;
}

document.getElementById('text-type-input').addEventListener('input', (e) => {
    const typed = e.target.value;
    const target = currentItems[currentIndex].text;
    renderTextDisplay(typed);

    if (typed === target) {
        e.target.disabled = true;
        document.getElementById('text-translation-detail').innerText = currentItems[currentIndex].translation;
        document.getElementById('text-card-details').style.display = "block";
    }
});

function nextText() {
    currentIndex++;
    if (currentIndex < currentItems.length) loadText();
    else showScreen('result-page');
}

function prevText() {
    if (currentIndex > 0) {
        currentIndex--;
        loadText();
    }
}

function skipText() {
    nextText();
}
