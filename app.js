/* ########## MENU ######### */ 
function changeText() {
  const checkBox = document.getElementById("inputText");
  const text = document.getElementById("menuTitle");
  const menu = document.querySelector("#menu");
 

  if (checkBox.checked == true){
    text.textContent = "FERMER";
    menu.classList.add("zindex");
    $('.project').css('z-index','0');
    $('.btn-resume').css('z-index', '0');
    $('.contact').css('z-index', '0');
    $('.cv').css('z-index', '0');
    $('.mytitle').css('z-index', '0');

  } else {
    text.textContent = "MENU";
    menu.classList.remove("zindex");
    $('.project').css('z-index','3');
    $('.btn-resume').css('z-index', '1');
    $('.contact').css('z-index', '3');
    $('.cv').css('z-index', '3');    
    $('.mytitle').css('z-index', '1');
  }
}




/* ####### HERO SECTION ####### */

const sr = ScrollReveal({
    duration: 1500,
    reset: true
});

// sr.reveal('.hero .content .header' ,{
//     origin: 'top',
//     distance: '50px',
//     delay: 50,
//     scale: 0.5
// });

/* #### LOGO #### */ 

// const logo = document.querySelectorAll('#logo path');
// console.log(logo);
// for(let i = 0; i < logo.length; i++){
//     console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
// }



/* ##### ABOUT MYSELF SECTION #### */
sr.reveal('.about-myself .content h2' ,{
    origin: 'top',
    distance: '20px',
    delay: 20,
    scale: 0.5
});

/* ##### EXPERIENCE SECTION #### */
/* If the object is visible in the window, fadeIn it */
sr.reveal('.experience-content' ,{
    origin: 'right',
    distance: '200px',
    delay: 500,
    duration: 400,
    easing: 'ease-in',
    scale: 1,
    rotate: {
        x: 50,
        y: -20
    }
});


var x = screen.width;
if(x < 960){
    sr.reveal('.middle' ,{
    origin: 'right',
    distance: '200px',
    duration: 400,
    easing: 'ease-in',
    scale: 1,
    rotate: {
        x: 50,
        y: -20
    }
});
}else{
    sr.reveal('.middle' ,{
    origin: 'left',
    distance: '200px',
    duration: 400,
    easing: 'ease-in',
    scale: 1,
    rotate: {
        x: 50,
        y: 20
    }
});
};


//MENU top dynamic
var h = ($('.hero').height())/2;
$('#menu').css('top', h+0.1);


$( document ).ready(function() {
  // Main variables
    // var $aboutTitle = $('.about-myself .content h2');
    var $developmentWrapper = $('.development-wrapper');
    var developmentIsVisible = false;
   
  
  $(window).scroll( function(){

    var bottom_of_window = $(window).scrollTop() + $(window).height();

  /*###### SKILLS SECTION ######*/

    var middle_of_developmentWrapper = $developmentWrapper.offset().top + $developmentWrapper.outerHeight()/2;

    if((bottom_of_window > middle_of_developmentWrapper)&& (developmentIsVisible == false)){

      $('.skills-bar-container li').each( function(){

        var $barContainer = $(this).find('.bar-container');
        var dataPercent = parseInt($barContainer.data('percent'));
        var elem = $(this).find('.progressbar');
        var percent = $(this).find('.percent');
        var width = 0;

        var id = setInterval(frame, 15);

        function frame() {
          if (width >= dataPercent) {
              clearInterval(id);
          } else {
            width++;
            elem.css("width", width+"%");
            percent.html(width+" %");
          }
        }
      });
      developmentIsVisible = true;
    }
  }); // -- End window scroll --
});

