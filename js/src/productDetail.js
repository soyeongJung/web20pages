// productDetail.js

(function($) {
// jQuery Start

// .product_imags ==================================================

$.fn.myGallery = function(dataUrl, baseImageFolder) {

    var galleryWrapBox;
      if(this.attr('id')){
        // console.log('find idName');
        galleryWrapBox = '#'+this.attr('id');
      }else if(this.attr('class')){
        // console.log('find className');
        galleryWrapBox = '.'+this.attr('class');
      }
      console.log(galleryWrapBox);

// console.log(this);

    var galleryBox = this; 
    galleryBox.append('<div class="gallery_list"><ul></ul></div>');
    galleryBox.append('<div class="gallery_view"><p class="hidden"></p></div>');

    var galleryView = $('.gallery_view');
    var galleryList = $('.gallery_list');
    var galleryUl = galleryList.children('ul');

    // 각 사용될 이미지위치 체크
    // var baseUrl = '../../jquery_img/img/gallery_img_01/';
    var baseUrl = baseImageFolder;
    var thumUrl = baseUrl + 'thum/';
    var bigUrl = baseUrl + 'big/';

  // html문서에 css(style) 삽입하기 
  var styleHas = $('head').find('style').length;
  // 태그가 없을 경우 생성
  if(!styleHas > 0){
    // style 존재할 경우 내부에  css작성
    console.log("style 태그 있음");
    $('head').append('<style></style>');}

  $('head').find('style').append(galleryWrapBox + '{width:100%; height:auto;}');
  $('head').find('style').append(galleryWrapBox + '>.gallery_view{width:410px; height:410px; background-color:#ddd; float:left; margin-left:20px; float:left; background-repeat: no-repeat; background-size: cover; background-position: center;}');
  $('head').find('style').append(galleryWrapBox + '>.gallery_list{width:100%; height:auto;}\n .gallery_list>ul{width:100%; height:auto;}');
  $('head').find('style').append(galleryWrapBox + '>.gallery_list>ul{width:95px; height:400px; float:left; text-align: center; float:left;}');
  $('head').find('style').append(galleryWrapBox + '>.gallery_list>ul>li{width:95px; height:95px; margin:10px 0; background-color:#a93}');
  $('head').find('style').append(galleryWrapBox + '>.gallery_list>ul>li:nth-of-type(1){margin-top:0}');
  $('head').find('style').append(galleryWrapBox + '>.gallery_list>ul>li>button{width:100%; height:100%; background-color:#aaf; background-repeat: no-repeat; background-position:center; background-size:cover;}');

    //  가져올 파일 경로 설정
  var jsonUrl = dataUrl;
  $.getJSON(jsonUrl, function(data) {
    console.log(data);
    $.each(data, function(index, value) {
      // data 불러오기 체크
      console.log(index+': '+value.thum);
      galleryUl.append('<li><button type = "button"><span class = "hidden">'+ value.thum +'</span></button></li>');
      galleryUl.children('li').eq(index).children('button').css({'backgroundImage':'url('+ thumUrl+value.file +')'});
  
    }); // $.each();
  var thisI = 0;
  var zoom = $('.zoom');
  var thumWidth = galleryView.outerWidth(); // margin포함된 width값
  var thumHeight = galleryView.outerHeight();
    // 첫 이미지/내용 메인에 삽입
    galleryView.css({backgroundImage:'url(' + bigUrl + data[thisI].file + ')'});
    zoom.css({backgroundImage:'url(' + bigUrl + data[thisI].file + ')'});
    galleryView.find('p').text(data[thisI].big);

  // 클릭하기 위한 기능사용 (getJSON메소드를 통해 처리된 기능을 사용함)
  var galleryBtn = galleryUl.children('li');
  console.log(galleryBtn);
  galleryBtn.on('click', ['button'], function(e) {
    e.preventDefault();
    thisI = $(this).index();
    console.log(thisI);
    galleryView.css({backgroundImage:'url(' + bigUrl + data[thisI].file + ')'});
    galleryView.find('p').text(data[thisI].big);

    return thisI;

  }); // .on('click', function(e) {});

    // image zoom
    $('head').find('style').append(galleryWrapBox + ' .zoom{width:500px; height:400px; border:2px solid #125bc1; position:absolute; top:0; left:60%; background-color:#ddd; background-repeat: no-repeat; background-size:200%;}');

    zoom.hide();

    galleryView.on('mousemove', function(event) {
      // thisI = $(this).index();
      console.log(thisI);
      var percentX = parseInt(event.offsetX / thumWidth * 100); 
      var percentY = parseInt(event.offsetY / thumHeight * 100); 
      console.log(percentX + ', ' + percentY);

      zoom.fadeIn();
      galleryView.css({cursor:'crosshair'});
      zoom.css({backgroundImage:'url(' + bigUrl + data[thisI].file + ')'});
      zoom.css({backgroundPosition:percentX+'%' + ' ' + percentY+'%'});
    });

    galleryView.on('mouseleave', function() {
      zoom.fadeOut();
    });
    
      }); // $.getJSON();

}; // $.fn.myGallery 플러그인 생성

// .checking_btn ==================================================


// .prodect_tab과 .prodectconts_tab ===============================
 var tabMenu = $('#tabMenu');
  var tabUl = tabMenu.children('ul');
  var tabLi = tabUl.children('li');
  var content = $('.prodectconts_tab');

  $('.select').show();

  tabLi.on('click', ['button'], function() {
    var index = $(this).index();
    console.log(index);
    var myIndex = content.children('div').eq(index);
    myIndex.stop().slideDown();
    $(this).addClass('select');
    myIndex.siblings('div').stop().slideUp().removeClass('select');
    $(this).siblings().removeClass('select');
  });

// .remoList ======================================================
  var newarriveBox = $('#newarriveBox');
  var newList = $('#newList');
  var newListFront = $('#newListFront');
  var newListBack = $('#newListBack');

  var nweListChildWidth = newList.children().eq(0).innerWidth();

  console.log(nweListChildWidth);
  
  var newListClone = newList.children().clone(true);
  newList.append(newListClone);
  var newListChildren = newList.children();
  var newListChildrenLength = newListChildren.length;
  newList.css({width:100 * newListChildrenLength+'%'});
  var newListReWidth = newList.width();
  console.log(newListReWidth);
  newListChildren.width(newListReWidth/newListChildrenLength);

  newListChildren.last().prependTo(newList);
  newList.css({marginLeft:'-100%'});
  newarriveBox.css({overflow:'hidden'});

  var newLbtn = $('#newarrowBtn').children('button').first();
  var newRbtn = $('#newarrowBtn').children('button').last();

  newLbtn.on('click', function(event){
   event.preventDefault(); 
  
   newList.stop(false, true).animate({marginLeft:0}, function(){
      var last = newList.children().last();
       last.prependTo(newList);
       newList.css({marginLeft:'-100%'});
   });
  }); // newLbtn 클릭
  
  newRbtn.on('click', function(event){
      event.preventDefault(); 
     
      newList.stop(false, true).animate({marginLeft:'-200%'}, function(){
          var first = newList.children().first();
          first.appendTo(newList);
          newList.css({marginLeft:'-100%'});
      });
  }); // newRbtn 클릭

// jQuery End
})(this.jQuery);


















