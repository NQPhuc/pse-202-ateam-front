const sizes=document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const bgcolors = document.querySelectorAll('.bgcolor');
const shoebgs = document.querySelectorAll('.shoebg');

let prevColor="black";
let animationEnd=true;

function changeSize(){
    sizes.forEach(size=>size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor(){
    if(!animationEnd)return;
    let primary=this.getAttribute('primary');
    let color=this.getAttribute('color');
    let shoe=document.querySelector(`.shoe[color="${color}"]`);
    let bgcolor=document.querySelector(`.bgcolor[color="${color}"]`);
    let prevBgcolor = document.querySelector(`.bgcolor[color="${prevColor}"]`);

    if(color==prevColor) return;

    colors.forEach(c=>c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary',primary);

    shoes.forEach(s=>s.classList.remove('show'));
    shoe.classList.add('show');

    bgcolors.forEach(g => g.classList.remove('first','second'));
    bgcolor.classList.add('first');
    prevBgcolor.classList.add('second');

    prevBgcolor=color;
    animationEnd=false;

    bgcolor.addEventListener('animationend',()=>{
        animationEnd=true;
    })
}

sizes.forEach(size=>size.addEventListener('click',changeSize));
colors.forEach(c=>c.addEventListener('click',changeColor));

let x=window.matchMedia("(max-width:1000px)");

document.addEventListener('DOMContentLoaded', changeHeight);
function changeHeight(){
    if(x.matches){
        let shoeHeight=shoes[0].offsetHeight;
        shoebgs.style.height=`${shoeHeight*0.9}px`;
    }
    else{
        /*shoebgs.style.height="475px";*/
		shoebgs.height="475px";
    }
}
/*changeHeight();*/
/*document.addEventListener('DOMContentLoaded', changeHeight);*/
changeHeight();

window.addEventListener('resize',changeHeight);