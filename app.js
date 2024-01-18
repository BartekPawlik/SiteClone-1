const hamburger = document.querySelector(".hamburger-container")
const hamburgerTop = document.querySelector(".top")
const hamburgerMid = document.querySelector(".mid")
const hamburgerBot = document.querySelector(".bot")
const menuOpen = document.querySelector('.navigation-section-container')
const mobileOpacity = document.querySelector(".mobile-menu")

const sliderFun = document.querySelector('#slider-section')
let slidecount = 0;


const slideBar1 = document.querySelector(".slide-bar1")
const slideBar2 = document.querySelector(".slide-bar2")
const circle = document.querySelectorAll(".circle")
const circle1 = document.querySelector("#circle1")
const circle2 = document.querySelector("#circle2")
const circle3 = document.querySelector("#circle3")
const circle4 = document.querySelector("#circle4")
const chooseSlide1 = document.querySelector("#choose-slide1")
const chooseSlide2 = document.querySelector("#choose-slide2")
const chooseSlide3 = document.querySelector("#choose-slide3")
const chooseSlide4 = document.querySelector("#choose-slide4")
const deleteClick = document.querySelectorAll('.delete')
const sectionContainer = document.querySelector(".section-container")
const chooseSliderRadient = document.querySelector(".choose-slide-radient")
let myTimer;



hamburger.addEventListener("click", () => {
    hamburgerMid.classList.toggle("mid-delete")
    hamburgerTop.classList.toggle('top-x')
    hamburgerBot.classList.toggle('bot-x')
    menuOpen.classList.toggle('mobile-menu-open')
    mobileOpacity.classList.toggle('mobile-opacity')
})


chooseSlide1.addEventListener('click', () => {

    if (slideBar1.classList.contains('active')) {
        clearInterval(myTimer)
        slidecount = 0
        slideBar1.style.left = 0
        
        deleteClick.forEach((cir) => {
            cir.classList.remove('click-option')
            circle1.classList.add("click-option")


        })

        

  
    }
    
    

})

chooseSlide2.addEventListener('click', () => {
    if (slideBar1.classList.contains('active')) {
        clearInterval(myTimer)
        slidecount = 1
        slideBar1.style.left = '-100%'
        deleteClick.forEach((cir) => {
            cir.classList.remove('click-option')
            circle2.classList.add("click-option")

        })

      
    }

  


})





chooseSlide3.addEventListener('click', () => {
    clearInterval(myTimer)
    if (slideBar1.classList.contains('active')) {
        slidecount = 2
        slideBar1.style.left = '-200%'
        deleteClick.forEach((cir) => {
            cir.classList.remove('click-option')
            circle3.classList.add("click-option")


        })

        
    }
  


})



chooseSlide4.addEventListener('click', () => {
    if (slideBar1.classList.contains('active')) {
        clearInterval(myTimer)
        slidecount = 3
        slideBar1.style.left = '-300%'
        slideBar2.style.left = '100%'
        deleteClick.forEach((cir) => {
            cir.classList.remove('click-option')
            circle4.classList.add("click-option")
        })
    }
})





chooseSlide1.addEventListener('click', () => {
    if (slideBar2.classList.contains('active')) {
        clearInterval(myTimer)
        slidecount = 4
        slideBar2.style.left = 0
        deleteClick.forEach((cir) => {
            cir.classList.remove('click-option')
            circle1.classList.add("click-option")
        })
    }
})

chooseSlide2.addEventListener('click', () => {
    if (slideBar2.classList.contains('active')) {
        clearInterval(myTimer)
        slidecount = 5
        slideBar2.style.left = '-100%'
        deleteClick.forEach((cir) => {
            cir.classList.remove('click-option')
            circle2.classList.add("click-option")
        })
    }
})

chooseSlide3.addEventListener('click', () => {
    if (slideBar2.classList.contains('active')) {
        clearInterval(myTimer)
        slidecount = 6
        slideBar2.style.left = '-200%'
        deleteClick.forEach((cir) => {
            cir.classList.remove('click-option')
            circle3.classList.add("click-option")
        })
    }
})



chooseSlide4.addEventListener('click', () => {
    if (slideBar2.classList.contains('active')) {
        clearInterval(myTimer)
        slidecount = 7
        slideBar2.style.left = '-300%'
        slideBar1.style.left = '100%'
        deleteClick.forEach((cir) => {
            cir.classList.remove('click-option')
            circle4.classList.add("click-option")
        })
    }
})

    myTimer = setInterval(() => {
       
      
function slideCount(){
    slidecount++
    if (slidecount == 0) {
        circle1.classList.add('click-option')
        circle1.classList.add('slide-left-active')
        slideBar1.classList.add('active')
        slideBar1.style.zIndex = '1'
        slideBar2.style.zIndex = '0'
        
    }


    if (slidecount == 1) {
        circle2.classList.add('click-option')
        circle1.classList.remove('click-option')
        slideBar2.classList.remove('active')
        slideBar1.classList.add('active')
        // sectionContainer.style.height = '880px'
        // chooseSliderRadient.style.opacity= '1'
    }


    if (slidecount == 2) {
        slideBar1.style.zIndex = '1'
        slideBar2.style.zIndex = '0'
        circle3.classList.add('click-option')
        circle2.classList.remove('click-option')
        // sectionContainer.style.height = '800px'
    }


    if (slidecount == 4) {
        slideBar1.style.zIndex = '0'
        slideBar2.style.zIndex = '1'
        slideBar2.style.left = `0%`
        circle1.classList.add('click-option')
        circle4.classList.remove('click-option')
        slideBar1.classList.remove('active')
        slideBar2.classList.add('active')
        // sectionContainer.style.height = '920px'
    }

    if (slidecount == 5) {
        slideBar2.style.left = `-100%`
        circle1.classList.add('click-option')
        circle1.classList.remove('click-option')
        circle2.classList.add('click-option')
        // sectionContainer.style.height = '880px'
    }

    if (slidecount == 6) {
        slideBar2.style.left = `-200%`
        slideBar1.style.zIndex = '0'
        slideBar2.style.zIndex = '1'
        slideBar2.classList.add('active')
        slideBar1.classList.remove('active')
        circle2.classList.remove('click-option')
        circle3.classList.add('click-option')
        // sectionContainer.style.height = '800px'
    }

    if (slidecount == 7) {
        slideBar2.style.left = `-300%`
        slideBar1.style.left = '0'
        circle3.classList.remove('click-option')
        circle4.classList.add('click-option')
        // sectionContainer.style.height = '770px'
    }
    if (slidecount == 8) {
        slideBar2.style.left = `-400%`
        slidecount = 0
        circle4.classList.remove('click-option')
        circle1.classList.add('click-option')
        // sectionContainer.style.height = '880px'
    }

    slideBar1.style.left = `-${slidecount}00%`

    if (slidecount == 7) {
        slideBar1.style.left = `100%`
    }

    if (slidecount == 3) {
        slideBar2.style.left = `100%`
        circle4.classList.add('click-option')
        circle3.classList.remove('click-option')
        // sectionContainer.style.height = '770px'
    }
    console.log(slidecount)
}
      
slideCount()            
    }, 4000);

 


    $(document).ready(function () {
        $('.customer-logos').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            dots: false,
            pauseOnHover: true,
            responsive: [{
                
                breakpoint: 768,
                setting: {
                    slidesToShow: 10
                }
            }, {
                breakpoint: 520,
                setting: {
                    slidesToShow: 3
                }
            }]
        });
    });

        
const iconAgree = document.querySelectorAll(".icon-agree")

iconAgree.forEach((icon)=>{
    icon.addEventListener("click", ()=>{
        console.log("hey")
        icon.classList.toggle('icon-opacity')
    })

})
