$(document).ready(function() {
  slideShow(4000);
});

function slideShow(speed) {
  // set the opacity of all images to 0
  $('ul.images li').css({ opacity: 0.0 });

  // get the first image and display it
  $('ul.images li:first').css({ opacity: 1.0 }).addClass('show');

  // call the gallery function to run the slideshow
  var timer = setInterval(gallery, speed);

  // pause the slideshow on hover
  $('ul.images').hover(
    function () { clearInterval(timer); },
    function () { timer = setInterval(gallery, speed); }
  );
}

function gallery() {
  var current = $('ul.images li.show');
  if (current.length === 0) current = $('ul.images li:first');

  if (current.queue('fx').length === 0) {
    var next = current.next().length && current.next().attr('id') !== 'slideshow-caption'
      ? current.next()
      : $('ul.images li:first');

    next.css({ opacity: 0.0 }).addClass('show').animate({ opacity: 1.0 }, 1000);
    current.animate({ opacity: 0.0 }, 1000).removeClass('show');
  }
}
