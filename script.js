let duaCount = 0;

// الدعاوي الثابتة
const duas = [
    'اللهم اغفر لها',
    'اللهم ارحمها',
    'اللهم نور قبرها',
    'اللهم اجعل قبرها روضة من رياض الجنة',
    'اللهم ثبت قلبها',
    'اللهم اجعل آخر كلامها لا إله إلا الله',
    'اللهم عافها في بدنه',
    'اللهم أبدلها دارًا خيرًا من دارها',
    'اللهم اغفر لها وارحمها',
    'اللهم وسع قبرها',
    'اللهم اجعل قبرها نورًا',
    'اللهم اجعل الجنة مثواها',
    'اللهم أره مقعده من الجنة',
    'اللهم اجعل كل عملها في ميزان حسناتها',
    'اللهم آمين'
];

// دالة لإضافة الدعاء إلى الإشعار
function addDua(duaText) {
    // عرض الدعاء في إشعار
    document.getElementById("notificationMessage").textContent = duaText;
    document.getElementById("notificationBar").style.display = "block";
    
    // تحديث عدد الأدعية
    duaCount++;
    document.getElementById("duaCounter").textContent = `عدد الأدعية: ${duaCount}`;
    
    // إخفاء الإشعار بعد 3 ثواني
    setTimeout(() => {
        document.getElementById("notificationBar").style.display = "none";
    }, 3000);
}

// دالة لإضافة دعاء مخصص من المستخدم
function addCustomDua() {
    let customDua = document.getElementById("customDuaInput").value;
    if (customDua) {
        addDua(customDua);  // إضافة الدعاء المخصص إلى الإشعار
        document.getElementById("customDuaInput").value = ""; // إعادة تعيين الحقل بعد إضافة الدعاء
    }
}

// دالة لعرض اقتباس ديني عشوائي
function showQuote() {
    const quotes = [
        "قال الله تعالى: {وَمَا لَكُمْ لَا تُؤْمِنُونَ بِاللَّهِ ۙ وَالرَّسُولُ يَدْعُوكُمْ لِتُؤْمِنُوا بِرَبِّكُمْ وَقَدْ أَخَذَ مِيثَاقَكُمْ إِن كُنتُم مُّؤْمِنِينَ } (الحديد: 10)",
        "قال رسول الله صلى الله عليه وسلم: 'إذا مات ابن آدم انقطع عمله إلا من ثلاث: صدقة جارية أو علم ينتفع به أو ولد صالح يدعو له.'",
        "قال الله تعالى: {إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ كَانَتْ لَهُمْ جَنَّاتُ النَّعِيمِ} (لقمان: 8)",
        "قال رسول الله صلى الله عليه وسلم: 'الدعاء مخ العبادة.'",
    "قال الله تعالى: 'وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ.' (غافر: 60)",
    "قال رسول الله صلى الله عليه وسلم: 'مَا عَلى الأَرْضِ مُسْلِمٌ يَدْعُو اللَّه تَعالى بِدَعْوَةٍ إِلاَّ آتَاهُ اللَّه إِيَّاهَا، أَوْ صَرَف عنْهُ مِنَ السُّوءِ مِثْلَهَا، مَا لَم يدْعُ بإِثْم، أَوْ قَطِيعَةِ رحِمٍ.'",
    "قال الله تعالى: 'وَقُل رَّبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّاحِمِينَ.' (المؤمنون: 118)",
    "قال الله تعالى: 'وَلَقَدْ جِئْتُمُونَا فُرَادَىٰ كَمَا خَلَقْنَاكُمْ أَوَّلَ مَرَّةٍ.' (الأنعام: 94)",
    "قال رسول الله صلى الله عليه وسلم: 'لا يتمنَّينَّ أحدُكم الموتَ لضُرٍّ نزل به، فإن كان لا بدَّ مُتمنِّيًا فليقل: اللَّهم أحيني ما كانت الحياةُ خيرًا لي، وتوفَّني ما كانت الوفاةُ خيرًا لي.'"
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quoteText").textContent = randomQuote;
}

// تغيير الخلفية بناءً على الوقت
function setDynamicBackground() {
    const hour = new Date().getHours();
    if (hour >= 18 || hour < 6) {
        document.body.style.background = "linear-gradient(to top, #2c3e50, #4ca1af)"; // خلفية ليلية
    } else {
        document.body.style.background = "linear-gradient(to top, #f0f8ff, #a2c2e0)"; // خلفية نهارية
    }
}

// تطبيق الخلفية المناسبة عند تحميل الصفحة
setDynamicBackground(); 

// إضافة الأحداث على الحبات للدعاء
document.querySelectorAll('.bead').forEach((button, index) => {
    button.addEventListener('click', () => {
        addDua(duas[index]); // إضافة الدعاء بناءً على الحبة المضغوطة
    });
});

// إضافة زر الدعاء المخصص
document.getElementById('customDuaButton').addEventListener('click', addCustomDua);

// تحديث الاقتباسات كل ثانية
setInterval(() => {
    showQuote();
}, 5000); // استدعاء دالة showQuote كل ثانية
