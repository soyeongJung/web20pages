// main.js

(function($) {
// jQuery Start

 // #bannerBox
  //banner 이미지영역
  var bannerBox = $('#bannerBox');
  var banner = bannerBox.children('#bannerBoxDiv');

  // var bannerUl = banner.children('ul');
  var bannerUl = $('#adbannerBox');
  var bannerLast = bannerUl.children('li');
  // indicator
  var indi = bannerBox.find('#indicatorBox');
  var indiLi = indi.find('li');
  // 배너 및 인디케이터 첫요소 복제 후 마지막 요소로 이동
  var bannerClone = bannerLast.first().clone(true);
      bannerLast.last().after(bannerClone);
  var indiClone = indiLi.first().clone(true);
      indiLi.last().after(indiClone);
      bannerLast = bannerUl.children('li');
      indiLi = indi.find('li');
  // 좌, 우 버튼영역
  var btn = $('#arrowBtn');
  var leftBtn = btn.children('button').first();
  var rightBtn = btn.children('button').last();
  // 자동 슬라이드에 대한 변수 지정
  var myAutoSlide, startSlide, stopSlide;
  var timed = 3000;

  // 가로형 슬라이드 형태로 변경
  bannerBox.css({overflow:'hidden'});
  var bannerLastLength = bannerLast.length;
  bannerUl.css({width:bannerLastLength*100+'%'});
  var bannerW = bannerUl.innerWidth();
  bannerLast.css({float:'left', width:bannerW/bannerLastLength});

  // ================================
  // - tabindex 제거(첫번째 배너의 링크는 tabindex를 0으로 처리하여 사용)
  // var myTab = function(i) {
  //     bannerLast.find
  // }

  var myIndex = 0;
  var bannerSlideI = function(i) {

    if(i < 0){
        i = bannerLast.length-1;
        bannerUl.stop().css({marginLeft:-i*100+'%'});
        i--;
        bannerUl.stop().animate({marginLeft:-i*100+'%'});

    }
    else if(i >= bannerLast.length-1){
      bannerUl.stop().animate({marginLeft:-i*100+'%'},function() {
      i = 0;
        bannerUl.stop().css({marginLeft:0});
      });
      i=0;
    }else{
      bannerUl.stop().animate({marginLeft:-i*100+'%'});
    }
    indiLi.removeClass('focus');
    var bannerIndex = bannerLast.eq(i);
    indiLi.eq(i).addClass('focus');

    myIndex = i;
    console.log(i);
    return myIndex;
  }; // bannerSlideI

  // 1. indicator 클릭 시 fade효과
  // 첫 indicator, (.focus)
  indiLi.eq(0).addClass('focus');
  indiLi.eq(-1).hide();

  indiLi.on('click', ['button'], function(e) {
    e.preventDefault();
    myIndex = $(this).index();
    console.log(myIndex);
    bannerSlideI(myIndex);
  }); // indiLi.on();

  // 2. 좌,우 버튼을 클릭시 배너의 내용이 나타나게 만들기
  btn.find('button').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    var _this = $(this);
    console.log(_this);
    (_this[0] == leftBtn[0]) ? myIndex-- : myIndex++;
    console.log(myIndex);
    bannerSlideI(myIndex);
  }); // btn.find('button').on();

  var startSlide = function() { myAutoSlide = setInterval(function() { rightBtn.trigger('click');}, timed); };
  var stopSlide = function() { clearInterval(myAutoSlide); };
      startSlide();
  bannerBox.on({'mouseenter':stopSlide,'mouseleave':startSlide});

  // bannerBox.find('a').on('focus',function() {stopSlide()});
  bannerBox.find('button').on('focus',function() {stopSlide()});
  bannerBox.find('button').eq(-1).on('blur',function() {startSlide()});

// ------------------------------------------------------------------------

 // #newarriveBox
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

  // #bestitemBox
  var bestitemBox = $('#bestitemBox');
  var bestList = $('#bestList');
  var newListFront = $('#bestListFront');
  var newListBack = $('#newListBack');

  var nweListChildWidth = bestList.children().eq(0).innerWidth();

  console.log(nweListChildWidth);
  

  var bestListClone = bestList.children().clone(true);
  bestList.append(bestListClone);
  var bestListChildren = bestList.children();
  var bestListChildrenLength = bestListChildren.length;
  bestList.css({width:100 * bestListChildrenLength+'%'});
  var bestListReWidth = bestList.width();
  console.log(bestListReWidth);
  bestListChildren.width(bestListReWidth/bestListChildrenLength);

  bestListChildren.last().prependTo(bestList);
  bestList.css({marginLeft:'-100%'});
  bestitemBox.css({overflow:'hidden'});

  var bestLbtn = $('#bestarrowBtn').children('button').first();
  var bestRbtn = $('#bestarrowBtn').children('button').last();

  bestLbtn.on('click', function(event){
   event.preventDefault(); 
  
   bestList.stop(false, true).animate({marginLeft:0}, function(){
      var last = bestList.children().last();
       last.prependTo(bestList);
       bestList.css({marginLeft:'-100%'});
   });
  }); // bestLbtn 클릭
  
  bestRbtn.on('click', function(event){
      event.preventDefault(); 
     
      bestList.stop(false, true).animate({marginLeft:'-200%'}, function(){
          var first = bestList.children().first();
          first.appendTo(bestList);
          bestList.css({marginLeft:'-100%'});
      });
  }); // bestRbtn 클릭

// #mapBox
var jsonUrl = '../../js/data/address.json';
// var mapBox = $('#mapBox');
// var mapBoxDIV = $('#mapBoxDIV');
// var mapBoxWrap = $('#mapBoxWrap');
var addressBox = $('.map_addressbox');
var addressBoxParagraph = addressBox.children('p');
$.getJSON(jsonUrl,  function(data){ 
    // console.log(data);

var mapSelectbox = $('#mapSelectbox');
var j = 0;
var myMap = function(j) {
  var map = new GMaps({
        el: '.map_pic',
        lat: data[j].lat,
        lng: data[j].lng,
        zoomControl : true,
        zoomControlOpt: {
            style : 'SMALL',
            position: 'TOP_LEFT'
        },
        // panControl : false,
        streetViewControl : true,
        // mapTypeControl: false,
        // overviewMapControl: false
      });
      map.addMarker({
        lat: data[j].lat,
        lng: data[j].lng,
        title: data[j].locat
        // details: {
        //   database_id: 42,
        //   author: 'HPNeo'
        // }
      });
};

myMap(j);

mapSelectbox.on('change', function(e) {
    // console.log(e);
    
    var i =  $(this).val();
    // console.log(i);
    var ikeaAdd; 
    j = data.length - 1;
    for (; j >= 0; j--) {
        if(data[j].area == i){
            // console.log(data[j].address);
            ikeaAdd = data[j].address;
            break;
        }
    }
    addressBoxParagraph.text(ikeaAdd);
  console.log(j);
  myMap(j);
});

// console.log(j);

  
}); // $.getJSON();
  
// jQuery End
})(this.jQuery);


















