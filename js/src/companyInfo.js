// companyInfo.js

(function($) {

  $.fn.myGallery = function(dataUrl, baseImageFolder) {

    var workWrapBox;
      if(this.attr('id')){
        // console.log('find idName');
        workWrapBox = '#'+this.attr('id');
      }else if(this.attr('class')){
        // console.log('find className');
        workWrapBox = '.'+this.attr('class');
      }
      console.log(workWrapBox);

    var workPicBox = this; 
    workPicBox.append('<div class="work_view"><p class="hidden"></p></div>');
    workPicBox.append('<div class="work_list"><ul></ul></div>');

    var workView = $('.work_view');
    var workList = $('.work_list');

    var workUl = workList.children('ul');

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

// step_02
  $('head').find('style').append(workWrapBox + '{width:100%; height:auto; box-sizing: border-box; padding:0.5rem;}');
  $('head').find('style').append(workWrapBox + '>.work_view{width:100%; height:550px; background-color:#acc; box-sizing: border-box; border:1px solid #cca; margin-bottom: 1rem; border-radius: 1rem; background-repeat: no-repeat; background-position:center; background-size:cover;}');
  $('head').find('style').append(workWrapBox + '>.work_list{width:100%; height:auto;}\n .work_list>ul{width:100%; height:auto;}');
  $('head').find('style').append(workWrapBox + '>.work_list>ul{width:100%; height:auto;}');
  $('head').find('style').append(workWrapBox + '>.work_list>ul>li{width:100px; height:100px; margin-right:20px; float:left;}');
  $('head').find('style').append(workWrapBox + '>.work_list>ul>li:last-child{margin-right:0}');
  $('head').find('style').append(workWrapBox + '>.work_list>ul>li>button{width:100%; height:100%; background-color:#aaf; border-radius: 0.7rem; background-repeat: no-repeat; background-position:center; background-size:cover; box-shadow: 0.1rem 0.1rem 0.1rem rgba(0,0,0,0.3);}');

  var jsonUrl = dataUrl;
  $.getJSON(jsonUrl, function(data) {
    // data로 값을 가져올것이다.
    console.log(data);
    // for();
    $.each(data, function(index, value) {
    // each에서 값을 가져 올때 순서를 먼저 보고 값을 본다.
      // data 불러오기 체크
      console.log(index+': '+value.thum);
      workUl.append('<li><button type = "button"><span class = "hidden">'+ value.thum +'</span></button></li>');
      workUl.children('li').eq(index).children('button').css({'backgroundImage':'url('+ thumUrl+value.file +')'});
  
    }); // $.each();

    // 첫 이미지/내용 메인에 삽입
    workView.css({backgroundImage:'url(' + bigUrl + data[0].file + ')'});
    workView.find('p').text(data[0].big);


  // 클릭하기 위한 기능사용 (getJSON메소드를 통해 처리된 기능을 사용함)
  var workBtn = workUl.children('li');
  console.log(workBtn);
  workBtn.on('click', ['button'], function(e) {
    e.preventDefault();
    // var myImg = $(this).find('button').css('backgroundImage');
    // console.log(myImg);
    var thisI = $(this).index();
    console.log(thisI);
    workView.css({backgroundImage:'url(' + bigUrl + data[thisI].file + ')'});
    workView.find('p').text(data[thisI].big);
  }); // .on('click', function(e) {});

  }); // $.getJSON();

}; // $.fn.myGallery 플러그인 생성

})(this.jQuery);