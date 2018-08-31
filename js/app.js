$(function () {
    var $navs = $("#tab-nav li");
    var divs = $("#tab-contain .mod");
    var $navbar = $("#nav-bar");
    var $menuLis2 = $("#menu-list2");
    var $miscNenu = $(".misc-menu-wrapper");

    var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 160,
        'tolerance': 70,
    });

    function close(eve) {
        eve.preventDefault();
        slideout.close();
        $miscNenu.removeClass("animated fadeIn").hide();
    }

    slideout
        .on('open', function() {
            maskPanel = document.getElementById('mask_panel');
            maskPanel.addEventListener('click', close);
        })
        .on('beforeclose', function() {
            maskPanel = document.getElementById('mask_panel');
            maskPanel.removeEventListener('click', close);
        });

    $("#misc-btn").on("click", function () {
        slideout.toggle();
        if (slideout.isOpen()) {
            $miscNenu.addClass("animated fadeIn").show();
        } else {
            $miscNenu.removeClass("animated fadeIn").hide();
        }
    });

    $('.hbtn').on('click', function () {
        $('.welcome').hide();
    });
    
    $('.number-input').on('focus', 'input', function (e) {
        $(this).parent().addClass('focus');
    });

    $('.number-input').on('blur', 'input', function (e) {
        $(this).parent().removeClass('focus');
    });

    $("#menu-btn").on("click", function () {
        $navbar.css({ visibility: 'hidden' });
        $menuLis2.show();
    });

    $("#menu-list2 #close-btn").on("click", function () {
        $menuLis2.hide();
        $navbar.css({ visibility: '' });
    });

    // 不允许输入负数
    $('input[type=number]').on("keypress", function(event) {
        if(event.keyCode == 45) {
            event.preventDefault();
        }
    });

    var clipboard = new ClipboardJS("#copy-btn")
    clipboard.on("success", function(e) {
        alert("Copy success.");
    });

    clipboard.on("error", function(e) {
        alert("Copy failed.");
    });
    
    for (var i = 0; i < $navs.length; i++) {
      $navs[i].title = i;
      $navs[i].onclick = function() {
        for (var j = 0; j < $navs.length; j++) {
          $($navs[j]).removeClass("active");
          $(divs[j]).hide();
        }
        $(this).addClass("active");
        $(divs[this.title]).show();
      };
    }
});
