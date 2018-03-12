// productList.js

(function($) {
// jQuery Start

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

// jQuery End
})(this.jQuery);


















