let courses = Array.from(document.getElementsByClassName('courses'))
let Buy = Array.from(document.getElementsByClassName('Buy'))
let prices= Array.from(document.getElementsByClassName('prices'))
let names = Array.from(document.getElementsByClassName('names'))
let instructorName= Array.from(document.getElementsByClassName('instructorName'))
let imageCourse= Array.from(document.getElementsByClassName('imageCourse'))
let total = document.querySelector('.total')
let iconTotal= document.querySelector('.iconTotal')
let iconCar= document.querySelector('.iconCar')
let coursesInIcon= document.querySelector('.coursesInIcon')
let numberOfCourses= document.querySelector('.numberOfCourses')
let totalForShoppingCart= document.querySelector('.totalForShoppingCart')
let courseCategory = Array.from(document.getElementsByClassName('courseCategory'))
let IconCourses=document.querySelector('.IconCourses')
let coursesMotivaion = Array.from(document.getElementsByClassName('coursesMotivaion'))
let coursesExplaination= Array.from(document.getElementsByClassName('coursesExplaination'))
let coursesContainer= Array.from(document.getElementsByClassName('coursesContainer'))
let pythonCourses= Array.from(document.getElementsByClassName('pythonCourses'))
let ids=document.getElementById('')
let go_to_cart = document.querySelector('.go_to_cart')
let cont = document.querySelector('.cont')
let cont2 = document.querySelector('.cont2')
let Checkout = document.querySelector('.Checkout')
let Return = document.querySelector('.return')

pythonCourses[0].style.display='block'

let COURSES=[]
let counter=0;
let topOfIcon=0;

for (let i=0;i<courses.length;i++){
    Buy[i].onclick = function(){
        let newCourse = {
            prices:prices[i].innerHTML,
            names:names[i].innerHTML,
            instructorName:instructorName[i].innerHTML,
            imageCourse:imageCourse[i].src
        }
        courses[i].style.display='block'
        counter++;
        COURSES.push(newCourse)
        showCourse()
        getTotal()
        totalForShoppingCart.innerHTML=counter
        numberOfCourses.innerHTML= counter 
        topOfIcon+=150
        pythonCourses[4].style.top=topOfIcon+"px"
    }
}

let TOTAL = +total.innerHTML

function getTotal(){
    TOTAL += +COURSES[COURSES.length-1].prices
    total.innerHTML=TOTAL
    iconTotal.innerHTML=TOTAL
}

function showCourse(){

    let course=''
    for (let i=0;i<COURSES.length;i++){
        course += `
        <div class="coursesContent" >
        <hr>
        <img class="imageCourse" src="${COURSES[i].imageCourse}">
        <h3 class="names">${COURSES[i].names}</h3>
        <p>${COURSES[i].instructorName}</p>
        <h5 class="prices">${COURSES[i].prices}</h5>
        <p onclick="deleteCourse(${i})" class="remove">Remove</p>
        </div>
        `
    }
    
    document.querySelector('.coursesContent').innerHTML=course
    document.querySelector('.IconCourses').innerHTML=course

}

function deleteCourse(i){
    TOTAL-=+COURSES[i].prices
    total.innerHTML=TOTAL
    iconTotal.innerHTML=TOTAL
    counter--;
    topOfIcon-=120
    pythonCourses[4].style.top=topOfIcon+"px"
    totalForShoppingCart.innerHTML=counter
    numberOfCourses.innerHTML=counter     
    COURSES.splice(i,1)
    showCourse()
}

iconCar.onmousemove=function(){
    coursesInIcon.style.display='flex'
}

function hideTheIcon(){
    coursesInIcon.style.display='none'
}

go_to_cart.onclick =function() {
    cont.style.display='none'
    cont2.style.display='block'
    cont2.style.display='block'
    pythonCourses[4].style.display="block"
    coursesInIcon.style.display='none'
}
Return.onclick =function() {
    cont.style.display='block'
    cont2.style.display='none'
    cont2.style.display='none'
    pythonCourses[4].style.display="block"
    coursesInIcon.style.display='none'
}

courseCategory[0].onclick= function(){
    pythonCourses[0].style.display='block'
    pythonCourses[1].style.display='none'
    pythonCourses[2].style.display='none'
    pythonCourses[3].style.display='none'
}

courseCategory[1].onclick= function(){
    pythonCourses[1].style.display='block'
    pythonCourses[0].style.display='none'
    pythonCourses[2].style.display='none'
    pythonCourses[3].style.display='none'
}

courseCategory[2].onclick= function(){
    pythonCourses[2].style.display='block'
    pythonCourses[0].style.display='none'
    pythonCourses[1].style.display='none'
    pythonCourses[3].style.display='none'
}

courseCategory[3].onclick= function(){
    pythonCourses[3].style.display='block'
    pythonCourses[0].style.display='none'
    pythonCourses[2].style.display='none'
    pythonCourses[1].style.display='none'
}

Checkout.onclick= function(){
    alert(`Thanks for choosing our platform the total is ${total.innerHTML}` )
}

