console.log("hej");

//DIVERSE - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
let svar;
let currentQuestion;

//KNAPPAR - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
let darkBtn = document.querySelector("#dark-mode");
let lightBtn = document.querySelector("#light-mode");

//HEADINGS OCH TEXT - - - - - - - - - - - - - - - - - - - - - - - - -
let questionsAndPoints = document.querySelector("#question-number");
let questionText = document.querySelector("#questions");
let resultsText = document.querySelector("#quiz-result");

//FRÅGOR OCH POÄNG - - - - - - - - - - - - - - - - - - - - - - - - -
let questionNum = 0;
let points = 0;

//ARRAY MED QUIZ - - - - - - - - - - - - - - - - - - - - - - - - - -
let myQuestions = [
    {
        question: "Heter min katt Salsa?",
        a: "Ja",
        b: "Nej",
        answer: "A",
        // type: "trueFalse"
    },
    {
        question: "Jag heter Astrid i mellannamn",
        a: "Ja",
        b: "Nej",
        answer: "A",
        // type: "trueFalse"
    },
    {
        question: "Jorden är platt",
        a: "Ja",
        b: "Nej",
        answer: "B",
        // type: "trueFalse"
    },
    {
        question: "Himlen är blå",
        a: "Ja",
        b: "Nej",
        answer: "A",
        // type: "trueFalse"
    },
    {
        question: "Jag är sjuksköterska",
        a: "Ja",
        b: "Nej",
        answer: "B",
        // type: "trueFalse"
    },
    {
        question: "Kaffe",
        a: "Ja",
        b: "Nej",
        answer: "A",
        // type: "trueFalse"
    },
    // {
    //     question: "Hur gammal blev Astrid Lindgren?",
    //     a: 89,
    //     b: 91,
    //     c: 94,
    //     d: 97,
    //     answer: "C",
    //     type: "multipleChoice"
    // },
    // {
    //     question: "Vilken film är INTE från Studio Ghibli?",
    //     a: "The Cat Returns",
    //     b: "Your Name",
    //     c: "The Wind Rises",
    //     d: "Sprited Away",
    //     answer: "B",
    //     type: "multipleChoice"
    // },
    // {
    //     question: "Vilken film är INTE från Studio Ghibli?",
    //     a: "The Cat Returns",
    //     b: "Your Name",
    //     c: "The Wind Rises",
    //     d: "Sprited Away",
    //     answer: "B",
    //     type: "checkBox"
    // },
    // {
    //     question: "Vilken film är INTE från Studio Ghibli?",
    //     a: "The Cat Returns",
    //     b: "Your Name",
    //     c: "The Wind Rises",
    //     d: "Sprited Away",
    //     answer: "B",
    //     type: "checkBox"
    // },
];

//FUNKTION DARK MODE LIGHT MODE - - - - - - - - - - - - - - - - - - -

//FUNKTION VISA FRÅGOR - - - - - - - - - - - - - - - - - - - - - - - - - -

function showQuestions (){
    let test = document.querySelector("#quiz");

    //Kollar antalet frågor mot array och skriver resultat
    if (questionNum >= myQuestions.length) {
        test.innerHTML = "<h2>Du fick " + points + " av " + myQuestions.length + " rätt!</h2>";
        resultsText.innerHTML = "Quiz klart!"
        questionNum = 0;
        points = 0;
        //Stoppar functionen när quiz är klar
        return false;
    }

    //Skriver ut fråga xx av xx i en h2
    questionsAndPoints.innerHTML = "Fråga " + (questionNum+1) + " av " + myQuestions.length;

    //Deklarerar frågor och svarsalternativ
    currentQuestion = myQuestions[questionNum].question;
    ansA = myQuestions[questionNum].a;
    ansB = myQuestions[questionNum].b;
    
    //Skriver ut frågan
    questionText.innerHTML = currentQuestion;

    //Skriver ut svarsalternativ i radio-div
    test.innerHTML += '<label> <input type="radio" name="svarsAlt" value="A"> ' + ansA + '</label><br>';
    test.innerHTML += '<label> <input type="radio" name="svarsAlt" value="B"> ' + ansB + '</label><br><br>';
    
    //Resultatknapp
    test.innerHTML += "<button onclick='checkAnswers()'>Submit Answer</button>";
}
console.log(points);

//FUNKTION TAR EMOT SVAR - - - - - - - - - - - - - - - - - - - - - - - - - 

function checkAnswers () {
    //Väljer radioknapparna
    svarsAlt = document.getElementsByName("svarsAlt");
    for (let i=0; i<svarsAlt.length; i++) {
        if (svarsAlt[i].checked) {
            svar = svarsAlt[i].value;
        }
    }
    //kollar om checked answer matchar korrekt val
    if(svar === myQuestions[questionNum].answer) {
        points++;
    }
    questionNum++;
    showQuestions();
}

window.addEventListener("load", showQuestions);