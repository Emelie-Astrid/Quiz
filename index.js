//DIVAR - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
let test = document.querySelector("#quiz");
let radio = document.querySelector("#radio");
let submit = document.querySelector("#submit");

//TEXT - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
let questionsAndPoints = document.querySelector("#question-number");
let questionText = document.querySelector("#questions");
let resultsText = document.querySelector("#quiz-result");

//KNAPPAR - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
let darkBtn = document.querySelector("#dark-mode");
let lightBtn = document.querySelector("#light-mode");

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
        type: "trueFalse",
    },
    // {
    //     question: "Heter jag Astrid i mellannamn?",
    //     a: "Ja",
    //     b: "Nej",
    //     answer: "A",
    //     type: "trueFalse",
    // },
    // {
    //     question: "Jorden är platt",
    //     a: "Ja",
    //     b: "Nej",
    //     answer: "B",
    //     type: "trueFalse"
    // },
    // {
    //     question: "Himlen är blå",
    //     a: "Ja",
    //     b: "Nej",
    //     answer: "A",
    //     type: "trueFalse"
    // },
    // {
    //     question: "Jag är sjuksköterska",
    //     a: "Ja",
    //     b: "Nej",
    //     answer: "B",
    //     type: "trueFalse"
    // },
    // {
    //     question: "Kaffe",
    //     a: "Ja",
    //     b: "Nej",
    //     answer: "A",
    //     type: "trueFalse"
    // },
    {
        question: "Hur gammal blev Astrid Lindgren?",
        a: 89,
        b: 91,
        c: 94,
        d: 97,
        answer: "C",
        type: "multipleChoice"
    },
    {
        question: "Vilken film är INTE från Studio Ghibli?",
        a: "The Cat Returns",
        b: "Your Name",
        c: "The Wind Rises",
        d: "Sprited Away",
        answer: "B",
        type: "multipleChoice"
    },
    {
        question: "Vilka av dessa karaktärer en katt? OBS, 1-3 rätt svar",
        a: "Pelle Svanslös",
        b: "Cheshire cat",
        c: "Pluto",
        d: "Lufsen",
        answer: "A",
        type: "checkBox"
    },
    {
        question: "Vilken film är INTE från Studio Ghibli?",
        a: "The Cat Returns",
        b: "Your Name",
        c: "The Wind Rises",
        d: "Sprited Away",
        answer: "B",
        //array
        type: "checkBox"
    },
];

//FUNKTION DARK MODE LIGHT MODE - - - - - - - - - - - - - - - - - - -


//FUNKTION VISA FRÅGOR - - - - - - - - - - - - - - - - - - - - - - - - - -
function showQuestions (){    

    console.log("Frågetyp: " + myQuestions[questionNum].type);
    console.log(myQuestions[questionNum].type === "checkBox");
    console.log("Poäng: " + points);

    //Kollar antalet frågor mot array och skriver resultat
    if (questionNum >= myQuestions.length) {

        //Färgar resultatet  - - - - - - - - - - - - - - - - - - - - - - 
        if ((points/questionNum) > 0.75) {
            test.innerHTML = "<h2>Du fick " + points + " av " + myQuestions.length + " rätt!</h2>";
            test.style.color = "green";
        }
        else if ((points/questionNum)<=0.74 && (points/questionNum)>=0.5){
            test.innerHTML = "<h2>Du fick " + points + " av " + myQuestions.length + " rätt!</h2>";
            test.style.color = "orange";
        }
        else {
            test.innerHTML = "<h2>Du fick " + points + " av " + myQuestions.length + " rätt!</h2>";
            test.style.color = "red";
        }

        resultsText.innerHTML = "Quiz klart!"
        questionNum = 0;
        points = 0;

        //Stoppar functionen när quiz är klar
        return false;
    }
    
    //Skriver ut fråga xx av xx i en h2
    questionsAndPoints.innerText = "Fråga " + (questionNum+1) + " av " + myQuestions.length;
    currentQuestion = myQuestions[questionNum].question;

    //MULTIPLE CHOICE frågor - - - - - - - - - - - - - - - - - - - - - - - - - - -
    if (myQuestions[questionNum].type === "multipleChoice") {
    ansA = myQuestions[questionNum].a;
    ansB = myQuestions[questionNum].b;
    ansC = myQuestions[questionNum].c;
    ansD = myQuestions[questionNum].d;
    
    //Skriver ut frågan
    questionText.innerText = currentQuestion;

    //Radio knappar
    radio.innerHTML= "";
    radio.innerHTML += '<label> <input type="radio" name="svarsAlt" value="A"> ' + ansA + 
    '</label><br> <label> <input type="radio" name="svarsAlt" value="B"> ' + ansB + 
    '</label><br> <label> <input type="radio" name="svarsAlt" value="C"> ' + ansC + 
    '</label><br> <label> <input type="radio" name="svarsAlt" value="D"> ' + ansD + 
    '</label><br><br>'
    }
    
    //CHECKBOX frågor - - - - - - - - - - - - - - - - - - - - - - - - - - -
    else if (myQuestions[questionNum].type === "checkBox"){
        ansA = myQuestions[questionNum].a;
        ansB = myQuestions[questionNum].b;
        ansC = myQuestions[questionNum].c;
        ansD = myQuestions[questionNum].d;
    
    //Skriver ut frågan
    questionText.innerText = currentQuestion;

    //Checkbox knappar
    radio.innerHTML= "";
    radio.innerHTML += '<label> <input type="checkbox" name="svarsAltCheck" value="A"> ' + ansA + 
    '</label><br> <label> <input type="checkbox" name="svarsAltCheck" value="B"> ' + ansB + 
    '</label><br> <label> <input type="checkbox" name="svarsAltCheck" value="C"> ' + ansC + 
    '</label><br> <label> <input type="checkbox" name="svarsAltCheck" value="D"> ' + ansD + 
    '</label><br><br>'
    }

    //TRUEFALSE frågor - - - - - - - - - - - - - - - - - - - - - - - - - - -
    else {
    ansA = myQuestions[questionNum].a;
    ansB = myQuestions[questionNum].b;
    
    //Skriver ut frågan
    questionText.innerText = currentQuestion;
    radio.innerHTML= "";
    radio.innerHTML += '<label> <input type="radio" name="svarsAlt" value="A"> ' + ansA + 
    '</label><br> <label> <input type="radio" name="svarsAlt" value="B"> ' + ansB + '</label><br><br>'
    }

    //Resultatknapp
    submit.innerHTML = "";
    submit.innerHTML += "<button id='submit-btn' onclick='checkAnswers()'>Submit Answer</button>";

}

//FUNKTION TAR EMOT SVAR - - - - - - - - - - - - - - - - - - - - - - - - - 

function checkAnswers () {

    // FORTSÄTT JOBBA HÄR ! ! ! ! ! - - - - - - - - - - - - - - - - 

    //Hämta svar från checkboxar
    if (myQuestions[questionNum].type === "checkBox"){
        //ifyllda checkboxar
        let allCheckedBoxes = document.querySelectorAll("input[type='checkbox']:checked");
        let checkBoxPoints = [];

        allCheckedBoxes.forEach((box) => {
            checkBoxPoints.push(box.value);
        });
        console.log(checkBoxPoints);

        let filteredPoints = myQuestions.filter((check) => {
            return(
            (checkBoxPoints.includes(check.a))
            );
        })
        
        filteredPoints.forEach(check => {
            points++;
        });
    }

    //Hämtar svar från radiobuttons
    else {
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
}

window.addEventListener("load", showQuestions);



//OLIKA BRA Console.log
//Min array
// console.log(myQuestions);
//Vilken typ av fråga
// console.log(myQuestions[questionNum].type);
//Om typen av fråga är "xxx"
// console.log(myQuestions[questionNum].type === "multipleChoice");