let linkBtn = document.getElementsByClassName('categories__link');
let arrows = document.getElementsByClassName('categories__arrow');
let text = document.getElementsByClassName('categories__text');
let checkBtn = document.getElementsByClassName('categories__checkout');
let linksArray = Array.from(linkBtn);
let arrowsArray = Array.from(arrows);
let textArray = Array.from(text);
let checkBtnArray = Array.from(checkBtn);

for (let aydai = 0; aydai < 3; aydai++) {
  linksArray[aydai].addEventListener('click', function (atai) {
    atai.preventDefault();
    textArray[aydai].classList.toggle('is-active');
    textArray[aydai].style.display = 'none';
    function sultan() {
      textArray[aydai].style.display = 'block';
    }
    function eraly() {
      checkBtnArray[aydai].classList.toggle('is-active');
    }
    linksArray[aydai].classList.toggle('is-active');
    linksArray[aydai].classList.toggle('is-backward');
    arrowsArray[aydai].classList.toggle('is-active');
    arrowsArray[aydai].classList.toggle('is-backward');
    setTimeout(sultan, 2000);
    eraly();
  });
}

function sortSection() {
  const sortItems = document.querySelectorAll('.filter__items');
  const sortItemsName = ['All', 'Salad', 'Fast Food', 'Platters', 'Dessert'];
  sortItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      sortItems.forEach((everyElement) => {
        everyElement.classList.remove('filter__items--active');
      });
      item.classList.add('filter__items--active');
      console.log(item);
      if (item.textContent == sortItemsName[index]) {
        sortFilter(index);
      }
    });
  });
}
sortSection();

function sortFilter(index) {
  const filterItems = document.querySelectorAll('.filter__element');
  const filterItemsName = [
    'data-all',
    'data-salad',
    'data-fast-food',
    'data-platters',
    'data-dessert',
  ];
  filterItems.forEach((ayday) => {
    if (!ayday.hasAttribute(filterItemsName[index])) {
      ayday.style.display = 'none';
    } else {
      ayday.style.display = 'block';
    }
  });
  // const saladItems = document.querySelectorAll('[data-filter="salad"]');
  // const array = Array.from(saladItems).map((item) => item.cloneNode(true));
  // console.log(array);
  // for (let sultan = 0; sultan < 2; sultan++) {
  //   let clonnedCol3 = array[sultan];
  //   document.body.append(clonnedCol3);
  //   console.log(clonnedCol3);
  // }
}

function cart() {
  const addButtons = document.querySelectorAll('.sort__add');
  const cartCounter = document.querySelector('.cart__counter');
  let counter = 0;
  addButtons.forEach((button) => {
    button.addEventListener('click', function () {
      counter += 1;
      cartCounter.innerHTML = `${counter}`;
    });
  });
}
cart();

function checkmarkRemover() {
  const toggle = document.querySelectorAll('.sort__add');
  toggle.forEach((item) => {
    item.classList.remove('sort__add--active');
    const circles = document.querySelectorAll('.circle-loader');
    circles.forEach((circ) => {
      circ.classList.remove('load-complete');
    });
    const checkMarks = document.querySelectorAll('.checkmark');
    checkMarks.forEach((check) => {
      check.classList.remove('checkmark--active');
    });
  });
}

function checkmark() {
  const toggle = document.querySelectorAll('.sort__add');
  const circles = document.querySelectorAll('.circle-loader');
  const checkMarks = document.querySelectorAll('.checkmark');
  toggle.forEach((item, index) => {
    item.addEventListener('click', function (samaKnopka) {
      samaKnopka.target.classList.add('sort__add--active');
      circles[index].classList.add('load-complete');
      checkMarks[index].classList.add('checkmark--active');
      setTimeout(checkmarkRemover, 1000);
    });
  });
}
checkmark();
