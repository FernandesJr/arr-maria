//var playFirstVideoOneTime = false;

/*Add menu fixed on the scrool*/
const nav = document.getElementsByTagName('nav')[0];
const topNav = nav.offsetTop; //Return the height of the distance from the father

window.onscroll = function() {
  fixedMenu();
}

function fixedMenu() {
  if(window.pageYOffset >= topNav) {
    nav.classList.add('nav-fixed');
  } else {
    nav.classList.remove('nav-fixed');
  }
}


/*Change icon menu */
const iconMenu = document.getElementById('menu');
var iconBar = true;

function changeIconMenu() {
  if (iconBar) {
    iconMenu.setAttribute('src','./images/icons/icon-close.png');
    iconBar = false;
  } else {
    iconMenu.setAttribute('src','./images/icons/icon-menu.png');
    iconBar = true;
  }
}


/*slide top of elements 'woman'*/
const observerHoman = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-top');
    }
  });
}, {threshold: 1}); //Only show the element when all visible

Array.from(document.querySelectorAll('.card-woman-img')).forEach(element => {
  observerHoman.observe(element)
});

/*slide left of elements 'card benefit'*/
const observerBenefit = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-left');
    }
  });
}, {threshold: 1}); //Only show the element when all visible

Array.from(document.querySelectorAll('.card-benefit-p')).forEach(element => {
  observerBenefit.observe(element);
});


function playVideo(id) {
  let icon = document.getElementById('icon-play-'+ id);
  let video = document.getElementById('video-' + id);
  icon.remove();
  video.play();
  video.setAttribute('controls', '');
}


/*Autoplay on the first video
const observerVideo = new IntersectionObserver(entries => {
  entries.forEach( entry => {
    if (entry.isIntersecting && !playFirstVideoOneTime) {
      playVideo(1);
      playFirstVideoOneTime = true;
    }
  })
  
});

const firstVideo = document.getElementById('video-1');
observerVideo.observe(firstVideo);*/