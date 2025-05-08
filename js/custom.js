// Aos
AOS.init(
  {once:true
    
  }
);

setTimeout(() => {
  $(".loading").fadeOut(1000);
}, 1000);

window.onload = function () {
  setTimeout(() => {
    $(".header-pages").addClass("active");
  }, 500);
};

lightGallery(document.getElementById("lightgallery"), {
  thumbnail: true,
  selector: ".image-item",
});

$(".remove-cart-header").click(function (e) {
  e.preventDefault();
  $(this).parents("li").fadeOut();
});
$(".delete-cart").click(function (e) {
  e.preventDefault();
  $(this).parents("tr").fadeOut();
});

$(".btn-cart-nav").click((e) => {
  e.preventDefault();
  $(".cart-header").toggleClass("active");
});

$(".close-cart-header").click((e) => {
  e.preventDefault();
  $(".cart-header").removeClass("active");
});


$(".all-categories ul > li > button").click(function (e) {
  e.preventDefault();
  $(this).next().addClass("active");
});
$(".back-categories").click(function (e) {
  e.preventDefault();
  $(this).parents(".show-categories").removeClass("active");
});

$(".text-ask-aboutus ul li h2").click(function (e) {
  e.preventDefault();
  $(this).next().slideToggle(300);
  $(this).parent().toggleClass("active");
});


$(document).ready(function () {
  $(".minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});


// start sldier services

if ($("#banner-slider").length) {
  $("#banner-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    items: 1,
    stagePadding:200,

    autoplayTimeout: 3500,
    autoplayHoverPause: false,
    rtl: true,
    autoplay: true,
    autoplayHoverPause: true,
    dots: true,
    smartSpeed: 700,
    responsiveClass: true,
    responsive: {
      0: {
        stagePadding:0,
      },
      768: {
        stagePadding:100,
      },
      992: {
        stagePadding:150,
      },
      1000: {
        stagePadding:200,
      },
    },
  });
}

if ($(".slider-product-index").length) {
  $(".slider-product-index").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 3,
    autoplayTimeout: 3500,
    autoplayHoverPause: false,
    rtl: true,
    autoplay: false,
    autoplayHoverPause: true,
    dots: false,
    smartSpeed: 700,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        stagePadding:0,

      },
      600: {
        items: 2,
        stagePadding:50,

      },

      1000: {
        items: 3,
        stagePadding:100,

      },
    },
  });
}

if ($("#slider-blog").length) {
  $("#slider-blog").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 3,
    autoplayTimeout: 3500,
    autoplayHoverPause: false,
    rtl: true,
    autoplay: false,
    autoplayHoverPause: true,
    dots: false,
    smartSpeed: 700,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        stagePadding:0,

      },
      600: {
        items: 2,
        stagePadding:50,

      },

      1000: {
        items: 3,
        stagePadding:100,

      },
    },
  });
}


if ($("#slider-partner").length) {
  $("#slider-partner").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items:4,
    autoplayTimeout: 3500,
    autoplayHoverPause: false,
    rtl: true,
    autoplay: false,
    autoplayHoverPause: true,
    dots: false,
    smartSpeed: 700,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,

      },
      600: {
        items: 3,

      },

      1000: {
        items: 4,

      },
    },
  });
}


if ($("#slider-members").length) {
  $("#slider-members").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items:3,
    autoplayTimeout: 3500,
    autoplayHoverPause: false,
    rtl: true,
    autoplay: false,
    autoplayHoverPause: true,
    dots: false,
    smartSpeed: 700,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,

      },
      600: {
        items: 2,

      },

      1000: {
        items: 3,

      },
    },
  });
}



$(".remove_mune").click(function () {
  $("#menu-div").removeClass("active");
  $(".bg_menu").removeClass("active");
});

function open() {
  $(".navicon").addClass("is-active");
  $("#menu-div").addClass("active");
  $("#times-ican").addClass("active");
  $(".bg_menu").addClass("active");
}

function close() {
  $(".navicon").removeClass("is-active");
  $("#menu-div").removeClass("active");
  $("#times-ican").removeClass("active");
  $(".bg_menu").removeClass("active");
  $(".all-categories").removeClass("active");
  $(".btn-all-categories").removeClass("active");
  $(".show-categories").removeClass("active");

  $(".remove-mune").click(function () {
    $("#menu-div").removeClass("active");
    $(".bg_menu").removeClass("active");
    $(".times-ican").removeClass("active");
  });
}

$("#times-ican").click(function () {
  if ($(this).hasClass("active")) {
    close();
  } else {
    open();
  }
});

$(".btns_menu_responsive").click(function (e) {
  close();
});

$(".remove-mune").click(function () {
  $("#menu-div").removeClass("active");
  $(".bg_menu").removeClass("active");
  $(".times-ican").removeClass("active");
  $(".navicon").removeClass("is-active");
});

$("#menu-div a").click(function () {
  e.preventDefault();
});

var $winl = $(window); // or $box parent container
var $boxl = $("#menu-div, #times-ican ,.btn-all-categories ,  .all-categories");
$winl.on("click.Bst", function (event) {
  if (
    $boxl.has(event.target).length === 0 && //checks if descendants of $box was clicked
    !$boxl.is(event.target) //checks if the $box itself was clicked
  ) {
    close();
  }
});

document.querySelectorAll('.circle-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    // لجعل زر واحد فقط active في كل مرة:
    document.querySelectorAll('.circle-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});





// --------------------------------


let checkbox = document.querySelectorAll('.form-group.checkbox input[type="checkbox"]');
let checkboxLabel = document.querySelectorAll('.form-group.checkbox span');
checkbox.forEach((item) => {
    item.addEventListener('change', function () {
        if (this.checked) {
            this.parentElement.classList.add('checked');
            // i want to add a check mark here
            this.parentElement.querySelector('span').style.backgroundImage = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 23 23\' fill=\'%23fff\'><path d=\'M10 15l-5-5 1.41-1.41L10 12.17l7.59-7.59L19 6l-9 9z\'/></svg>")';
        } else {
            this.parentElement.classList.remove('checked');
            this.parentElement.querySelector('span').style.backgroundImage = 'none';
        }
    });
});
checkboxLabel.forEach((item) => {
    item.addEventListener('click', function () {
        if (this.parentElement.querySelector('input[type="checkbox"]').checked) {
            this.parentElement.querySelector('input[type="checkbox"]').checked = false;
            this.style.backgroundImage = 'none';
        } else {
            this.parentElement.querySelector('input[type="checkbox"]').checked = true;
            this.style.backgroundImage = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%23fff\'><path d=\'M10 15l-5-5 1.41-1.41L10 12.17l7.59-7.59L19 6l-9 9z\'/></svg>")';
        }
    });
}
);

let togglePassword = document.querySelectorAll('.input-password input.password-field');
let togglePasswordIcon = document.querySelectorAll('.input-password i');

togglePasswordIcon.forEach((item , index)=>{
    item.addEventListener('click',function(){
       let input = togglePassword[index];
       if(input.type === "password"){
            input.type ="text"
            this.parentElement.querySelector('i').classList.remove('bi-eye-slash');
            this.parentElement.querySelector('i').classList.add('bi-eye');
       }
       else{
        input.type ="password"
           this.parentElement.querySelector('i').classList.remove('bi-eye');
           this.parentElement.querySelector('i').classList.add('bi-eye-slash');
       }
    
    })
})



// verification code

const inputs = document.querySelectorAll('.code-input');

if (inputs.length > 0) { // Check if the inputs exist on the page
    document.addEventListener('DOMContentLoaded', function() {
        inputs[0].focus();

        inputs.forEach((input, index) => {
            input.addEventListener('input', function() {
                if (input.value.length === 1 && index < inputs.length - 1) {
                    inputs[index + 1].focus(); // Focus on the next input
                }
            });

            input.addEventListener('keydown', function(event) {
                if (event.key === 'Backspace' && input.value.length === 0 && index > 0) {
                    inputs[index - 1].focus(); // Focus on the previous input when backspacing
                }
            });
        });
    });
}





// modal
let counts = { child: 1, adult: 1 };

    function increment(type) {
      counts[type]++;
      document.getElementById('count-' + type).innerText = counts[type];
    }

    function decrement(type) {
      if (counts[type] > 0) {
        counts[type]--;
        document.getElementById('count-' + type).innerText = counts[type];
      }
    }

    // Initialize Flatpickr inline inside calendar div
    flatpickr("#calendar", {
      inline: true,
      locale: "ar",
      minDate: "today",
      dateFormat: "Y-m-d"
    });