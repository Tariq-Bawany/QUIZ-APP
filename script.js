var quizes = [
    {   question: "1.) HTML: What does HTML stand for?",
        option : ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Machine Language","Hyperlinking Text Marking Language"],
        correct: "Hyper Text Markup Language"
    },
    {   question: "2.) HTML: Which tag is used to create a hyperlink?",
        option : ["link ", "a", "href","hyper"],
        correct: "a"
    },
    {   question: "3.) CSS: Which property is used to change the background color of an element?",
        option : ["color", "background-color", "bg-color","background"],
        correct: "background-color"
    },
    {   question: "4.) CSS: What is the default value of the position property in CSS?",
        option : ["static", "relative", "absolute","fixed"],
        correct: "static"
    },
    {   question: "5.) JavaScript: How do you declare a JavaScript variable?",
        option : ["var", "let", "const","All of the Above"],
        correct: "All of the Above"
    },
    {   question: "6.) JavaScript: Which of the following is a correct way to write an arrow function?",
        option : ["function =>{}", "() => {}", "{} -> ()","() -> {}"],
        correct: "() => {}"
    },
    {   question: "7.) HTML: Which attribute is used to provide an alternative text for an image?",
        option : ["title", "alt", "src","description"],
        correct: "alt"
    },
    {   question: "8.) CSS: Which CSS property is used to make text bold?",
        option : ["font-weight", "text-style", "text-decoration","font-style"],
        correct: "font-weight"
    },
    {   question: "9.) JavaScript: How do you check the type of a variable in JavaScript?",
        option : ["typeof", "type", "varType","checkType"],
        correct: "typeof"
    },
    {   question: "10.) HTML: What is the purpose of the head tag in an HTML document?",
        option : ["It contains the main content of the page.", " It contains metadata and links to resources like stylesheets and scripts.", "It is used for navigation links.","It is used to declare headers."],
        correct: " It contains metadata and links to resources like stylesheets and scripts."
    }


]
var question = document.getElementById("question")
var modal =document.getElementById("modal")
var sumbitButton =document.getElementById("sumbit-answer")
var modalContent =document.getElementById("modal-content")
function render(){
    quizes.forEach(function(val,i){
    
        question.innerHTML += `<h2> ${quizes[i].question} </h2>
                <form>
                <div>
                    <input type="radio" name="answer-${i}" 
                    id="answer-${i}-opt-0" value="${quizes[i].option[0]}">
                    <label for="answer-${i}-opt-0"> ${quizes[i].option[0]} </label>
                </div>
                <div>
                    <input type="radio" name="answer-${i}" 
                    id="answer-${i}-opt-1" value="${quizes[i].option[1]}">
                    <label for="answer-${i}-opt-1"> ${quizes[i].option[1]} </label>
                </div>
                <div>        
                    <input type="radio" name="answer-${i}" 
                    id="answer-${i}-opt-2" value="${quizes[i].option[2]}">
                    <label for="answer-${i}-opt-2">${quizes[i].option[2]}</label>
                </div>    
                <div>    
                    <input type="radio" name="answer-${i}" 
                    id="answer-${i}-opt-3" value="${quizes[i].option[3]}">
                    <label for="answer-${i}-opt-3">${quizes[i].option[3]}</label>
                </div>    
                </form>`
    })

}
render()
function sumbitAnswer(){
    var marks = 0;
    
    quizes.forEach( function(val,i){
       var input =document.getElementsByName("answer-"+i)
    //    console.log(input);
       
        for (var j =0;j<input.length;j++){
            if(input[j].checked){
                if(quizes[i].correct == input[j].value){
                    // marks += 1; 
                    marks++;
                    
                    // console.log(input[j].value)
                }
            }
            
        }
    }
    
    )
    console.log(marks);
    question.innerHTML =""
    sumbitButton.style.display = "none"
    modal.style.display ="initial"
    displayModal(marks)

 marks>=5?'green':'red'
}
function displayModal (marks){
    modalContent.innerHTML = `
    <h2>You Score <u class="${marks>=5?'green':'red'}">${marks}</u> out of ${quizes.length} marks</h2>
    <button onclick="refreshBtn()">Try Again</button>
    `
}
function refreshBtn(){
    render()
    sumbitButton.style.display = "initial"
    modal.style.display ="none"


}