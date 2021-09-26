var imgs = Array.from(document.querySelectorAll('.item img'));
var containerSlider = document.querySelector('.lightImgBoxConatiner');
var containerSliderImg = document.querySelector('.lightImgBox');

var nextSlider=document.getElementById('next');
var prevSlider=document.getElementById('prev');
var closeSlider=document.getElementById('close');



var currentIndex=0;

imgs.forEach(function(img){
    img.addEventListener('click',function(eventInfo){
        containerSlider.style.display='flex';
        //bn3'yr attribute m4 property 34an kda 2st5dmna getAttribute
        var backgroundImg = img.getAttribute('src');
        containerSliderImg.style.backgroundImage = `url(${backgroundImg})` ;
        currentIndex=imgs.indexOf(img);
        usingKeyCode();  
    })
})

function nextSlide(){
    currentIndex++;
    if(currentIndex==imgs.length){
        currentIndex=0
    }
    console.log(currentIndex);
    var backgroundImg= imgs[currentIndex].getAttribute('src');
    containerSliderImg.style.backgroundImage = `url(${backgroundImg})` ;
    
}
function prevSlide(){
    currentIndex--;
    if(currentIndex==-1){
        currentIndex=imgs.length-1;
    }
    console.log(currentIndex);
    var backgroundImg= imgs[currentIndex].getAttribute('src');
    containerSliderImg.style.backgroundImage = `url(${backgroundImg})` ;
}
function closeSlide(){
    containerSlider.style.display='none';
}
nextSlider.addEventListener('click',nextSlide);
prevSlider.addEventListener('click',prevSlide);
closeSlider.addEventListener('click',closeSlide);
// containerSlider.addEventListener('click',closeSlide)

function usingKeyCode(){
    document.addEventListener('keydown',function(eventInfo){
        if(eventInfo.key=='ArrowRight'){
            nextSlide();
        }
        else if(eventInfo.key=='ArrowLeft'){
            prevSlide();
        }
        else if(eventInfo.key=='Escape'){
            closeSlide();
        }
    })
}