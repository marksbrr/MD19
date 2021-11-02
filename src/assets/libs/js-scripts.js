const javascriptModal = document.querySelector('.js-javascriptModal')
const javascriptSubmit = document.querySelector('.js-javascriptSubmit')
const closeButton = document.querySelector('.js-close-javascript')

const javascriptCheck = document.querySelectorAll('.js-javascriptCheck')

const correctScore = document.querySelector('.js-correctScore-javascript')

let correctAnswer = 0;


javascriptSubmit.addEventListener('click', (e) => {

    e.preventDefault();
    javascriptModal.classList.remove("hidden");

    javascriptCheck.forEach((value) => {
        const radioButtons = value.querySelectorAll('.js-javascript-value')

        radioButtons.forEach((radioButton) => {
            if (radioButton.checked) {

                const checkedQuestionMatchJavascript = arrayJavascript.includes(radioButton.nextElementSibling.innerHTML)

                if (checkedQuestionMatchJavascript) {

                    correctAnswer += 1
                }
            }
        })
    })

    correctScore.textContent = correctAnswer.toString()
});

closeButton.addEventListener('click', () => {
    javascriptModal.classList.add("hidden");
});


const arrayJavascript = ["charAt()", "toString()", "Parse.Int", "Is Not a Number", "Script", "push()", "Tikai Body", "i !== 10", "map()", "includes()"]