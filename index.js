//DIVAR - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
let test = document.querySelector("#quiz");
let radio = document.querySelector("#radio");
let submit = document.querySelector("#submit");

//TEXT - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
let questionsAndPoints = document.querySelector("#question-number");
let questionText = document.querySelector("#questions");
let resultsText = document.querySelector("#quiz-result");
let wrongHead = document.querySelector("#wrong-head");
let wrongUl = document.querySelector("#wrong-answers");

//KNAPPAR - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
let darkBtn = document.querySelector("#dark-mode");
let lightBtn = document.querySelector("#light-mode");

//FRÅGOR OCH POÄNG - - - - - - - - - - - - - - - - - - - - - - - - -
let questionNum = 0;
let points = 0;

//ARRAY MED QUIZ - - - - - - - - - - - - - - - - - - - - - - - - - -
let myQuestions = [
    // {
    //     question: "Heter min katt Salsa?",
    //     a: "Ja",
    //     b: "Nej",
    //     answer: "A",
    //     type: "trueFalse",
    // },
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
    {
        question: "Himlen är blå",
        a: "Ja",
        b: "Nej",
        answer: "A",
        type: "trueFalse"
    },
    {
        question: "Jag är sjuksköterska",
        a: "Ja",
        b: "Nej",
        answer: "B",
        type: "trueFalse"
    },
    {
        question: "Kaffe",
        a: "Ja",
        b: "Nej",
        answer: "A",
        type: "trueFalse"
    },
    {
        question: "Hur gammal blev Astrid Lindgren?",
        a: 89,
        b: 91,
        c: 94,
        d: 97,
        answer: "C",
        type: "multipleChoice"
    },
    // {
    //     question: "Vilka av dessa karaktärer en katt? OBS, 1-3 rätt svar",
    //     a: "Pelle",
    //     b: "Cheshire",
    //     c: "Pluto",
    //     d: "Lufsen",
    //     correctAnswers:["Pelle","Cheshire"], 
    //     type: "checkBox"
    // },
    // {
    //     question: "Vilken film är INTE från Studio Ghibli? OBS, 1-3 rätt svar",
    //     a: "Askungen",
    //     b: "YourName",
    //     c: "The Wind Rises",
    //     d: "Sprited Away",
    //     correctAnswers:["Askungen","YourName"], 
    //     type: "checkBox"
    // },
];

// ARRAY MED FELAKTIGA SVAR - - - - - - - - - - - - - - - - - -
let wrongArray = [];

//FUNKTION DARK MODE LIGHT MODE - - - - - - - - - - - - - - - - - - -


//FUNKTION VISA FRÅGOR - - - - - - - - - - - - - - - - - - - - - - - - - -
function showQuestions (){    

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

        resultsText.innerHTML = "Quiz klart!";
        wrongHead.innerHTML = "Tyvärr svarade du fel på dessa frågor:"

        // FORSÄTT JOBBA HÄR - - - - - - - - - - - - - - - - - - - - - - - -
        // Varför blir alla svar gröna? Kolla igenom villkoren
        

        //Felaktiga frågor till en Ul
        wrongArray.forEach((obj) => {
            let wrongQuestion = document.createElement("li");
            
            if(obj.question.point === true){
                wrongQuestion.style.color = "green";
            }
            else {
                wrongQuestion.style.color = "red";
            }
            wrongQuestion.innerHTML = obj.question;
            wrongUl.append(wrongQuestion);
        })

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
    radio.innerHTML += `<label> <input type="checkbox" name="svarsAltCheck" value=${myQuestions[questionNum].a}> ${ansA} 
    </label><br> <label> <input type="checkbox" name="svarsAltCheck" value=${myQuestions[questionNum].b}> ${ansB} 
    </label><br> <label> <input type="checkbox" name="svarsAltCheck" value=${myQuestions[questionNum].c}> ${ansC}
    </label><br> <label> <input type="checkbox" name="svarsAltCheck" value=${myQuestions[questionNum].d}> ${ansD}
    </label><br><br>`
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

    //Hämta svar från checkboxar
    if (myQuestions[questionNum].type === "checkBox"){

        let allCheckedBoxes = document.querySelectorAll("input[type='checkbox']:checked");
        let checkBoxPoints = [];

        //Tar emot alla boxar som är checkade
        allCheckedBoxes.forEach((obj) => {
            checkBoxPoints.push(obj.value);
        });

        let filteredPoints = checkBoxPoints.filter((check) => {
            return (myQuestions[questionNum].correctAnswers.includes(check)) 
        });


        if ((filteredPoints.length === myQuestions[questionNum].correctAnswers.length) && (checkBoxPoints.length ===myQuestions[questionNum].correctAnswers.length)) {
            points++
        }
        else {
            wrongArray.push(myQuestions[questionNum].question);
        }
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
        wrongArray.push({question:myQuestions[questionNum].question, point: true})
    }
    else {
        // wrongArray.push(myQuestions[questionNum].question);

        wrongArray.push({
            question: myQuestions[questionNum].question, 
            point: false})

    }
    }

    questionNum++;
    showQuestions();
}

console.log(wrongArray);


window.addEventListener("load", showQuestions);









//OLIKA BRA Console.log
//Min array
// console.log(myQuestions);
//Vilken typ av fråga
// console.log(myQuestions[questionNum].type);
//Om typen av fråga är "xxx"
// console.log(myQuestions[questionNum].type === "multipleChoice");


//Kollar om event ändrats på check-box
// allCheckedBoxes.forEach((box) => {
//     box.checked = false;
//     box.addEventListener("change", () => filteredPoints());
// });

// //Kollar igen om checkboxar är icheckade och skriver in värdet i arr
// function grabCheckBoxValues() {
//     allCheckedBoxes.forEach((checkBox) => {
//         if(checkBox.checked)
//         checkBoxPoints.push(checkBox.value);
//     });
//     return checkBoxPoints;
// }