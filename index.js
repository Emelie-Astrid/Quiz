//STYLE  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
let body = document.querySelector("body");
body.style.background = "mediumturquoise";
body.style.color = "black";

//OBJECTS - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
let quiz = document.querySelector("#quiz");
let radio = document.querySelector("#radio");
let results = document.querySelector("#results");
let questionsAndPoints = document.querySelector("#question-number");
let questionText = document.querySelector("#questions");
let resultsText = document.querySelector("#quiz-result");
let answersUl = document.querySelector("#answers");

//BUTTONS - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
let changeBtn = document.querySelector("#change-mode");
let startBtn = document.querySelector("#start-quiz");
let nextBtn = document.querySelector("#next-question");
let resultBtn = document.querySelector("#show-results");
let restartBtn = document.querySelector("#restart-quiz");

//QUESTION NUMBER AND POINTS - - - - - - - - - - - - - - - - - - - - - - - - -
let questionNum = 0;
let points = 0;

//ARRAY WITH QUIZ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
let myQuestions = [
    {
        question: "Om det sover en osynlig man i din säng, vem ska du ringa?",
        a: "Va?!",
        b: "Ghostbusters!",
        correctAnswers: "Ghostbusters!",
        type: "trueFalse"
    },
    {
        question: "Är det sant att Han Solo sköt först på Mos Eisley Cantina?",
        a: "Sant",
        b: "Falskt",
        correctAnswers: "Sant",
        type: "trueFalse"
    },
    {
        question: "Vad föreställer loggan för Mr. Miyagis dojo i Karate kid?",
        a: "Bonsai",
        b: "Drake",
        c: "Kobra",
        d: "Solnedgång",
        correctAnswers: "Bonsai",
        type: "multipleChoice"
    },
    {
        question: "Vilka år hade filmerna i Star Wars Original triology premiär?",
        a: "1980",
        b: "1983",
        c: "1977",
        d: "1986",
        correctAnswers:["1977", "1980", "1983"], 
        type: "checkBox"
    },
    {
        question: "'Hasta la vista, baby' får man höra Arnorld Schwarzenegger säga i The Terminator, \n men vilket språk använder de i den spanska dubbningen av filmen?",
        a: "Spanska",
        b: "Italienska",
        c: "Japanska",
        d: "Tyska",
        correctAnswers: "Japanska",
        type: "multipleChoice"
    },
    {
        question: "I Blade Runner från 1982 får man ibland syn på en origami-figur, vad föreställer den?",
        a: "Trana",
        b: "Häst",
        c: "Får",
        d: "Enhörning",
        correctAnswers: "Enhörning",
        type: "multipleChoice"
    },
    {
        question: "Filmen Back to the Future från 1985 fick två uppföljare, vilka år reser de till i filmerna?",
        a: "1885",
        b: "1955",
        c: "2015",
        d: "2055",
        correctAnswers:["1885", "1955", "2015"], 
        type: "checkBox"
    },
    {
        question: "Daft Punk gjorde soundtracket till Tron Legacy 2010, men är det sant att de syns i filmen?",
        a: "Sant",
        b: "Falskt",
        correctAnswers: "Sant",
        type: "trueFalse"
    },
    {
        question: "Vilken stad utspelar sig den animerade filmen Akira från 1988?",
        a: "Neo-Seoul",
        b: "Neo-Tokyo",
        c: "Neo-Osaka",
        d: "Neo-London",
        correctAnswers: "Neo-Tokyo",
        type: "multipleChoice"
    },
    {
        question: "Blade Runner hade premiär 1982, men vilket år utspelar sig filmen?",
        a: "1984",
        b: "2000",
        c: "2019",
        d: "2022",
        correctAnswers: "2019",
        type: "multipleChoice"
    },
];

// ARRAY WITH ANSWERS - - - - - - - - - - - - - - - - - - - - - - - - - - - -
let answerArray = [];

//FUNCTION DARK MODE LIGHT MODE - - - - - - - - - - - - - - - - - - - - - - -
function changeMode() {
    if (body.style.background === "mediumturquoise") {
        document.body.style.background = "black";
        body.style.color = "mediumturquoise";
        changeBtn.innerText = "Light Mode";
    }
    else {
        document.body.style.background = "mediumturquoise";
        body.style.color = "black";
        changeBtn.innerText = "Dark Mode";
    }
}

//FUNKTION SHOW QUIZ - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function showQuestions (){   
    //Hide start button, show next button
    startBtn.style.display = 'none';
    nextBtn.removeAttribute("hidden");

    //Changes text on button for last question
    if (questionNum === (myQuestions.length - 1)) {
        nextBtn.innerText = "Slutför quiz";
    }

    //Show points with color and hidden buttons at the end of the quiz
    if (questionNum >= myQuestions.length) {

        results.removeAttribute("hidden");
        
        quiz.innerHTML = "<h2>Du fick " + points + " av " + myQuestions.length + " rätt!</h2>";
        
        if ((points/questionNum) > 0.75) {
            quiz.style.color = "teal";
        }
        else if ((points/questionNum)<=0.74 && (points/questionNum)>=0.5){
            quiz.style.color = "darkorange";
        }
        else {
            quiz.style.color = "tomato";
        }
        //Stops quiz
        return false;
    }
    
    //Current question out of total length of quiz
    questionsAndPoints.innerText = "Fråga " + (questionNum + 1) + " av " + myQuestions.length;

    //Text of questions
    questionText.innerText = myQuestions[questionNum].question;

    //Declare answers
    let ansA = myQuestions[questionNum].a;
    let ansB = myQuestions[questionNum].b;
    let ansC = myQuestions[questionNum].c;
    let ansD = myQuestions[questionNum].d;

    //Empties div with radio buttons and checkboxes
    radio.innerHTML= "";

    //Creates checkboxes or radio buttons - - - - - - - - - - - - - - - - -
    if (myQuestions[questionNum].type === "multipleChoice") {
        radio.innerHTML += `<label> <input type="radio" name="radioAns" value="${myQuestions[questionNum].a}"> ${ansA} 
        </label><br> <label> <input type="radio" name="radioAns" value="${myQuestions[questionNum].b}"> ${ansB} 
        </label><br> <label> <input type="radio" name="radioAns" value="${myQuestions[questionNum].c}"> ${ansC} 
        </label><br> <label> <input type="radio" name="radioAns" value="${myQuestions[questionNum].d}"> ${ansD} 
        </label><br><br>`
    }
    
    //Value wrapped in "" to be able to have string as answer to question
    else if (myQuestions[questionNum].type === "checkBox") {
        radio.innerHTML += `<label> <input type="checkbox" value="${myQuestions[questionNum].a}"> ${ansA} 
        </label><br> <label> <input type="checkbox" value="${myQuestions[questionNum].b}"> ${ansB} 
        </label><br> <label> <input type="checkbox" value="${myQuestions[questionNum].c}"> ${ansC}
        </label><br> <label> <input type="checkbox" value="${myQuestions[questionNum].d}"> ${ansD}
        </label><br><br>`
    }

    else {
        radio.innerHTML += `<label> <input type="radio" name="radioAns" value="${myQuestions[questionNum].a}"> ${ansA} 
        </label><br> <label> <input type="radio" name="radioAns" value="${myQuestions[questionNum].b}"> ${ansB}  
        </label><br><br>`
    }
}
//FUNCTION CHECK ANSWERS - - - - - - - - - - - - - - - - - - - - - - - - - -
function checkAnswers () {

    //Answers from checkboxes
    if (myQuestions[questionNum].type === "checkBox"){

        let allCheckedBoxes = document.querySelectorAll("input[type='checkbox']:checked");
        let checkBoxPoints = [];

        //Tar emot alla boxar som är checkade
        allCheckedBoxes.forEach((box) => {
            checkBoxPoints.push(box.value);
        });

        let pointsArr = checkBoxPoints.filter((check) => {
            return (myQuestions[questionNum].correctAnswers.includes(check)) 
        });

        if ((pointsArr.length === myQuestions[questionNum].correctAnswers.length) && 
            (checkBoxPoints.length === myQuestions[questionNum].correctAnswers.length)) {
            points++;
            answerArray.push({
                question:myQuestions[questionNum].question, 
                correctAnswers:myQuestions[questionNum].correctAnswers, 
                point: true})
        }
        else {
            answerArray.push({
                question: myQuestions[questionNum].question,
                correctAnswers:myQuestions[questionNum].correctAnswers, 
                point: false})
        }
        }
        
    //Answers from radiobuttons
    else {
        let radioArr = document.getElementsByName("radioAns");
        for (let i=0; i<radioArr.length; i++) {
            if (radioArr[i].checked) {
            ans = radioArr[i].value;
            // console.log('value is ' + ans);
        }
    }
    //kollar om checked answer matchar korrekt val
    if (ans === myQuestions[questionNum].correctAnswers) {
        points++;
        answerArray.push({question:myQuestions[questionNum].question, 
            correctAnswers:myQuestions[questionNum].correctAnswers, 
            point: true})
    }
    else {
        answerArray.push({question:myQuestions[questionNum].question, 
            correctAnswers:myQuestions[questionNum].correctAnswers, 
            point: false})

    }
    }
    questionNum++;
    showQuestions();
}

//FUNCTION SHOW RESULTS - - - - - - - - - - - - - - - - - - - - - - - - - -
function showResults () {
    answerArray.forEach((obj) => {
        let answers = document.createElement("li");
        if(obj.point === true){
            answers.innerHTML =`${obj.question}<br><br>`;
            answers.style.color = "teal";
        }
        else {
            answers.innerHTML =`${obj.question}<br>Rätt svar:  ${obj.correctAnswers}<br><br>`;
            answers.style.color = "orangered";
        }
        answersUl.append(answers);
    })
    resultBtn.style.display = "none";
}

//BUTTONS - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
changeBtn.addEventListener("click", () => {
    changeMode();
});

startBtn.addEventListener("click", () => {
    showQuestions();
});

nextBtn.addEventListener("click", () => {
    checkAnswers();
})

resultBtn.addEventListener("click", () => {
    showResults();
});

restartBtn.addEventListener("click", () => {
    window.location.reload();
});
