const navbarDemos = document.querySelector('.navbar__demos')
const demoArea = document.querySelector('.demoArea')

navbarDemos.addEventListener('click',()=>demoArea.scrollIntoView({behavior: "smooth"}))

// USAGE

const vec1 = document.querySelector('.vec1')
const vec2 = document.querySelector('.vec2')
const vec3A = document.querySelector('.vec3A')
const vec3B = document.querySelector('.vec3B')
const vec4 = document.querySelector('.vec4')
const vec5A = document.querySelector('.vec5A')
const vec5B = document.querySelector('.vec5B')



vec1.addEventListener('click',()=>{
    document.querySelector('.before-click-vec1').classList.toggle('hide-usage');
    document.querySelector('.after-click-vec1').classList.toggle('hide-usage');
    vec1.classList.toggle('rotate');
})

vec2.addEventListener('click',()=>{
    document.querySelector('.before-click-vec2').classList.toggle('hide-usage');
    document.querySelector('.after-click-vec2').classList.toggle('hide-usage');
    vec2.classList.toggle('rotate');
})

vec3A.addEventListener('click',()=>{
    document.querySelector('.before-click-vec3A').classList.toggle('hide-usage');
    document.querySelector('.after-click-vec3A').classList.toggle('hide-usage');
    vec3A.classList.toggle('rotate');
})

vec3B.addEventListener('click',()=>{
    document.querySelector('.before-click-vec3B').classList.toggle('hide-usage');
    document.querySelector('.after-click-vec3B').classList.toggle('hide-usage');
    vec3B.classList.toggle('rotate');
})

vec4.addEventListener('click',()=>{
    document.querySelector('.before-click-vec4').classList.toggle('hide-usage');
    document.querySelector('.after-click-vec4').classList.toggle('hide-usage');
    vec4.classList.toggle('rotate');
    console.log("yes4")
})

vec5A.addEventListener('click',()=>{
    document.querySelector('.before-click-vec5A').classList.toggle('hide-usage');
    document.querySelector('.after-click-vec5A').classList.toggle('hide-usage');
    vec5A.classList.toggle('rotate');
    console.log('yes')
})

vec5B.addEventListener('click',()=>{
    document.querySelector('.before-click-vec5B').classList.toggle('hide-usage');
    document.querySelector('.after-click-vec5B').classList.toggle('hide-usage');
    vec5B.classList.toggle('rotate');
})




// FAQS

document.getElementById('pyqVector1').addEventListener('click',()=>{
    document.querySelector('.faqAns1').classList.toggle('faqAns1');
    document.querySelector('#pyqVector1').classList.toggle('rotate')

})


document.getElementById('pyqVector2').addEventListener('click',()=>{
    document.querySelector('.faqAns2').classList.toggle('faqAns2');
    document.querySelector('#pyqVector2').classList.toggle('rotate')
})




document.getElementById('pyqVector3').addEventListener('click',()=>{
    document.querySelector('.faqAns3').classList.toggle('faqAns3');
    document.querySelector('#pyqVector3').classList.toggle('rotate')
})

document.getElementById('pyqVector4').addEventListener('click',()=>{
    document.querySelector('.faqAns4').classList.toggle('faqAns4');
    document.querySelector('#pyqVector4').classList.toggle('rotate')
})


//Footer

const year= new Date().getFullYear();
document.querySelector('.year').textContent=`© ${year} by Foyer`