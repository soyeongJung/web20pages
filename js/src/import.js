(function($) {
// jQuery Start
  var wrap = $('#wrap');
  // 불러올 파일 목록
  var baseUrl = '../base/';
  var loadFile = {
                  headBox : baseUrl + 'headBox.html',
                  gnbBox  : baseUrl + 'gnbBox.html',
                  sideBox : baseUrl + 'sideBox.html',
                  footBox : baseUrl + 'footBox.html'
                  };

  // headImport =======================
  wrap.prepend('<div id="headBoxWrap"></div>');

  var headBoxWrap = $('#headBoxWrap');
  headBoxWrap.load(loadFile.headBox, function(){ 
  var headBox = $('#headBox');
  var headBoxBg = headBox.css('backgroundColor');
  headBoxWrap.css({'backgroundColor':headBoxBg});
  });

  //gnbimport==============================
  headBoxWrap.after('<div id="gnbBoxWrap"></div>');

  var gnbBoxWrap = $('#gnbBoxWrap');
  gnbBoxWrap.load(loadFile.gnbBox, function(){
  var gnbBox = $('#gnbBox');
  var gnbBoxBg = gnbBox.css('backgroundColor');
  gnbBoxWrap.css({'backgroundColor':gnbBoxBg});

  // #gnbBox start =======================
    var menuBox        = $('#menuBox');
    var menuLiBox      = menuBox.children('li');
    var menuDlBox      = menuLiBox.children('dl');
    var menuDtBox      = menuDlBox.children('dt');
    var menuDdBox      = menuDlBox.children('dd');
    var menulistBox    = menuDdBox.children('ul');
    var littleLastList = menulistBox.children('li');
    var timed          = 800/2;

    menuDtBox.on('mouseenter', function(e){
      // e.preventDefault();
    $(this).next('dd').children('ul').stop().slideDown();
    });
    menuDtBox.find('a').on('focus', function(e){
      // e.preventDefault();
    $(this).parent().parent().parent().siblings('li').find('ul').slideUp();
    $(this).parent().next('dd').children('ul').stop().slideDown();
    });

    menuDlBox.on('mouseleave',function() {
    // $(this).next('dd').children('ul').removeClass('show');
    menulistBox.delay(timed).slideUp();
    });

    littleLastList.last('li').children('a').on('blur', function() {
      littleLastList.parent().slideUp();
    });
    // // #gnbBox end =======================
   
  });



  //sideBoximport==============================
  wrap.append('<div id="sideBoxWrap"></div>');

  var sideBoxWrap = $('#sideBoxWrap');
  sideBoxWrap.load(loadFile.sideBox, function(){
  var sideBox = $('#sideBox');
  var sideboxMove = sideBox.children('.sidebox_move');
  var sideBoxBg = sideboxMove.css('backgroundColor');
  sideBoxWrap.css({'backgroundColor':sideBoxBg});
  var sideBtn = sideboxMove.children('.side_show');

    var sb = $('.side_show');

    sideBtn.on('click', function(evt){
      evt.preventDefault();
      // console.log('click'); // 확인용
         sideboxMove.toggleClass('style');
    });

    var cartBtn = $('.cart_btn');
    var topBtn = $('.top_btn');

    cartBtn.on('mouseenter', function() {
      cartBtn.addClass('right_zero');
    });
    cartBtn.on('mouseleave', function() {
      cartBtn.removeClass('right_zero');
    });

    topBtn.on('mouseenter', function() {
      topBtn.addClass('right_zero');
    });
    topBtn.on('mouseleave', function() {
      topBtn.removeClass('right_zero');
    });
  
  });


      // sideBox scroll???????????????????????????????????????
      // var mainUrl = '../../html/src/main.html';
      // var mainFileId = '#newarriveBox';
      // var content = $('#newarriveBox').offset().top;
       
      //  $(window).on('scroll',function(){
      //   var scrollDown = $(this).scrollTop();
      //   console.log(scrollDown);
      //    if(scrollDown >= content){
      //       sideboxMove.fadeIn();
      //       topBtn.fadeIn(); 
      //       cartBtn.fadeIn(); 
      //      }else{
      //       sideboxMove.fadeOut();
      //       topBtn.fadeOut();
      //       cartBtn.fadeOut();
      //      }
      //   });


  //footimport==============================
  wrap.append('<div id="footBoxWrap"></div>');

  var footBoxWrap = $('#footBoxWrap');
  footBoxWrap.load(loadFile.footBox, function(){
  var footBox = $('#footBox');
  var footBoxBg = footBox.css('backgroundColor');
  footBoxWrap.css({'backgroundColor':footBoxBg});
  });

  
// jQuery End
})(this.jQuery); 










