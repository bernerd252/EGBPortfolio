// LOGO FADE IN

	// $(document).ready(function(){
	// 	  $("#bigLogo").fadeIn(3000);
 //    });

 	// PARTICLES

 // 	particlesJS.load('particles-js', 'particles.json', function() {
	//   console.log('callback - particles.js config loaded');
	// });


  	// SPLASHSCREEN

  	 $('.enter_link').click(function() { 
        $(this).parent().fadeOut(500);
 	});

  	// PARALLAX
  
  	$(document).ready(function(){
      $('.parallax').parallax();
    });

   function sticky_relocate() {
	    var window_top = $(window).scrollTop();
	    var div_top = $('#sticky-anchor').offset().top;
	    if (window_top > div_top) {
	        $('#sticky').addClass('stick');
	        $('#sticky-anchor').height($('#sticky').outerHeight());
	    } else {
	        $('#sticky').removeClass('stick');
	        $('#sticky-anchor').height(0);
	    }
	}

	// STCICK HEADER

	$(function() {
	    $(window).scroll(sticky_relocate);
	    sticky_relocate();
	});

	var dir = 1;
	var MIN_TOP = 200;
	var MAX_TOP = 350;

	function autoscroll() {
	    var window_top = $(window).scrollTop() + dir;
	    if (window_top >= MAX_TOP) {
	        window_top = MAX_TOP;
	        dir = -1;
	    } else if (window_top <= MIN_TOP) {
	        window_top = MIN_TOP;
	        dir = 1;
	    }
	    $(window).scrollTop(window_top);
	    window.setTimeout(autoscroll, 100);
	}

	// MODALLS

	 $(document).ready(function(){
	    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	    $('#modal1').modal();
	  });

	 $('#modal1').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: 0.5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      starting_top: '4%', // Starting top style attribute
      ending_top: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        alert("Ready");
        console.log(modal, trigger);
      },
      complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );