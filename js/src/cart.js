// join.js

(function($) {

  var checkAllCart = $('#checkAllCart');
  var checkAllLabel = $('label[for="checkAllCart"]');
  var checkPartCart = $('#checkPartCart');
  var checkPartLabel = $('label[for="checkPartCart"]');

  checkAllCart.on('change', function(e) {
    // e.preventDefault();
    var myck = $(this).attr('checked');
    if(!myck){
      $(this).attr('checked',true);
      checkPartCart.attr("checked", true);
      checkAllLabel.addClass('checked');
      checkPartLabel.addClass('checked');
    }else{
      $(this).attr('checked',false);
      checkPartCart.attr("checked", false);
      checkAllLabel.removeClass('checked');
      checkPartLabel.removeClass('checked');
    }
  });

  var myCheckOn = function(baseClick){
    baseClick.on('change', function(e){
      checkAllCart.attr("checked", false);
      checkAllLabel.removeClass('checked');
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

  myCheckOn(checkPartCart);

  var checkAll = function(){
    var allChecked = checkPartCart.attr('checked');
    console.log(allChecked);
    if(allChecked){
      checkAllCart.attr("checked", true);
      checkAllLabel.addClass('checked');
    }else{
      checkAllCart.attr("checked", false);
      checkAllLabel.removeClass('checked');
    }
  };

})(this.jQuery);