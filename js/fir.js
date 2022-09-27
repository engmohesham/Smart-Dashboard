$(function () {
  $(".menu-link").click(function () {
    $(".menu-link").removeClass("is-active");
    $(this).addClass("is-active");
  });
});

$(function () {
  $(".main-header-link").click(function () {
    $(".main-header-link").removeClass("is-active");
    $(this).addClass("is-active");
  });
});

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdowns.forEach((c) => c.classList.remove("is-active"));
    dropdown.classList.add("is-active");
  });
});

$(".search-bar input")
  .focus(function () {
    $(".header").addClass("wide");
  })
  .blur(function () {
    $(".header").removeClass("wide");
  });

$(document).click(function (e) {
  var container = $(".status-button");
  var dd = $(".dropdown");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    dd.removeClass("is-active");
  }
});

$(function () {
  $(".dropdown").on("click", function (e) {
    $(".content-wrapper").addClass("overlay");
    e.stopPropagation();
  });
  $(document).on("click", function (e) {
    if ($(e.target).is(".dropdown") === false) {
      $(".content-wrapper").removeClass("overlay");
    }
  });
});

$(function () {
  $(".status-button:not(.open)").on("click", function (e) {
    $(".overlay-app").addClass("is-active");
  });
  $(".pop-up .close").click(function () {
    $(".overlay-app").removeClass("is-active");
  });
});

$(".status-button:not(.open)").click(function () {
  $(".pop-up").addClass("visible");
});

$(".pop-up .close").click(function () {
  $(".pop-up").removeClass("visible");
});

const toggleButton = document.querySelector('.dark-light');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

const menu_show = document.getElementById('menu-show'),
  header_menu = document.getElementById('header-menu'),
  profile_img = document.getElementById('profile-img'),
  profile_menu = document.getElementById('profile-menu');

menu_show.onclick = function () {
  header_menu.classList.toggle('hide-now');
  toast[0].classList.remove("active");
  toast[1].classList.remove("active");
};

profile_img.onclick = function (eo) {
  profile_menu.classList.toggle('hide-sec');
  if (eo.target.id !== 'header-menu' || eo.target.id !== 'menu-show') {
    header_menu.classList.add('hide-now');
    toast[0].classList.remove("active");
    toast[1].classList.remove("active");
  }
};

document.onclick = function (e) {
  if (e.target.id !== 'profile-img' && e.target.id !== 'profile-menu') {
    profile_menu.classList.add('hide-sec');
  }
};


// Notification
const button = document.querySelector("button"),
  toast = document.querySelectorAll(".toast"),
  closeIcon = document.querySelectorAll(".close");


button.addEventListener("click", (eo) => {
  toast[0].classList.add("active");
  toast[1].classList.add("active");
  toast[0].style.bottom = "150px";
  if (eo.target.id !== 'header-menu' || eo.target.id !== 'menu-show') {
    header_menu.classList.add('hide-now');
  }
});

closeIcon[0].addEventListener("click", () => {
  toast[0].classList.remove("active");
});
closeIcon[1].addEventListener("click", () => {
  toast[1].classList.remove("active");
  toast[0].style.bottom = "60px";
});


// LeftSide Toggle
const leftSide = document.querySelector('.left-side'),
    toggle = document.getElementById('toggle');

    toggle.onclick = function (){
      leftSide.classList.toggle('left-side-hide');
      toggle.classList.toggle('left-1');
    }

    leftSide.onclick = function (e) {
      if (e.target.id !== 'toggle') {
        leftSide.classList.add('left-side-hide');
        toggle.classList.remove('left-1');
      }
    };