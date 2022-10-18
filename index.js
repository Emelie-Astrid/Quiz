//DIVAR - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//KNAPPAR - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
let darkBtn = document.querySelector("#dark-mode");
let lightBtn = document.querySelector("#light-mode");
let resultsBtn = document.querySelector("#results");
let nextBtn = document.querySelector("#next-question");

//ARRAY MED QUIZ - - - - - - - - - - - - - - - - - - - - - - - - - -
let myQuestions = [
    {
        question: "Min katt heter Salsa",
        a: true,
        b: false,
        answer: "A",
        type: "trueFalse"
    },
    {
        question: "Jag heter Astrid i mellannamn",
        a: true,
        b: false,
        answer: "A",
        type: "trueFalse"
    },
    {
        question: "Jorden är platt",
        a: true,
        b: false,
        answer: "B",
        type: "trueFalse"
    },
    {
        question: "Himlen är blå",
        a: true,
        b: false,
        answer: "A",
        type: "trueFalse"
    },
    {
        question: "Jag är sjuksköterska",
        a: true,
        b: false,
        answer: "B",
        type: "trueFalse"
    },
    {
        question: "Kaffe",
        a: true,
        b: false,
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
        question: "Vilken film är INTE från Studio Ghibli?",
        a: "The Cat Returns",
        b: "Your Name",
        c: "The Wind Rises",
        d: "Sprited Away",
        answer: "B",
        type: "checkBox"
    },
    {
        question: "Vilken film är INTE från Studio Ghibli?",
        a: "The Cat Returns",
        b: "Your Name",
        c: "The Wind Rises",
        d: "Sprited Away",
        answer: "B",
        type: "checkBox"
    },
];


//FUNKTION VISA FRÅGOR - - - - - - - - - - - - - - - - - - - - - - - - 

//FUNKTION TAR EMOT SVAR - - - - - - - - - - - - - - - - - - - - - - - - 

//FUNKTION VISAR RESULTAT - - - -  - - - - - - - - - - - - - - - - - - - - 