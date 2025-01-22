//Для описания первого листа делается увеличение
const block = document.querySelector('.face-text');
        const text = document.querySelector('.face-text p');

        block.addEventListener('mousemove', (event) => {
            const { left, top, width, height } = block.getBoundingClientRect();
            const x = event.clientX - left; // Положение курсора по X относительно блока
            const y = event.clientY - top; // Положение курсора по Y относительно блока

            // Рассчитаем новое положение текста
            const offsetX = (x / width) * 100 - 50; // Сдвиг текста по X
            const offsetY = (y / height) * 100 - 50; // Сдвиг текста по Y

            text.style.transform = `translate(${offsetX}%, ${offsetY}%)`;
        });

        block.addEventListener('mouseleave', () => {
            text.style.transform = 'translate(0%, 0%)'; // Вернуть текст в центр при уходе курсора
        });


    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Показать кнопку при прокрутке вниз
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = 'flex'; // Показываем кнопку
    } else {
        scrollToTopBtn.style.display = 'none'; // Скрываем кнопку
    }
};

// Прокрутка к началу страницы при нажатии на кнопку
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавная прокрутка
    });
});
    function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');

    if (content.style.display === "block") {
        content.style.display = "none";
        arrow.style.transform = "rotate(0deg)"; // Поворачиваем стрелочку обратно
    } else {
        content.style.display = "block";
        arrow.style.transform = "rotate(90deg)"; // Поворачиваем стрелочку вниз
    }}
    //Отправка сообщений в тг
    
 