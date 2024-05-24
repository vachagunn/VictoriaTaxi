// Mobile navigation
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

const active = 'nav-icon--active';

navBtn.addEventListener('click', () => {
    navIcon.classList.toggle(active);
    nav.classList.toggle('header__top-row--mobile');
    
    if (navIcon.classList.contains(active)) {
        navIcon.src = './img/header/cross.svg';
        navIcon.alt = 'Cross';
        
        navIcon.width = '40';
        navIcon.height = '40';
        
        document.body.classList.add('no-scroll');
    } else {
        navIcon.src = './img/header/menu.svg';
        navIcon.classList.remove(active);

        navIcon.width = '50';
        navIcon.height = '50';

        document.body.classList.remove('no-scroll');
    }
});


// Phone Mask
mask('[data-tel-input]');

// Возврат placeholder у поля для ввода телефона при снятии фокуса
const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value == '+') input.value = '';
    })

    input.addEventListener('blur', () => {
        if (input.value == '+') input.value = '';
    })
});


// Yandex Map
initMap();

async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [56.803569, 60.567156],

                // Уровень масштабирования
                zoom: 15
            }
        }
    );

    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());
}