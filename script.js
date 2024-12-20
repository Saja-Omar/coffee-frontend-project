let search=document.querySelector('.search-box')
document.querySelector('#search-icon').onclick=()=>{
    search.classList.toggle('active');
    nav.classList.remove('active')
}
let nav=document.querySelector('.navbar')
document.querySelector('#menu-icon').addEventListener('click', () => {
    nav.classList.toggle('active');
    search.classList.remove('active');
});


let heder=document.querySelector('header')
window.addEventListener('scroll',()=>{
    heder.classList.toggle('shadow',window.scrollY>0)
})


