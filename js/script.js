if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

let typed = new Typed('#typed', { // Тут id того блока, в которм будет анимация
  stringsElement: '#about-section', // Тут id блока из которого берем строки для анимации
  typeSpeed: 1, // Скорость печати
  startDelay: 100, // Задержка перед стартом анимации
  backSpeed: 50, // Скорость удаления
  loop: false // Указываем, повторять ли анимацию
});

$(".element").typed({
  typeSpeed: 50, // Скорость печати
  backSpeed: 0, // Скорость удаления
  startDelay: 0, // Задержка перед стартом анимации
  backDelay: 500, // Пауза перед удалением 
  loop: false, // Повтор (true или false)
  loopCount: false, // Число повторов, false = бесконечно
  showCursor: true, // Отображение курсора
  attr: null, // Атрибут
  callback: function(){ } // Функция вызываемая после окончания работы плагина
});