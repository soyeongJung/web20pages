// selectCountry.js

(function($) {
  
  var contryBox = $('#contryBox');
  var contriesBox = contryBox.children('ul');
  var contriesBoxLi = contriesBox.children('li');
  var contriesBoxDl = contriesBoxLi.children('dl');
  var contriesBoxDt = contriesBoxDl.children('dt');
  var contriesBoxDd = contriesBoxDl.children('dd');

  // console.log(contriesBoxDl.length);

  contriesBoxDl.on('click', function(e){
    e.preventDefault();

    var _thisI = $(this).index();
    var i = _thisI;
    // console.log( $(this) );

    $(this).parent().siblings('li').find('dd').removeClass('show');
    $(this).children('dd').addClass('show');

  }); // contriesBoxDl.on();

})(this.jQuery);