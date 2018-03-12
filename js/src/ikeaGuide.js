// ikeaGuide.js

(function($) {

  var area = $('.area_btn');
  var areaBtn = $('.area_btn').find('button');
  var gmBtn = $('.gm_dot');
  var gyBtn = $('.gy_dot');
  var storeInfo = $('.store_info');

  areaBtn.on('click', ['button'], function(e) {
    e.preventDefault();
    $(this).addClass('focus');
    $(this).siblings().removeClass('focus');
    area.children('address').siblings().removeClass('select_add');
    console.log($(this));
    $(this).next().addClass('select_add');
  });

  $.each(areaBtn, function(i,v) {
    $(this).on('click', function(e) {
      e.preventDefault();
      var index = i;
      $.each(storeInfo, function(i,v) {
        storeInfo.hide();
        storeInfo.eq(index).show();
      });
    });
  });

})(this.jQuery);