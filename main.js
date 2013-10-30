(function () {
  $(function () {

    // click stuffs
    var _clicks = [];

    function registerClick(callback) {
      _clicks.push(callback);
    }

    document.body.addEventListener('click', function () {
      if (_clicks.length) {
        _clicks.shift().call();
      }
    });

    registerClick(function () {
      $('.kyle-traveler').css({
        scale: 0,
        rotate: '360deg',
        display: 'block'
      }).transition({
        scale: 1,
        rotate: '0deg'
      }, 500);
    });


    // parallax stuffs
    var _parallaxEls = $();

    $.fn.parallax = function (ratio) {
      this.data('ratio', ratio);
      this.data('top', this.position().top);
      _parallaxEls = _parallaxEls.add(this);
    };

    window.addEventListener('scroll', function () {
      var scrollTop = $(window).scrollTop();

      _parallaxEls.each(function () {
        var $el = $(this);
        var ratio = $el.data('ratio');
        var top = $el.data('top');
        $el.css('top', scrollTop * ratio + top);
      });
    });

    $('clouds').parallax(0.2);
  });
}());

