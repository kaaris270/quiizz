/*ici on trouvera la class avec le constructor qui serveront à créer les question, les reponses et les bonnes reponses. Corectanswer permet de mettre la bonne reponse en dehors des []. On verra ça en detail plus bas dans une variable*/
class Question {
    //le text c'est les question, les choices sont les reponses à choisir et les answer sont qui corespond aux bonne reponses
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    //là on a un fonction bouléin qui permet de savoir si la reponse est bonne 
    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}
/* avec la variable/tableau 'question' on va reutiliser ce qu'on a fait dans le constructor et la class en creant des question et des reponses*/
let questions = [
    //on retrouve le text, les choices, et answer
    new Question("Pour combien d'euros tu fais le plein ?!", ["Gratuit ça", "Une bonne centaine je dirais", "Qui a la reponse meme ?", "Je suis pas une balance."], "Gratuit ça"),
    new Question("Es-ce que tu PEP'S pour sauver la daronne ?", ["azy la daronne à fait son temp","azy une fois aux chalet", "on lfaisait deja avant donc tranquil", "je suis toujours pas une poukav"], "on lfaisait deja avant donc tranquil"),
    new Question("Combien de round pour te metre k.o ?", ["1 seul uesh", "beaucoup je crois", "aux nom je vais rien dire", "s/o le fc zoulette on fuit"], "aux nom je vais rien dire"),
    new Question("Es-ce que t'a deja été ? (filosof ici)", ["termine ta phrase sinon bagarre","Et toi, sue dit-tu de la causalité?", "oui, je crois.", "ouga bouga"], "ouga bouga")
];
/* cette class nous permet de créer un systeme de score. Il y a un constructor dans laquelle on retrouve le score*/
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.currentQuestionIndex = 0;
        //0 est la position du tableaux de questionnaire 
    }
    //là on peut afficher les question
    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    //on control la verasité de la question
    guess(answer) {
        if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
            this.score++;
        }
        //on alimente le score quand une bonne reponse est selectionné
        this.currentQuestionIndex++;
        //on passe à la question suivante
    }
    //quand il n'y a plus de questions on prepare ça
    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length;
    }
}
//dans cette constant on va mettre toutes les fonctions qui vont nous permetre d'afficher les choses
const display = {
    //cette fonction rajoute du contenu text html là où il y a des id pour les reponses à choisir
    elementShown: function(id, text) {
        let element = document.getElementById(id);
        element.innerHTML = text;
    },
    //à la fin du quiz on affiche le score en rajoutant un nouveau contenu html
    endQuiz: function() {
        endQuizHTML = `
            <h1 class="justify-content-center text-center font pt-2 pb-4>Quiz terminé !</h1>
            <h3 class="justify-content-center text-center font pt-2 pb-4> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
            this.elementShown("quiz", endQuizHTML);
    },
    //c'est une fonction qui servira à afficher les question, toujours grace à (id, text)
    question: function() {
        this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    //cette fonction permet d'afficher les reponses possibles
    choices: function() {
        let choices = quiz.getCurrentQuestion().choices;
        guessHandler = (id, guess) => {
            document.getElementById(id).onclick = function() {
                quiz.guess(guess);
                quizApp();
        }
    }
      //cette boucle va permetre de reperer les bon id qui ont été dans les boutons servant dans la selection des reponses
      //on appel le gessHandler pour passer aux question suivantes 
      //à partir de là on on peut aussi compter le nombre de bonnes reponses selectionées 
    for(let i = 0; i < choices.length; i++) {
        this.elementShown("choice" + i, choices[i]);
        guessHandler("guess" + i, choices[i]);
        }
    },
};
  //on va afficher le quiz en faisant appel aux fonctions de fin quiz dans le if et en affichant la serie de question dans le else.
    // à savoir qu'on fait appel à des elements de la const precedent
    // la logique de "quizApp" etant que : si on est à la fin du quiz on affiche le score, sinon on fait appel aux fontion du questionnair
quizApp = () => {
    if (quiz.hasEnded()) {
        display.endQuiz();
    } else {
        display.question();
        display.choices();
        display.progress();
    } 
}
  //dé qu'on fait live server ou qu'on lence le site, on comence direct le quiz
let quiz = new Quiz(questions);
quizApp();


/* j'avais commencé une approche pour la cretaion de ce quiz, mais elle n'a pas aboutit, voisi le code en js:
let maQuestions = [
{
question: "Pour combien d'euros j'te touche EN BAS-LA ?!",
answers: {
    a: 'Gratuit ça',
    b: 'Une bonne centaine je dirais ',
    c: 'Qui a la reponse meme ?',
    d: 'Je suis pas une balance.'
},
correctAnswer: 'b'
},
{
question: "Es-ce que tu PEP'S pour sauver la daronne ?",
answers: {
    a: 'azy la daronne à fait son temp',
    b: 'azy une fois aux chalet',
    c: 'on lfaisait deja avant donc tranquil',
    d: 'je suis toujours pas une poukav'
},
correctAnswer: 'c'
},
{
    question: "inserer une quest",
    answers: {
        a: 'repe',
        b: 'reponse',
        c: 'repe',
        d: 'repe'
    },
    correctAnswer: 'a'
    }
];
console.log(maQuestions[0].question);
let q1 = document.getElementById("q1");
let r1 = document.getElementById("r1");
let r2 = document.getElementById("r2");
let r3 = document.getElementById("r3");
let r4 = document.getElementById("r4");
q1.textContent = maQuestions[0].question;
r1.textContent = maQuestions[0].answers.a;
r2.textContent = maQuestions[0].answers.b;
r3.textContent = maQuestions[0].answers.c;
r4.textContent = maQuestions[0].answers.d;
r1.addEventListener("click", nomfonction);
r2.addEventListener("click", nomfonction);
r3.addEventListener("click", nomfonction);
r4.addEventListener("click", nomfonction);
function nomfonction() {
    
}

l'initialisation et la fonction etaient liés au bouttons de verification. C'etait sensé permetre de verifié si la reponse etait bonne ou non.
document.getElementById('button').addEventListener("click", myFunction);
function myFunction()
    {
        console.log('samarche');
        alert("button was clicked");
    }
for (let i = 0; i < array.length; i++) {
    function questsuiv() {
        q1.textContent = maQuestions[i].question;
        r1.textContent = maQuestions[i].answers.a;
        r2.textContent = maQuestions[i].answers.b;
        r3.textContent = maQuestions[i].answers.c;
        r4.textContent = maQuestions[i].answers.d;
}
let suivant = document.getElementById('suiv').addEventListener("click", questsuiv);
function questsuiv() {
    q1.textContent = maQuestions[1].question;
    r1.textContent = maQuestions[1].answers.a;
    r2.textContent = maQuestions[1].answers.b;
    r3.textContent = maQuestions[1].answers.c;
    r4.textContent = maQuestions[1].answers.d;
}

*/