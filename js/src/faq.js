// faq.js

(function($){

// QnA 숨김 및 보이기 기능 
  var view= $('.view');
  var viewDl = view.children('dl');
  var viewDt = viewDl.children('dt');
  var viewDd = viewDl.children('dd');

  viewDt.eq(10).prevAll().addClass('active');
 
    var ddHeight = [];
    var i = 0;
    // console.log(viewDd.length); // 10
    for (;i < viewDd.length; i++) {
      ddHeight[i] = viewDd.eq(i).innerHeight();
    }
    console.log(ddHeight);

    var myHide = function(select) {
      var _this = select;
      var _thisI = select.index() / 2;
      var _this = select;
      _this.next('dd').siblings('dd').stop().animate({height:0, paddingTop:0, paddingBottom:0}, function() {
      var _$this = $(this);
      _$this.css({display:'none'});
      }); 
    };

    var myShow = function(select) {
      var _this = select;
      var _thisI = select.index() / 2;
      // 2. 선택된 바로뒤의 dd를 나타내게 만들기
      _this.next('dd').css({display:'block', paddingTop:0, paddingBottom:0, height:0}); 
      _this.next('dd').stop().animate({paddingTop:'2rem', paddingBottom:'2rem', height: ddHeight[_thisI]});
    };

    // 선택된 다음 dd를 숨김처리하기위한 함수
    var mySelHide = function(select){
      var _this = select;
      var _thisI = select.index() / 2;
      _this.next('dd').stop().animate({height:0, paddingTop:0, paddingBottom:0}, function() {
      var _$this = $(this);
      _$this.css({display:'none'});
      }); 
    };

    viewDt.on('click',['button'], function(e) {
    e.preventDefault();
    var sel = $(this);
    var ddView = sel.next('dd').css('display') == 'block';
    if(ddView){
      mySelHide(sel);
    }else{
      myHide(sel);
      myShow(sel);
    }
  });

// moreBtn
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
