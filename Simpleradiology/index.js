
let availablekeywords=[
    'HTML',
    'CSS',
    'javascript',
    'Where to learn',
    'Rheumatoid Arthritis',
    'ab',
    'ac',
    'ad',
    'ae',
    'af'

];
const resultBox=document.querySelector(".result-box");
const inputBox=document.getElementById("input-box");

inputBox.onkeyup=function(){
    let result=[];
    let input =inputBox.value;
    if(input.length){
        result=availablekeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(result);
}
function display(result){
    const content = result.map((list)=>{
        return"<li onClick=selectInput(this)>" + list + "</li>";
    });
    resultBox.innerHTML="<ul>" + content.join('') +"</ul>";
}
function selectInput(list){
    inputBox.value=list.innerHTML;
    resultBox.innerHTML=''
}
document.getElementById("go").onclick=function(){
    if(inputBox.value=="CSS"){
        document.getElementById("h1").textContent="CSSSSS"
    }
    if(inputBox.value=="Rheumatoid Arthritis"){
        window.open("RheumatoidArthritis.html")
    }
    else{
        document.getElementById("h1").textContent="no data available"
    }
}
document.getElementById("anatomyclick").onclick=function(){
    window.open("cases.html")
}

let slideIndex = 1;
showSlides(slideIndex);// Next/previous controls
function plusSlides(n) { showSlides(slideIndex += n);}// Thumbnail image controls
function currentSlide(n) { showSlides(slideIndex = n);}


let dots = document.getElementsByClassName("dot"); 
if (n > slides.length) {slideIndex = 1} 
if (n < 1) {slideIndex = slides.length} 
for (i = 0; i < slides.length; i++) { 
    slides[i].style.display = "none"; 
}
 for (i = 0; i < dots.length; i++) { 
    dots[i].className = dots[i].className.replace(" active", ""); 
}
 slides[slideIndex-1].style.display = "block"; 
 dots[slideIndex-1].className += " active";
