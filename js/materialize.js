

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

	  $(document).ready(function(){
	    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	    $('#modal2').modal();
	  });

	 $('#modal2').modal({
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

	  $(document).ready(function(){
	    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	    $('#modal3').modal();
	  });

	 $('#modal3').modal({
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


	  $(document).ready(function(){
	    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	    $('#modal4').modal();
	  });

	 $('#modal4').modal({
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

	 // WAYPOINTS

	 $(document).ready(function(){
 
  // hide our element on page load
  $('#tech').css('opacity', 0);
 
  $('#tech').waypoint(function() {
      $('#tech').addClass('fadeInLeft');
  }, { offset: '70%' });
  console.log("faded!")
 
});


	 $(document).ready(function(){
 
  // hide our element on page load
  $('#parallax-1-header').css('opacity', 0);
 
  $('#parallax-1-header').waypoint(function() {
      $('#parallax-1-header').addClass('fadeInDown');
  }, { offset: '70%' });
  console.log("faded!")
 
});

$(document).ready(function(){
 
  // hide our element on page load
  $('#problems').css('opacity', 0);
 
  $('#problems').waypoint(function() {
      $('#problems').addClass('fadeInUp');
  }, { offset: '70%' });
  console.log("faded!")
 
});

$(document).ready(function(){
 
  // hide our element on page load
  $('#elegant').css('opacity', 0);
 
  $('#elegant').waypoint(function() {
      $('#elegant').addClass('fadeInUp');
  }, { offset: '70%' });
  console.log("faded!")
 
});

$(document).ready(function(){
 
  // hide our element on page load
  $('#solutions').css('opacity', 0);
 
  $('#solutions').waypoint(function() {
      $('#solutions').addClass('fadeInRight');
  }, { offset: '70%' });
  console.log("faded!")
 
});

$(document).ready(function(){
 
  // hide our element on page load
  $('#logo').css('opacity', 0);
 
  $('#logo').waypoint(function() {
      $('#logo').addClass('fadeInLeft');
  }, { offset: '70%' });
  console.log("faded!")
 
});

$(document).ready(function(){
 
  // hide our element on page load
  $('#links').css('opacity', 0);
 
  $('#links').waypoint(function() {
      $('#links').addClass('fadeInRight');
  }, { offset: '70%' });
  console.log("faded!")
 
});


	 $(document).ready(function(){
 
  // hide our element on page load
  $('#aboutHeader').css('opacity', 0);
 
  $('#aboutHeader').waypoint(function() {
      $('#aboutHeader').addClass('fadeInDown');
  }, { offset: '70%' });
  console.log("faded!")
 
});

$(document).ready(function(){
 
  // hide our element on page load
  $('#aboutBlerb').css('opacity', 0);
 
  $('#aboutBlerb').waypoint(function() {
      $('#aboutBlerb').addClass('fadeInLeft');
  }, { offset: '70%' });
  console.log("faded!")
 
});

$(document).ready(function(){
 
  // hide our element on page load
  $('#aboutPic').css('opacity', 0);
 
  $('#aboutPic').waypoint(function() {
      $('#aboutPic').addClass('fadeInRight');
  }, { offset: '70%' });
  console.log("faded!")
 
});

$(document).ready(function(){
 
  // hide our element on page load
  $('#djKhaledHangmanPic').css('opacity', 0);
 
  $('#djKhaledHangmanPic').waypoint(function() {
      $('#djKhaledHangmanPic').addClass('fadeIn');
  }, { offset: '70%' });
  console.log("faded!")
 
});

$(document).ready(function(){
 
  // hide our element on page load
  $('#djKhaledHangmanPicTitle').css('opacity', 0);
 
  $('#djKhaledHangmanPicTitle').waypoint(function() {
      $('#djKhaledHangmanPicTitle').addClass('fadeInDown');
  }, { offset: '200%' });
  console.log("faded!")
 
});