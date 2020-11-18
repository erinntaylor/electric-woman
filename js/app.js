/* EMAIL FORM HANDLING */

$('.form-button input').click(function(e){
  // do not submit form
  e.preventDefault();
  // save value if the form field is not blank or the default
  if( $('#email').val() !== '' && $('#email').val() !== 'Email' ){
    var val = $('#email').val();
    // add email address to message
    $('.form-message span').text(val);
    // show message (initially hidden in CSS)
    $('.form-message').fadeIn();
  }
})


// $('.form-message').click(fuction(){
//   $('.form-message').hide();
// })




// Based on https://codepen.io/SitePoint/pen/NWxKgxN

function getTimeRemaining(endtime) {
  var total = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((total / 1000) % 60);
  var minutes = Math.floor((total / 1000 / 60) % 60);
  var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  var days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(endtime) {
  var days = $('.days');
  var hours = $('.hours');
  var minutes = $('.minutes');
  var seconds = $('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    days.html(t.days);
    hours.html(('0' + t.hours).slice(-2));
    minutes.html(('0' + t.minutes).slice(-2));
    seconds.html(('0' + t.seconds).slice(-2));

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

// Deadline is set to December 16 (arbitrary)
var deadline = new Date(Date.parse(new Date()) + 50 * 24 * 60 * 60 * 1000);

initializeClock(deadline);