//DIVS AND TEXT - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
let quiz = document.querySelector("#quiz");
let radio = document.querySelector("#radio");
let questionsAndPoints = document.querySelector("#question-number");
let questionText = document.querySelector("#questions");
let resultsText = document.querySelector("#quiz-result");
let answersUl = document.querySelector("#answers");

//BUTTONS - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
let darkBtn = document.querySelector("#dark-mode");
let lightBtn = document.querySelector("#light-mode");
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
        question: "Jag är sjuksköterska",
        a: "Ja",
        b: "Nej",
        correctAnswers: "Nej",
        type: "trueFalse"
    },
    {
        question: "Hur gammal blev Astrid Lindgren?",
        a: "87",
        b: "89",
        c: "94",
        d: "96",
        correctAnswers: "94",
        type: "multipleChoice"
    },
    {
        question: "Vilka av dessa karaktärer en katt?",
        a: "Pelle",
        b: "Cheshire",
        c: "Pluto",
        d: "Lufsen",
        correctAnswers:["Pelle", "Cheshire"], 
        type: "checkBox"
    },
    {
        question: "Vilken film är INTE från Studio Ghibli?",
        a: "Askungen",
        b: "YourName",
        c: "The Wind Rises",
        d: "Sprited Away",
        correctAnswers:["Askungen","YourName"], 
        type: "checkBox"
    },
];

// ARRAY WITH ANSWERS - - - - - - - - - - - - - - - - - - - - - - - - - - - -
let answerArray = [];

//FUNCTION DARK MODE LIGHT MODE - - - - - - - - - - - - - - - - - - - - - - -
// FORTSÄTT HÄR! 

//FUNKTION SHOW QUIZ - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function showQuestions (){   
    //Hide start button, show next button
    startBtn.style.display = 'none';
    nextBtn.removeAttribute("hidden");
    
    //Show points with color and hidden buttons
    if (questionNum >= myQuestions.length) {

        resultBtn.removeAttribute("hidden");
        restartBtn.removeAttribute("hidden");
        
        quiz.innerHTML = "<h2>Du fick " + points + " av " + myQuestions.length + " rätt!</h2>";
        
        if ((points/questionNum) > 0.75) {
            quiz.style.color = "green";
        }
        else if ((points/questionNum)<=0.74 && (points/questionNum)>=0.5){
            quiz.style.color = "orange";
        }
        else {
            quiz.style.color = "red";
        }
        //Stops quiz
        return false;
    }
    
    //Current question out of total length of quiz
    questionsAndPoints.innerText = "Fråga " + (questionNum+1) + " av " + myQuestions.length;

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
        radio.innerHTML += `<label> <input type="radio" name="radioAns" value=${myQuestions[questionNum].a}> ${ansA} 
        </label><br> <label> <input type="radio" name="radioAns" value=${myQuestions[questionNum].b}> ${ansB} 
        </label><br> <label> <input type="radio" name="radioAns" value=${myQuestions[questionNum].c}> ${ansC} 
        </label><br> <label> <input type="radio" name="radioAns" value=${myQuestions[questionNum].d}> ${ansD} 
        </label><br><br>`
    }
    
    else if (myQuestions[questionNum].type === "checkBox") {
        radio.innerHTML += `<label> <input type="checkbox" value=${myQuestions[questionNum].a}> ${ansA} 
        </label><br> <label> <input type="checkbox" value=${myQuestions[questionNum].b}> ${ansB} 
        </label><br> <label> <input type="checkbox" value=${myQuestions[questionNum].c}> ${ansC}
        </label><br> <label> <input type="checkbox" value=${myQuestions[questionNum].d}> ${ansD}
        </label><br><br>`
    }

    else {
        radio.innerHTML += `<label> <input type="radio" name="radioAns" value=${myQuestions[questionNum].a}> ${ansA} 
        </label><br> <label> <input type="radio" name="radioAns" value=${myQuestions[questionNum].b}> ${ansB}  
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
            answers.style.color = "green";
        }
        else {
            answers.innerHTML =`${obj.question}<br>Rätt svar:  ${obj.correctAnswers}<br><br>`;
            answers.style.color = "red";
        }
        answersUl.append(answers);
    })
    resultBtn.style.display = "none";
}

//BUTTONS - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
