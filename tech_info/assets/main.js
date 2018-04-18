// jquery inviewport

(function($) {
  var vph = 0;
  function getViewportDimensions() {
    vph = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
  }
  getViewportDimensions();
  //on resize/scroll
  $(window).on("resize orientationChanged", function() {
    getViewportDimensions();
  });

  $.fn.inViewport = function(whenInView, whenNotInView) {
    return this.each(function() {
      var el = $(this),
        inviewalreadycalled = false,
        notinviewalreadycalled = false;
      //on resize/scroll
      $(window).on("resize orientationChanged scroll", function() {
        checkInView();
      });
      function checkInView() {
        var rect = el[0].getBoundingClientRect(),
          t = rect.top,
          b = rect.bottom;
        if (t < vph && b > 0) {
          if (!inviewalreadycalled) {
            whenInView.call(el);
            inviewalreadycalled = true;
            notinviewalreadycalled = false;
          }
        } else {
          if (!notinviewalreadycalled) {
            whenNotInView.call(el);
            notinviewalreadycalled = true;
            inviewalreadycalled = false;
          }
        }
      }
      //initial check
      checkInView();
    });
  };
})(jQuery);

// dank watcher: use this to do custom stuff.

$(".d-w").inViewport(
  function() {
    $(this).addClass("d-in-view");
  },
  function() {
    $(this).removeClass("d-in-view");
  }
);

// slides

$(".d-w-slide-to-top-1").inViewport(
  function() {
    $(this).addClass("d-in-view");
  },
  function() {
    $(this).removeClass("d-in-view");
  }
);
$(".d-w-slide-to-top-2").inViewport(
  function() {
    $(this).addClass("d-in-view");
  },
  function() {
    $(this).removeClass("d-in-view");
  }
);
$(".d-w-slide-to-top-3").inViewport(
  function() {
    $(this).addClass("d-in-view");
  },
  function() {
    $(this).removeClass("d-in-view");
  }
);

$(".d-w-fade-in-1").inViewport(
  function() {
    $(this).addClass("d-in-view");
  },
  function() {
    $(this).removeClass("d-in-view");
  }
);
$(".d-w-fade-in-2").inViewport(
  function() {
    $(this).addClass("d-in-view");
  },
  function() {
    $(this).removeClass("d-in-view");
  }
);
$(".d-w-fade-in-3").inViewport(
  function() {
    $(this).addClass("d-in-view");
  },
  function() {
    $(this).removeClass("d-in-view");
  }
);