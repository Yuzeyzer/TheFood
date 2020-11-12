// let ayday = 'Строка'; // string
// let atai = 123; // number
// let nursultan = ['яблоко', 'банан', 'клубника']; // Array
// let danislan = {}; // object
// let munarbek = null; // null
// let eraly = undefined; // undefined
// let begimay = true; // boolean
// let zhamal = function(){}; // function

// let munarbek;
// let atai = {
// 	name: 'Atai',
// 	surname: 'Botaliev',
// 	age: 19,
// 	nation: "Kyrgyz"
// }

// let atai = prompt();

// if (atai.age > 18) {
// 	alert('Да, Атаю больше 18')
// }
// else {
// 	alert('Прости Атай, но тебе еще рано сюда')
// }

let linkBtn = document.getElementsByClassName('categories__link');
let arrows = document.getElementsByClassName('categories__arrow');
let linksArray = Array.from(linkBtn);
let arrowsArray = Array.from(arrows);

for (let aydai = 0; aydai < 3; aydai++) {
  console.log('Итерация номер', aydai);
  linksArray[aydai].addEventListener('click', function (atai) {
		atai.preventDefault();
		console.log(atai)
		linksArray[aydai].classList.toggle('is-active');
		linksArray[aydai].classList.toggle('is-backward');
    arrowsArray[aydai].classList.toggle('is-active');
    arrowsArray[aydai].classList.toggle('is-backward');
  });
}
