import { arrayHtml } from './assets/libs/arrays';

const htmlModal = document.querySelector('.js-htmlModal')
const htmlSubmit = document.querySelector('.js-htmlSubmit')

const closeButton = document.querySelector('.js-close')

const htmlCheck = document.querySelectorAll('.js-htmlCheck')

const correctScore = document.querySelector('.js-correctScore')


let correctAnswer = 0;

htmlSubmit.addEventListener('click', (e) => {

    e.preventDefault();
    htmlModal.classList.remove("hidden");
    
    htmlCheck.forEach((value) => {
        const radioButtons = value.querySelectorAll('.js-value')
        
        radioButtons.forEach((radioButton: HTMLInputElement) => {
            if (radioButton.checked) {
                
                const checkedQuestionMatch = arrayHtml.includes(radioButton.nextElementSibling.innerHTML)

                if (checkedQuestionMatch) {
                    correctAnswer += 1
                }
            }
        })
    })

    correctScore.textContent = correctAnswer.toString()
});

closeButton.addEventListener('click', () => {
    htmlModal.classList.add("hidden");
});





