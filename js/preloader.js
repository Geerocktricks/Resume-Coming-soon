console.log('Works')
let loader = document.querySelector('.loader');
const container = document.querySelector('.container');
const aside = document.querySelector('aside');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        setTimeout(() =>{
            container.style.opacity = 1, 50;
        })
    }, 2000);
}

init();