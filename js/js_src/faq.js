(function($){

  var view= $('.view');
  var viewDl = view.children('dl');
  var viewDt = viewDl.children('dt')
  var viewDd = viewDl.children('dd')

  viewDt.eq(4).prevAll().addClass('active');
  viewDd.eq(4).prevAll().addClass('active');

  $('.more').on('click', function(evt){
    evt.preventDefault();

    var i=0;
    var activeLength = $('dt.active').length;

    for(; i<activeLength + 5; i++){
      $('dt').eq(i).addClass('active');
      $('dd').eq(i).addClass('active');
    }
  });
})(this.jQuery);