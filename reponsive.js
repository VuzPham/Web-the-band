//reponsive slider
const slider = document.querySelector('#slider');
const class_heading = document.querySelector('.class-heading');
const class_description = document.querySelector('.class-description');
const img = ["/assets/img/chicago.jpg", "/assets/img/la.jpg","/assets/img/ny.jpg"];
const place = ["Chicago","Los Angeles", "New York"]
const caption = ["Thank you, Chicago - A night we won't forget.","We had the best time playing at Venice Beach!", "The atmosphere in New York is lorem ipsum."]


var i = 1;
function changeImage () {
    slider.style = "background: url('"+ img[i] +"') top center/cover no-repeat";
    class_heading.innerHTML = place[i];
    class_description.innerHTML = caption[i];
    i++;
    if (i == 3){
        i = 0;
    }
}
setInterval(function(){
    changeImage();
},3500)

// reponsive modal
var close_Header = document.querySelector('.modal-close-icon');
var modal = document.querySelector('#modal');
    close_Header.onclick = function(){
    modal.style.visibility = 'hidden';
}

var button_buy = document.querySelectorAll('.button_buy');
button_buy.forEach(function(crr,index) {
    crr.onclick = function(){
        modal.style.visibility= 'visible'; 
    }
})
    
var modal_Close = document.querySelector('.modal-close');
    modal_Close.onclick = function(){
        modal.style.visibility = 'hidden';
    }   

// reponsive form

//close
var form = document.querySelector('#form');
var form_close = document.querySelector('.form-close-icon');
    form_close.onclick = function(){
        form.style.visibility = 'hidden';
        name_if.value ='';
        email_if.value ='';
        message_if.value ='';
    }
//information // selector 
var name_if = document.querySelector('.name-space-if');
var email_if = document.querySelector('.email-space-if');
var message_if = document.querySelector('.message-space-if');

// form information selector 
var form_name = document.querySelector('.form_name_if');
var form_email = document.querySelector('.form_email_if');

// send selector 
var send = document.querySelector('.send');

send.onclick = function(){
    if (name_if.value === '' || email_if.value === '' || message_if.value ===''){
        alert('Bạn Chưa nhập đủ dữ liệu yêu cầu!');
    }
    else {
    form_name.innerHTML = `Name: ${name_if.value}`;
    form_email.innerHTML = `Email: ${email_if.value}`;
    form.style.visibility = 'visible';  
    }
}


