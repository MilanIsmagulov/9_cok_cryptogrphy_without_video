let checkBtn2 = document.querySelector('#check_button_2')
checkBtn2.classList.add('disabled_button')

let checkBtn3 = document.querySelector('#check_button_3')
checkBtn3.classList.add('disabled_button')

let numberOfQuestion = 19; 
let numberOfQuestionSum = 20;

let questionPlace = 'Распределите в правильной последовательности этапы замены сальниковой набивки';
let questionHead = document.querySelector('#number_of_question_1');

questionHead.innerHTML = numberOfQuestion + '. '

let stepMarkerPlace = document.querySelector('.step_marker');
console.log("stepMarkerPlace")
for (let i = 0; i < numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button_blue.svg";
    stepMarkerPlace.appendChild(markers);
}

for (let i = 0; i < numberOfQuestionSum-numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button.svg";
    stepMarkerPlace.appendChild(markers);
}

let stepPlaceDescription = document.querySelector('#number_of_question_description_1');
stepPlaceDescription.innerHTML = '<strong>' + numberOfQuestion + '/' + numberOfQuestionSum + '</strong>';

console.log('Script is Loaded')
let checkBtn = document.querySelector('#check_button_1');
let rightAnswers = ['ОЁЬУЬБЯОЪРХО'];
let rightAnswers2 = ['оёьуьбяоърхо'];
checkBtn.addEventListener('click', function(){
    let inputs = document.querySelectorAll('#quiz_part input');
    let i = 0;
    for (let input of inputs){
        if (input.value == rightAnswers[i] || input.value == rightAnswers2[i]){
            input.classList.add('correct');
            checkBtn.classList.add('disabled_button')
            checkBtn2.classList.remove('disabled_button')
            checkBtn3.classList.remove('disabled_button')
            localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: true}));

        } else {
            input.classList.add('incorrect');
            checkBtn.classList.add('disabled_button')
            checkBtn2.classList.remove('disabled_button')
            checkBtn3.classList.remove('disabled_button')
            localStorage.setItem('answer_'+numberOfQuestion, JSON.stringify({questionPlace: false}));
        };
        i++;
    }
});

function openPopUp(){
    let popUpWindow = document.querySelector('#popup1')
    popUpWindow.classList.remove('close')
}

function closePopUp(){
    let popUpWindow = document.querySelector('#popup1')
    popUpWindow.classList.add('close')
}