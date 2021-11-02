
const cssModal = document.querySelector('.js-cssModal')
const cssSubmit = document.querySelector('.js-cssSubmit')
const closeButton = document.querySelector('.js-close-css')

const cssCheck = document.querySelectorAll('.js-cssCheck')

const correctScore = document.querySelector('.js-correctScore-css')

let correctAnswer = 0;

cssSubmit.addEventListener('click', (e) => {

    e.preventDefault();
    cssModal.classList.remove("hidden");

    cssCheck.forEach((value) => {
        const radioButtons = value.querySelectorAll('.js-css-value')
        
        radioButtons.forEach((radioButton) => {
            if (radioButton.checked) {
                
                const checkedQuestionMatchCss = arrayCss.includes(radioButton.nextElementSibling.innerHTML)

                if (checkedQuestionMatchCss) {
                   
                    correctAnswer += 1
                }
            }
        })
    })

    correctScore.textContent = correctAnswer.toString()
    
});


closeButton.addEventListener('click', () => {
    cssModal.classList.add("hidden");
});

const arrayCss = ["ID", "Width", "Padding", "a:focus", "color", "Cascading Style Sheets", "list-style-type", "line-height", "Display: flex", "absolute"]