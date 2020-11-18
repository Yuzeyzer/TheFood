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
