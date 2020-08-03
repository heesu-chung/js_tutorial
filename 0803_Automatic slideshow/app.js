let index = 0;

showSlide();

function showSlide() {
    let i = 0;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByTagName('span');
    for(i=0 ; i<slides.length ; i++)    
    slides[i].style.display=" none";
    index = index + 1;
    if(index>slides.length){
        index = 1;     
    }
    for(i=0;i<dots.length;i++)
        dots[i].className=dots[i].className.replace(" active", "");

    slides[index-1].style.display="block";
    dots[index-1].className += " active";
    setTimeout(showSlide, 3000)
        
}
