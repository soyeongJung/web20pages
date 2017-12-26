// index.js

(function($){

// #headBox
    var menuBox = $('#menuBox');
    var menuLiBox = menuBox.children('li');
    var menuDlBox = menuLiBox.children('dl');
    var menuDtBox = menuDlBox.children('dt');
    var menuDdBox = menuDlBox.children('dd');
    var menulistBox = menuDdBox.children('ul');

  menuDtBox.on('mouseenter', function(evt){
  evt.preventDefault();
    $(this).next('dd').children('ul').addClass('show');
});
  

   menuDtBox.on('mouseleave',function() {
    $(this).next('dd').children('ul').removeClass('show');
  });
   
   // var lastList = menulistBox:last-child('li');
   var littleLastList = menulistBox.children('li');


  // menuDtBox.on('mouseleave',function() {
  //   $(this).next('dd').children('ul').removeClass('show');
  // });



// #bannerBox
    var bannerBox = $('#bannerBox');
    var banner = bannerBox.children('#bannerBoxDiv');
    var bannerUl = banner.children('ul');
    var bannerLast = bannerUl.children('li');
    
    bannerLast.last().prependTo(bannerUl);
    bannerUl.css({marginLeft:'-100%'});
    banner.css({overflow:'hidden'});

    var leftBtn = $('#arrowBtn').children('button').first();
    var rightBtn = $('#arrowBtn').children('button').last();
    
    leftBtn.on('click', function(event){
     event.preventDefault(); 
    
     bannerUl.stop(false, true).animate({marginLeft:0}, function(){
         bannerLast = bannerUl.children('li').last();
         bannerLast.prependTo(bannerUl);
         bannerUl.css({marginLeft:'-100%'});
     });
    }); // leftBtn 클릭
    
    rightBtn.on('click', function(event){
        event.preventDefault(); 
       
        bannerUl.stop(false, true).animate({marginLeft:'-200%'}, function(){
            bannerLast = bannerUl.children('li').first();
            bannerLast.appendTo(bannerUl);
            bannerUl.css({marginLeft:'-100%'});
        });
       }); // rightBtn 클릭


  // #sideBox
var sideBox = $('#sideBox');
var sideBtn = sideBox.children('.side_show');

sideBtn.on('click', function(evt){
  evt.preventDefault();
  // sideBox.animate({right:'0'}, function(){
  //   sideBox.removeAttr('style');
  // });
  var style = parseInt(sideBox.css('right'));
  console.log(style);

  //if(parseInt(sideBox.css('right'))==0){
  if(style == 0){
    sideBox.removeClass('style');
    //sideBox.removeAttr('style');
  }else{
    sideBox.addClass('style');
    //sideBox.css({right:'0'});
  }
});

})(this.jQuery);