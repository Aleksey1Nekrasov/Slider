// Создаем массив объектов для слайдера
const entities = [
    {
        city: 'Rostov-on-Don\nLCD admiral',
        apartmentArea: '81 m2',
        repairTime: '3.5 months',
        repairCost: 'Upon request',
        img: 'img/image1.png',
    },
    {
        city: 'Sochi Thieves',
        apartmentArea: '105 m2',
        repairTime: '4 months',
        repairCost: 'Upon request',
        img: 'img/image2.png',

    },
    {
        city: 'Rostov-on-Don Patriotic',
        apartmentArea: '93 m2',
        repairTime: '3 months',
        repairCost: 'Upon request',
        img: 'img/image3.png',

    }
]

// Находим элементы текста и картинки
const city = document.querySelector('.city');
const apartmentArea = document.querySelector('.apartmentArea');
const repairTime = document.querySelector('.repairTime');
const repairCost = document.querySelector('.repairCost');
const img = document.querySelector('.image');

// Создаем функцию, которая в зависимости от значения index меняет информацию слайдера и активную навигацию заголовка 
const setEntity = (index) => {
    city.innerText = entities[index].city
    apartmentArea.innerText = entities[index].apartmentArea;
    repairTime.innerText = entities[index].repairTime;
    repairCost.innerText = entities[index].repairCost;
    img.style.backgroundImage = `url(${entities[index].img})`;
    if (index == 0){
        rostovAdm.classList.replace("notactive","active");
        rostovPat.classList.replace("active","notactive");
        sochi.classList.replace("active","notactive");
    }
    else if (index == 1) {
        rostovAdm.classList.replace("active","notactive");
        rostovPat.classList.replace("active","notactive");
        sochi.classList.replace("notactive","active");
    }
    else {
        rostovAdm.classList.replace("active","notactive");
        rostovPat.classList.replace("notactive","active");
        sochi.classList.replace("active","notactive");
    }
}

// Находим элементы кнопок next pic и previous pic
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIndex = 0;

prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        setEntity(currentIndex - 1);
        currentIndex--;
    } else {
        currentIndex = entities.length - 1;
        setEntity(entities.length - 1);
    }
})

next.addEventListener('click', () => {
    if (currentIndex < entities.length - 1) {
        setEntity(currentIndex + 1);
        currentIndex++;
    } else {
        setEntity(0);
        currentIndex = 0;
    }
})

const dotOne = document.querySelector('.dot_1');
const dotTwo = document.querySelector('.dot_2');
const dotThree = document.querySelector('.dot_3');

dotOne.addEventListener('click', () => {
    setEntity(0);
    // currentIndex = 0;
})
dotTwo.addEventListener('click', () => {
    setEntity(1);
    // currentIndex = 1;
})
dotThree.addEventListener('click', () => {
    setEntity(2);
    // currentIndex = 2;
})
// Навигация над изображением
const rostovAdm = document.querySelector('.rostov_adm');
const sochi = document.querySelector('.sochi');
const rostovPat = document.querySelector('.rostov_pat');

rostovAdm.addEventListener('click', () => {
    setEntity(0);
    rostovAdm.classList.replace("notactive","active");
    rostovPat.classList.replace("active","notactive");
    sochi.classList.replace("active","notactive");
    // currentIndex = 0;
})
sochi.addEventListener('click', () => {
    setEntity(1);
    rostovAdm.classList.replace("active","notactive");
    rostovPat.classList.replace("active","notactive");
    sochi.classList.replace("notactive","active");
    // currentIndex = 1;
})
rostovPat.addEventListener('click', () => {
    setEntity(2);
    rostovAdm.classList.replace("active","notactive");
    rostovPat.classList.replace("notactive","active");
    sochi.classList.replace("active","notactive");
    // currentIndex = 2;
})