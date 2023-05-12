//=====================Burger

const iconBurger = document.querySelector('.icon-menu');
const body = document.querySelector('.body');
const menuBurger = document.querySelector('.menu__body');
iconBurger.addEventListener("click", function(event){
    if(event.target.closest('.icon-menu')) {
        iconBurger.classList.toggle('active');
        menuBurger.classList.toggle('active');
        document.body.classList.toggle('_lock');
    }
})


//=====================Прокрутка к нужному разделу меню

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - document.querySelector('header').offsetHeight;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); 
                      
            });
            // Активный раздел при анимации при скролле
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
        if(iconBurger.classList.contains('active')) {
            document.body.classList.remove('_lock');
            menuBurger.classList.remove('active');
            iconBurger.classList.remove('active');
        }
    })
    
}


//===================== Show More

const showMore = document.querySelector('.show-more');
const productsLength = document.querySelectorAll('.content-about__text').length;
let items = 1;

showMore.addEventListener("click", function(){
    items += 1;
    const array = Array.from(document.querySelector('.content-about__body').children);
    const visibleItems = array.slice(0, items);

    visibleItems.forEach((el) => {
        el.classList.add('visible');
    }) 

    if(visibleItems.length === productsLength) {
        showMore.style.display = 'none';
    }
})


