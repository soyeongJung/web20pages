// join.js

(function($) {

  var agreeAllBox = $('#agreeAllBox');
  var agreeAllLabel = $('label[for="agreeAllBox"]');
  var allCheckBox = $('#allCheckBox');
  var allCheckLabel = $('label[for="allCheckBox"]');
  var personCheckBox = $('#personCheckBox');
  var personCheckLable = $('label[for="personCheckBox"]');

  agreeAllBox.on('change', function(e) {
    // e.preventDefault();

    var myck = $(this).attr('checked');

    if(!myck){
      $(this).attr('checked',true);
      allCheckBox.attr("checked", true);
      personCheckBox.attr("checked", true);
      agreeAllLabel.addClass('checked');
      allCheckLabel.addClass('checked');
      personCheckLable.addClass('checked');
    }else{
      $(this).attr('checked',false);
      allCheckBox.attr("checked", false);
      personCheckBox.attr("checked", false);
      agreeAllLabel.removeClass('checked');
      allCheckLabel.removeClass('checked');
      personCheckLable.removeClass('checked');
    }
  });

  // var allcb = allCheckBox.attr('checked');
  var myCheckOn = function(baseClick){
    baseClick.on('change', function(e){
      agreeAllBox.attr("checked", false);
      agreeAllLabel.removeClass('checked');
      var _thisck = $(this).attr('checked');
      // console.log(_thisck);
      if(_thisck){
        baseClick.next().removeClass('checked');
        baseClick.attr('checked',false);
      }else{
        baseClick.next().addClass('checked');
        baseClick.attr('checked',true);
      }

      checkAll();

    });
  };

  myCheckOn(allCheckBox);
  myCheckOn(personCheckBox);

  var checkAll = function(){

    var allChecked = allCheckBox.attr('checked');
    var personChecked = personCheckBox.attr('checked');
    

    console.log(allChecked, personChecked);

    if(allChecked && personChecked){
      agreeAllBox.attr("checked", true);
      agreeAllLabel.addClass('checked');

    }else{
      agreeAllBox.attr("checked", false);
      agreeAllLabel.removeClass('checked');
      
    }
  };

  // checkAll(allChecked);
  // checkAll(personChecked);


    var nextBtn = $('.nbtn_box');
  nextBtn.on('click', ['button'], function(e){
    var allChecked = allCheckBox.attr('checked');
    var personChecked = personCheckBox.attr('checked');
    console.log(allChecked, personChecked);

    if(allChecked && personChecked){
     location.replace('http://naver.com');
    }else{
      alert("이케아 이용약관 및 개인정보 수집에 대해 모두 동의 후 클릭 바랍니다.");
    }
  });





})(this.jQuery);