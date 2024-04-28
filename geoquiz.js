const questions = [
    {
        question: "يتركب معدن الماالكيت من",
        options: ["كربونات النحاس المائية", "كبريتيد النحاس", "كبريتات النحاس"],
        answer: "كربونات النحاس المائية"
    },
    {
        question: "تبلغ صلادة معدن الكالسيت",
        options: ["3", "7", "5"],
        answer: "3"
    },
    {
        question: "يتلون الكوارتز باللون الوردي عندما يحتوي على شوائب",
        options: ["اكاسيد الحديد", "المنجنيز", "الكربون"],
        answer: "المنجنيز"
    },
    {
        question: "من أمثلة البريق اللافلزي",
        options: ["البريق الزجاجي", "الجالينا", "النيكل"],
        answer: "البريق الزجاجي"
    },
    {
        question: "من المعادن الاقتصادية الكبريتيدات ومنها",
        options: ["الدولوميت", "البيريت", "الهيماتيت"],
        answer: "البيريت"
    },
    {
        question: "يتركب معدن السفاليريت من",
        options: ["كبريتيد النحاس", "كبريتيد الزنك", "أكسيد السيليكون"],
        answer: "كبريتيد الزنك"
    },
    {
        question: "تشكل 8 عناصر أكثر من ....% من وزن صخور القشرة الأرضية",
        options: ["76", "98.5", "82.5"],
        answer: "98.5"
    },
];

const questionElement = document.getElementById("question");
const submitButton = document.getElementById("btn");
const resultElement = document.getElementById("result");
const optionsContainer = document.getElementById("options-container");

let score = 0;
let ind = 0;

function genquest() {
    const questionind = questions[ind];
    questionElement.innerText = questionind.question;
    optionsContainer.innerHTML = "";
    questionind.options.forEach(option => {
        const optionButton = document.createElement("button");
        optionButton.classList.add("button-2-mai");
        optionButton.innerText = option;
        optionButton.addEventListener("click", () => selectOption(option, questionind.answer));
        optionsContainer.appendChild(optionButton);
    });
}

function selectOption(selectedOption, correctAnswer) {
    const optionButtons = document.querySelectorAll("#options-container button");
    optionButtons.forEach(button => {
        button.disabled = true;
        if (button.innerText === correctAnswer) {
            button.style.backgroundColor = "green";
            if (selectedOption === correctAnswer) {
                score++;
            }
        } else if (button.innerText === selectedOption) {
            button.style.backgroundColor = "red";
        }
    });

    setTimeout(() => {
        ind++;
        if (ind < questions.length) {
            genquest();
        }
    }, 1000);
}

submitButton.addEventListener("click", () => {
    resultElement.innerText = `You scored ${score} out of ${questions.length}`;

});

genquest(); // Initially load the first question

/////////////////////////////////////////////////////////////////////////////////

var userIcon = document.getElementById('user-mai');
userIcon.addEventListener('click', function() {
window.location.href = "ispan.html"; 
});


const nightModeToggle = document.getElementById('nightModeToggle');
const body = document.body;

nightModeToggle.addEventListener('click', function() {
    body.classList.toggle('night-mode');
    nightModeToggle.classList.toggle('fa-moon');
    nightModeToggle.classList.toggle('fa-sun');
    // Save user preference to localStorage
    localStorage.setItem('nightModeEnabled', body.classList.contains('night-mode'));
});
window.onload = function () {
    const nightModeEnabled = localStorage.getItem('nightModeEnabled') === 'true';
    if (nightModeEnabled) {
        body.classList.add('night-mode');
        nightModeToggle.classList.add('fa-moon');
        nightModeToggle.classList.remove('fa-sun');
    } else {
        body.classList.remove('night-mode');
        nightModeToggle.classList.remove('fa-moon');
        nightModeToggle.classList.add('fa-sun');
    }
}
