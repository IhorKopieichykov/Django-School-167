
//Тестування
// Функция валидации на поле "Имя родителя"
var regName = /[А-Яа-яЁёІіЇїЄє]/;

var inpName = document.querySelector('#child_name'),
	nameText = document.querySelector('#name_text');

inpName.onblur = function(){
	if(!isvalid(regName, inpName.value)){
		notValid(inpName, nameText, 'Некоректне значення');
	}
	else{
		valid(inpName, nameText, '');
	}
}

function notValid(inp, span, text){
	inp.classList.remove('is-valid');
	inp.classList.add('is-invalid');
	span.innerHTML = text;
}

function valid(inp, span, text){
	inp.classList.remove('is-invalid');
	inp.classList.add('is-valid');

	span.innerHTML = text;

}

function isvalid(reg, inp){
	return reg.test(inp);
}

function checkName(){
	if(!document.getElementById('child_name').checkValidity()){
		alert("Некоректне ім'я дитини!")
		return false;
	}
	return true;
}

const DATA = [
	{
		question: 'Івасик мав 4 яблука, але вирішив поділитися зі своїми двома товаришами і дав кожному по одному яблуку. Скільки яблук залишилося у Івасика?',
		image: '',
		answers: [
			{
				id: '1',
				value: '1',
				correct: false,
			},
			{
				id: '2',
				value: '2',
				correct: true,
			},
			{
				id: '3',
				value: '3',
				correct: false,
			},
			{
				id: '4',
				value: '4',
				correct: false,
			},
		],
	},
	{
		question: 'Виберіть ряд, в якому цифри розташовані за зростанням зліва направо:',
		image: '',
		answers: [
			{
				id: '5',
				value: '1346578',
				correct: false,
			},
			{
				id: '6',
				value: '2459608',
				correct: false,
			},
			{
				id: '7',
				value: '1356789',
				correct: true,
			},
			{
				id: '8',
				value: '3578943',
				correct: false,
			},
		],
	},
	{
		question: 'Обчисліть вираз: 17-9+6=?',
		image: '',
		answers: [
			{
				id: '9',
				value: '7',
				correct: false,
			},
			{
				id: '10',
				value: '12',
				correct: false,
			},
			{
				id: '11',
				value: '14',
				correct: true,
			},
			{
				id: '12',
				value: '9',
				correct: false,
			},
		],
	},
	{
		question: 'Виберіть 7-му букву українського алфавіту',
		image: '',
		answers: [
			{
				id: '13',
				value: 'У',
				correct: false,
			},
			{
				id: '14',
				value: 'Е',
				correct: true,
			},
			{
				id: '15',
				value: 'Ж',
				correct: false,
			},
			{
				id: '16',
				value: 'К',
				correct: false,
			},
		],
	},
	{
		question: 'Яка квітка зображена на малюнку?',
		image: '<img src="../images/main/index/test/rose.jpg" alt="Троянда">',
		answers: [
			{
				id: '17',
				value: 'Троянда',
				correct: true,
			},
			{
				id: '18',
				value: 'Ромашка',
				correct: false,
			},
			{
				id: '19',
				value: 'Лілія',
				correct: false,
			},
			{
				id: '20',
				value: 'Тюльпан',
				correct: false,
			},
		],
	},
	{
		question: 'Яка квітка зображена на малюнку?',
		image: '<img src="../images/main/index/test/romashka.jpg" alt="Ромашка">',
		answers: [
			{
				id: '21',
				value: 'Троянда',
				correct: false,
			},
			{
				id: '22',
				value: 'Ромашка',
				correct: true,
			},
			{
				id: '23',
				value: 'Лілія',
				correct: false,
			},
			{
				id: '24',
				value: 'Тюльпан',
				correct: false,
			},
		],
	},
	{
		question: 'Що зображено на малюнку?',
		image: '<img src="../images/main/index/test/oval.jpg" alt="Овал">',
		answers: [
			{
				id: '25',
				value: 'Трикутник',
				correct: false,
			},
			{
				id: '26',
				value: 'Коло',
				correct: false,
			},
			{
				id: '27',
				value: 'Овал',
				correct: true,
			},
			{
				id: '28',
				value: 'Зірка',
				correct: false,
			},
		],
	},
	{
		question: 'Що зображено на малюнку?',
		image: '<img src="../images/main/index/test/star.png" alt="Зірка">',
		answers: [
			{
				id: '29',
				value: 'Трикутник',
				correct: false,
			},
			{
				id: '30',
				value: 'Коло',
				correct: false,
			},
			{
				id: '31',
				value: 'Овал',
				correct: false,
			},
			{
				id: '32',
				value: 'Зірка',
				correct: true,
			},
		],
	},
	{
		question: 'Скільки днів у тижні?',
		image: '',
		answers: [
			{
				id: '33',
				value: '5',
				correct: false,
			},
			{
				id: '34',
				value: '6',
				correct: false,
			},
			{
				id: '35',
				value: '7',
				correct: true,
			},
			{
				id: '36',
				value: '8',
				correct: false,
			},
		],
	},
	{
		question: 'Яку назву має другий робочий день тижня?',
		image: '',
		answers: [
			{
				id: '37',
				value: 'Понеділок',
				correct: false,
			},
			{
				id: '38',
				value: 'Вівторок',
				correct: true,
			},
			{
				id: '39',
				value: 'Четвер',
				correct: false,
			},
			{
				id: '40',
				value: 'Неділя',
				correct: false,
			},
		],
	},
];

let res = {};

const contacts = document.querySelector('.cont');
const questions = document.querySelector('.questions');
const question = document.querySelector('.question');
const qText = document.querySelector('.q-text');
const answers = document.querySelector('.answers');
const answer = document.querySelector('.answer');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');
const indicator = document.querySelector('.q-indicator');
const results = document.querySelector('.results');
const back = document.getElementById('back');
const reset = document.getElementById('reset');
const start = document.getElementById('start');
const next = document.getElementById('next');
const submit = document.getElementById('submit');
const right = document.getElementById('right');
const wrong = document.getElementById('wrong');
const result = document.querySelector('.result');
const success = document.getElementById('success')
var confirmation;
var child_name = document.getElementById('child_name');
const prev_results = document.querySelector('.prev_results');
const prev_results_table = document.querySelector('.prev_results_table');


// функция отображения вопроса
const renderQuestions = (index) => {

	// запись индекса текущего вопроса для отслеживания
	questions.dataset.currentStep = index;

	const renderAnswers = () =>
		DATA[index].answers
		.map((answer) =>
			`<li>
				<label>
					<input class="answer" type="radio" name=${index} value=${answer.id}>
					${answer.value}
				</label>
			</li>`
		)
		.join('');

	renderIndicator(index + 1);

	questions.innerHTML = `
	<div class="question">
		<div class="q-text">${DATA[index].question}</div>
		<div class="q-image">${DATA[index].image}</div>
		<ul class="answers">${renderAnswers()}</ul>
	</div>
	`;
};

// функция отображения индикатора вопроса
const renderIndicator = (currentStep) => {
	indicator.innerHTML = `Запитання ${currentStep}/${DATA.length}`;
};

// функция проверки правильности ответа
function isCorrect(index){
	for (var i = 0; i < DATA[index].answers.length; i++) {
		let answer = DATA[index].answers[i];
		if (res[index] == answer.id) {
			if (answer.correct) {
				return true;
			}
			return false;
		}
	}
};


//функция подсчета правильных ответов
const calcRightAnswers = () => {
	let count = 0;
	for (var i = 0; i < DATA.length; i++) {
		if (isCorrect(i)) {
			count++;
		}
	}
	return count;
};

// функция записи результатов теста
function writeResults(r, w, t){
	ch_name = child_name.value;
	var results_obj = {
		name: ch_name,
		right: r,
		wrong: w,
		text: t
	}
	console.log(results_obj);
	return results_obj;
}

// Функция отображения результатов
function showResults(){
	let r = 0;
	let	w = 0;
	let text;
	r = calcRightAnswers();
	w = DATA.length - r;
	right.innerHTML = r;
	wrong.innerHTML = w;
	console.log(r);
	console.log(w);

	document.getElementById('right_answers').value = r;
	document.getElementById('wrong_answers').value = w;


	if (r > 5) {
			text = "Тест пройдено!";
			result.innerHTML = text;
			result.classList.remove('no');
			result.classList.add('yes');
			success.value = true;
	} else {
			text = "Тест не пройдено!";
			result.innerHTML = text;
			result.classList.remove('yes');
			result.classList.add('no');
			success.value = false;
	}

	if (confirmation) {
		localStorage.removeItem(child_name.value);
		localStorage.setItem(child_name.value, JSON.stringify(writeResults(r, w, text)));
		console.log("добавили");
		console.log(JSON.parse(localStorage.getItem(child_name.value)));
		renderResults();
	}

};

function renderResults(){
	prev_results_table.innerHTML = `
	<thead>
		<td>Ім'я дитини</td>
		<td>Правильних відповідей</td>
		<td>Неправильних відповідей</td>
		<td>Результат</td>
	</thead>
	`;
	let k, ch, r, w, t;
	let tr;
	if (confirmation) {

		for(let i=0; i < localStorage.length; i++) {
			k = localStorage.key(i);
			try {
				ch = JSON.parse(localStorage.getItem(k)).name;
				r = JSON.parse(localStorage.getItem(k)).right;
				w = JSON.parse(localStorage.getItem(k)).wrong;
				t = JSON.parse(localStorage.getItem(k)).text;
			}
			catch(e) {};
			let results_obj = {
				name: ch,
				right: r,
				wrong: w,
				text: t
			}
			console.log("Отрендерили");
			console.log(results_obj);

			tr = document.createElement('tr');
			// tr.className = "prev_results_table_tr";
			tr.innerHTML = `
									<td>${ch}</td>
                  <td>${r}</td>
                  <td>${w}</td>
                  <td>${t}</td>`;
			prev_results_table.appendChild(tr);
		}
	}
}



// обработчик события выбора варианта ответа
questions.addEventListener('change', (event) => {
	if (event.target.classList.contains('answer')) {
		res[event.target.name] = event.target.value;
		console.log(res);
		// console.log(isCorrect(event.target.name));
		next.removeAttribute("disabled", "disabled");
		next.classList.remove('disabled');
		submit.removeAttribute("disabled", "disabled");
		submit.classList.remove('disabled');
	}
});

//обработчик события клика на кнопку Почати тестування
start.addEventListener('click', (event) => {
	if (isvalid(regName, inpName.value))	{
		localStorage.removeItem(child_name);
		renderQuestions(0);
		invis(contacts);
		vis(questions);
		invis(start);
		invis(reset);
		invis(back);
		vis(next);
		vis(indicator);
		invis(prev_results);
		console.log("Старт");
	}
});

// обработчик события клика на кнопку Далее
next.addEventListener('click', (event) => {
	console.log("Далі");
	let nextQuestionIndex = Number(questions.dataset.currentStep) + 1;
	console.log(nextQuestionIndex);
	if (nextQuestionIndex == 1) {
		 	vis(back);
	}
	if (nextQuestionIndex === (DATA.length - 1)) {
		 // переход к результатам
		 invis(next);
		 vis(submit);
		 submit.setAttribute("disabled", "disabled");
		 submit.classList.add('disabled');
	}
	// переход к след вопросу
	renderQuestions(nextQuestionIndex);



	// renderQuestions(nextQuestionIndex);
	next.setAttribute("disabled", "disabled");
	next.classList.add('disabled');
});


// обработчик события клика на кнопку Назад
back.addEventListener('click', (event) => {
	let prevQuestionIndex = Number(questions.dataset.currentStep) - 1;
		if (prevQuestionIndex == (-1) ) {
			vis(contacts);
			invis(questions);
			vis(reset);
			vis(start);
			invis(next);
			invis(back);
			invis(submit);
			invis(indicator);
		} else if (prevQuestionIndex == 0) {
			vis(questions);
			invis(reset);
			vis(next);
			invis(back);
			invis(submit);
			invis(contacts);
			renderQuestions(prevQuestionIndex);
		}
		else if (prevQuestionIndex > 0 && prevQuestionIndex < DATA.length-1){
			vis(questions);
			invis(reset);
			vis(next);
			vis(back);
			invis(submit);
			invis(contacts);
			renderQuestions(prevQuestionIndex);
		} else if (prevQuestionIndex == DATA.length-1) {
			invis(reset);
			vis(next);
			vis(back);
			invis(submit);
			invis(contacts);
			vis(questions);
			renderQuestions(prevQuestionIndex);
		}

	console.log("Назад");
});

// обработчик события клика на кнопку Показать результаты
submit.addEventListener('click', (event) => {
	console.log("Завершити");
	invis(reset);
	invis(next);
	invis(back);
	invis(submit);
	invis(contacts);
	invis(questions);
	invis(indicator);
	vis(results);
	vis(prev_results);

	showResults();

});


// функция скрытия элемента страницы
function invis(obj){
	obj.classList.remove('visible');
	obj.classList.add('invisible');
}

// функция показа элемента страницы
function vis(obj){
	obj.classList.remove('invisible');
	obj.classList.add('visible');
}


// ВЕБ-ХРАНИЛИЩЕ

// проверка доступности веб-хранилища
// function storageAvailable(type) {
// 	try {
// 		var storage = window[type],
// 		x = 'storage_test';
// 		storage.setItem(x, x);
// 		storage.removeItem(x);
// 		console.log('true');
// 		return true;
// 	}
// 	catch(e) {
// 		return false;
// 		console.log('false');
// 	}
// }

// if (storageAvailable('localStorage')) {
// 	// Код обращения к хранилищу
// 	let perm = "Ця сторінка може використовувати Web Storage для збереження результатів тестування. Чи дозволяєте Ви використання Web Storage?";
// 	confirmation = window.confirm(perm);
// 	if (confirmation) {
// 		// localStorage.clear();
// 		if (localStorage.length != 0) {
// 			vis(prev_results);
// 			renderResults();
// 		}
// 	}
// 	}
// else {
// 		// Код сообщения о том, что локальное хранилище недоступно
// 		window.alert("Web Storage is unavaliable in your browser!");
// }


// document.addEventListener('keypress', function(event) {
// 	if (event.code == 'Enter') {
// 		start.click();
// 	}
// });
