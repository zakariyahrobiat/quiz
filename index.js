quizData = [

    {
        question: "What perfect was Robiah in secondary school",
        a: "health perfect",
        b: "social perfect",
        c: "puntuality perfect",
        d: "library perfect",
        correct: "c"
    },
    {
        question: "The seconadary school Robiah attended",
        a: "Ijebu Muslim College",
        b: "Adeola Odutola College",
        c: "Muslim girls High school",
        d: "unilorin high school",
        correct: "a"
    },
    {
        question: "Robiah's day of birth",
        a : "Wednesday" ,
        b: " Friday",
        c : "Monday",
        d : "tuesday",
        correct : "b"

    },
    {
        question: "How old is Robiah",
        a: "20",
        b: "21",
        c: "22",
        d: "23",
        correct:"b"
    },
    {
        question: "Robiah birth month",
        a: "september",
        b: "November",
        c: "December",
        d: "August",
        correct: "b"

    }


]
question = document.getElementById("question")
a = document.getElementById("a-option")
b = document.getElementById("b-option")
c = document.getElementById("c-option")
d = document.getElementById("d-option")
submit = document.querySelector("button")
quizContainer = document.querySelector(".quiz-container")
answersEls = document.querySelectorAll(".answer");


currentQuiz = 0
score = 0
getquiz()
function getquiz(){
    preventSelect()
   currentQuizData = quizData[currentQuiz]
   question.innerHTML = currentQuizData.question;
   a.innerHTML = currentQuizData.a
   b.innerHTML = currentQuizData.b
   c.innerHTML = currentQuizData.c
   d.innerHTML = currentQuizData.d

}
function onSelect(){

 let answer = undefined;
answersEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }

        
    })
    return answer
    
}
function preventSelect(){
    answersEls.forEach(answerEl=>{
         answerEl.checked = false
    })

}

submit.addEventListener("click", (e)=>{
   
     e.preventDefault()
   const answer = onSelect()
    
     console.log(answer)
    if(answer){
    if (answer === quizData[currentQuiz].correct){
        score++
    }
        currentQuiz++

    if( currentQuiz < quizData.length){
        getquiz()
    }
        else{
            quizContainer.innerHTML = `<div class = response-container><h2>Thank you!!! <br> You scored: ${score} of ${quizData.length}</h2>
            <div class ="response"></div>
            </div>`
            quiz= document.querySelector(".response")
        if (score === quizData.length){
            // quiz= document.querySelector(".response")
             quiz.innerHTML = `<h2>you know Robiah well</h2>`
            
         }
         else{
            // quiz= document.querySelector(".response")
            quiz.innerHTML = `<h2>Get to know Robiah more</h2>` 
         }
        
         
    }
}


 })

