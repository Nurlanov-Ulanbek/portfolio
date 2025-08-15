function showSidebar(){
    event.preventDefault(); 
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop, // Позиция элемента
              behavior: 'smooth' // Плавная прокрутка
          });
      }
  });
});




window.onload = function() {

  setTimeout(function(){
    var preloader = document.getElementById('page-preloader')
    if( !preloader.classList.contains('done') )
    {
      preloader.classList.add('done'); 
    }
  }, 1000)
}




AOS.init({
  offset: 400,
  duration:800,

});





function openTab(tabName) {
    // Скрыть все табы
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }
    
    // Убрать активный класс у всех кнопок
    const tabBtns = document.getElementsByClassName('tab-btn');
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove('active');
    }
    
    // Показать выбранный таб
    document.getElementById(tabName).style.display = 'block';
    
    // Добавить активный класс к нажатой кнопке
    event.currentTarget.classList.add('active');
}

// Инициализация прогресс-баров
document.addEventListener('DOMContentLoaded', function() {
    const progressCircles = document.querySelectorAll('.progress-circle');
    
    function animateProgressCircles() {
        progressCircles.forEach(circle => {
            const percent = circle.getAttribute('data-percent');
            const fill = circle.querySelector('.progress-fill');
            const radius = fill.r.baseVal.value;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (percent / 100) * circumference;
            
            fill.style.strokeDashoffset = offset;
        });
    }
    
    animateProgressCircles();
});


// Динамическое управление высотой
function adjustHeights() {
    const isTallScreen = window.innerHeight > window.innerWidth && window.innerHeight > 800;
    
    if (isTallScreen) {
        document.body.classList.add('tall-screen');
        // Динамическая регулировка отступов
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.minHeight = 'auto';
            section.style.padding = '3rem 5%';
        });
    } else {
        document.body.classList.remove('tall-screen');
    }
}

// Вызываем при загрузке и изменении размера
window.addEventListener('load', adjustHeights);
window.addEventListener('resize', adjustHeights);
window.addEventListener('orientationchange', adjustHeights);