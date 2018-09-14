// ==================banner random=================
$(function(){
    var bannerArray = ["seek1","seek2","seek3","seek4","seek5","seek6","seek7","seek8"];

    num = Math.floor(Math.random()*bannerArray.length);
    $('.random img').attr('src','image/' + bannerArray[num] + '.png');

    bannerArray.splice(num,1);
    num2 = Math.floor(Math.random()*bannerArray.length);
    $('.random2 img').attr('src','image/' + bannerArray[num2] + '.png');

    bannerArray.splice(num2,1);
    num3 = Math.floor(Math.random()*bannerArray.length);
    $('.random3 img').attr('src','image/' + bannerArray[num3] + '.png');
});
// ==================explore=================
$(document).ready(function () {
    $('#layer-one').mousemove(function (e) {
        parallax(e, this, 1);
    });
});
function parallax(e, target, layer) {
    var layer_coeff = 10 / layer;
    var x = ($(window).width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 100)) / layer_coeff;
    $(target).offset({left : x });
};
// ==================popup=========================
function popUp(){
    $(".pop21").hide();
    $(".pop").show(); 
}
// ==================popup21=========================
function pop21Up(){
  $(".pop21").show();
  $(".pop2").hide();
  $(".pop3").hide();
 }
// ===================popup2=========================
function pop2Up(){
  $(".pop2").show();
  $(".pop21").hide();
  $(".pop3").hide();
}
// ===================popup3=========================
function pop3Up(){
  $(".pop3").show();
  $(".pop2").hide();
  $(".pop21").hide();
}
function finish(){
   $(".pop, .pop21, .pop2, .pop3").hide();   
   if(screen.width>767){
   $(".home .top").show();
   $("#fp-nav ul li a span, .fp-slidesNav ul li a span").show();
   }
   if(screen.width<=767){
    $('.dropdown_gp').show();
    $('.nav_bar_mobile').show();
   }
}
// ===================fixed scroll=======================
function fixed(){
  $.fn.fullpage.setMouseWheelScrolling(false);
  $.fn.fullpage.setAllowScrolling(false);
}
// ===================fixed scroll=======================
function closescroll(){
  $.fn.fullpage.setMouseWheelScrolling(true);
  $.fn.fullpage.setAllowScrolling(true);
}

$(function() {
      //pop
      $(".pop, .pop21, .pop2, .pop3").hide();
      $('.adv_pic1, .adv_pic2, .adv_pic3, .reg_pic1, .reg_pic2, .reg_pic3').click(function(){
        fixed();
        $(".pop").show();
        $('.nav_bar').hide();
        $('.nav_bar_mobile').hide();
        $('.dropdown_gp').hide();
        $("#fp-nav ul li a span, .fp-slidesNav ul li a span").hide();
        $(".home .top").hide();
      $('.pop21 .buttonb').click(function(){
         popUp();
      })

      //pop21
      $('.pop .search_button,.pop2 .circle1,.pop2 .buttonb, .pop3 .circle1').click(function(){
        pop21Up();
      });

      //pop2
      $('.pop21 .buttonc, .pop21 .circle2, .pop3 .circle2, .pop3 .buttonb ').click(function(){
        pop2Up();
      });

      //pop3
      $('.pop2 .circle3,.pop2 .buttonc').click(function(){
        pop3Up();
      });
  });

    //popclose
    $(".pop .close, .pop3 .buttonc,.pop3 buttonc").click(function(e){
       if(screen.width>767)
       $('.nav_bar').show();
       finish();
       closescroll();
    });
});
// ====================adv dropdown==============================
function DropDown(el) {
  this.dropdown_ = el;
  this.initEvents();
}

DropDown.prototype = {
  initEvents : function() {
    var obj = this;

    obj.dropdown_.on('click', function(event){
      $(this).toggleClass('active');
      event.stopPropagation();
    });

    var id =obj.dropdown_.attr('id');
    $('#' + id + " .item").each(function(){ 

      $(this).on("click", function(){

           $('#' + id + " .item").each(function(){
             $(this).removeClass("selected");
           });

           $(this).addClass("selected");
           if($(this).text() == "South America")  $('#' + id + " span").text("SA"); 
           else if($(this).text() == "North America")  $('#' + id + " span").text("NA");
           else  $('#' + id + " span").text($(this).text());  

              var query_item = [];

              if(id == "adv_d"){
                  var land,sea,sky;
                  land = $('.adv .land');
                  sea = $('.adv .sea');
                  sky = $('.adv .sky');
                  query_item = [land,sea,sky];
               }else{
                  var na,sa,asia,eu;
                  na = $('.reg .na');
                  sa = $('.reg .sa');
                  asia = $('.reg .asia');
                  eu = $('.reg .eu');
                  query_item = [na,sa,asia,eu];
               }

              var selected_index = $(this).parent().index();
              if(selected_index == 0){

                for(var i=0; i<query_item.length; i++){
                  $.each(query_item[i],function(index,value){
                     $(value).removeClass('disappear');
                  });
                }
                  if(id == "adv_d")  $('.adv .arrow-right').css('visibility','visible');
                  if(id == "reg_d")  $('.reg .arrow-right').css('visibility','visible');

                }else{

                  for(var i = 0; i<query_item.length; i++){
                    $.each(query_item[i],function(index,value){
                       if(i == selected_index -1)  $(value).removeClass('disappear');
                       else  $(value).addClass('disappear');  
                    });
                  }
                  
                  if(id == "adv_d"){
                      $('.adv .arrow-left').css('visibility','hidden');
                      $('.adv .arrow-right').css('visibility','hidden');
                  }

                  if(id == "reg_d")
                      $('.reg .arrow-left').css('visibility','hidden');
                      $('.reg .arrow-right').css('visibility','hidden');
               }  
      });
    })
  }
}

$(function() {
    var adv_d = new DropDown( $('#adv_d') );
    var reg_d = new DropDown( $('#reg_d') );
}); 
// =======================adv_arrow=======================
$(function() {
  var page_adv = 0,page_reg = 0;
  $('.adv .arrow-left').css('visibility','hidden');
  $('.reg .arrow-left').css('visibility','hidden');

  // click event
  $('.adv .arrow-right').click(function(){
      page_adv = page_adv - 100;
      $('.adv .container').css('transform','translate(' + page_adv + 'vw');

      if(page_adv < 0)    $('.adv .arrow-left').css('visibility','visible');
      if(page_adv <- 100) $('.adv .arrow-right').css('visibility','hidden');
  });

  $('.adv .arrow-left').click(function(){
      page_adv = page_adv + 100;
      $('.adv .container').css('transform','translate(' + page_adv + 'vw');

      if( page_adv == 0 ){
          $('.adv .arrow-left').css('visibility','hidden');
          $('.adv .arrow-right').css('visibility','visible');
      }
  });

  $('.reg .arrow-right').click(function(){
      page_reg = page_reg - 100;
      $('.reg .container').css('transform','translate('+ page_reg +'vw');

      if(page_reg < 0){
          $('.reg .arrow-left').css('visibility','visible');
          $('.reg .arrow-right').css('visibility','hidden');
      }
  });

  $('.reg .arrow-left').click(function(){
      page_reg = page_reg + 100;
      $('.reg .container').css('transform','translate(' + page_reg + 'vw');
      
      if(page_reg == 0){
          $('.reg .arrow-left').css('visibility','hidden');
          $('.reg .arrow-right').css('visibility','visible');
      }
  });

  $("#adv_d .dropdown .item").click(function(){
      page_adv = 0;
      $('.adv .container').css('transform','translate(' + page_adv + 'vw');
      $('.adv .arrow-left').css('visibility','hidden');
  });

  $("#reg_d .dropdown .item").click(function(){
      page_reg = 0;
      $('.reg .container').css('transform','translate(' + page_reg + 'vw');
      $('.reg .arrow-left').css('visibility','hidden');
  });

}); 
// ==================================================
$(document).ready(function() {
  $('.top').hide();
  $('#fullpage').fullpage({
      navigation: true,
      navigationPosition: 'right',
        
      afterLoad: function(anchorLink, index){
      var loadedSection = $(this);

      var items = $(".nav_bar .category span");
        $.each(items,function(index,value){
           $(value).removeClass('highlight');
        })
            switch(index){
              case 1:
                $("#1").addClass('highlight');
              break;
              case 3:
                $("#3").addClass('highlight');
              break;
              case 4:
                $("#4").addClass('highlight');
              break;
              case 5:
                $("#5").addClass('highlight');
              break;
              case 6:
                $("#6").addClass('highlight');
              break;
              case 7:
                $("#7").addClass('highlight');
              break;
              case 8:
                $("#8").addClass('highlight');
              break;
            }
            
            if(index ==1)
            {
              $(".nav_bar").css("background-color","rgba(255,255,255,1)");
              $(".nav_bar .logo span").css({color:'#000'});
              $(".nav_bar .category span").removeClass("change_nav_color");


              $('.top').slideUp();
            }
       },
        onLeave: function(index, nextIndex, direction){
           if(index ==1)
            {
              $(".nav_bar").css("background-color","rgba(0,0,0,0.5)");
              $(".nav_bar .logo span").css({color:'#fff'});
              $(".nav_bar .category span").addClass("change_nav_color"); 

              if(screen.width>=767){
              $('.ani').addClass('ani_type');
              $('.top').slideDown();
              }
            }

        }
    });

    $('.top').click(function () {
      $.fn.fullpage.moveTo(1);
    });
    // ============select navbar category================
    $('.nav_bar .category span').on("click",function(){
      $.fn.fullpage.moveTo($(this).attr('id'));
    });

     $('.nav_bar .logo').on("click",function(){
        $.fn.fullpage.moveTo(1);
     });
    //==================nav_bar_mobile====================
    $('.nav_bar_mobile').click(function(){
        $(this).toggleClass('open');
    });

    $('.nav_bar_mobile .category span').click(function(){
        $.each($('.nav_bar_mobile .category span'),function(){
          $(this).removeClass('highlight');
        });

        $.fn.fullpage.moveTo($(this).attr('class'));
        $(this).addClass('highlight');
    });
    // ==========select adv category====================
    $('.adv .select_gp .select_item').on("click",function(){
       var items = $('.adv .select_gp .select_item');
       $.each(items,function(index,value){
          $(value).removeClass('highlight');
      })

       $(this).addClass("highlight");
       
       var land,sea,sky;
       land = $('.adv .land');
       sea = $('.adv .sea');
       sky = $('.adv .sky');

       switch($(this).index()){
        case 0 :
          $.each(land,function(index,value){
            $(value).removeClass('disappear');
          })
          $.each(sea,function(index,value){
            $(value).removeClass('disappear');
          })
          $.each(sky,function(index,value){
            $(value).removeClass('disappear');
          })
        break;
        case 1 :
          $.each(land,function(index,value){
            $(value).removeClass('disappear');
          })
          $.each(sea,function(index,value){
            $(value).addClass('disappear');
          })
          $.each(sky,function(index,value){
            $(value).addClass('disappear');
          })
        break;
        case 2 :
          $.each(sea,function(index,value){
            $(value).removeClass('disappear');
          })
          $.each(land,function(index,value){
            $(value).addClass('disappear');
          })
          $.each(sky,function(index,value){
            $(value).addClass('disappear');
          })
        break;
        case 3 :
          $.each(sky,function(index,value){
            $(value).removeClass('disappear');
          })
          $.each(land,function(index,value){
            $(value).addClass('disappear');
          })
          $.each(sea,function(index,value){
            $(value).addClass('disappear');
          })
        break;
       }         
    });
    // =============select reg category==================
    $('.reg .select_gp .select_item').on("click",function(){
       var items = $('.reg .select_gp .select_item');
       $.each(items,function(index,value){
            $(value).removeClass('highlight');
       })

       $(this).addClass("highlight");
       
       var na,sa,asia,eu;
       na = $('.reg .na');
       sa = $('.reg .sa');
       asia = $('.reg .asia');
       eu = $('.reg .eu');

       switch($(this).index()){
        case 0 :
          $.each(na,function(index,value){
            $(value).removeClass('disappear');
          })
          $.each(sa,function(index,value){
            $(value).removeClass('disappear');
          })
          $.each(asia,function(index,value){
            $(value).removeClass('disappear');
          })
          $.each(eu,function(index,value){
            $(value).removeClass('disappear');
          })
        break;
        case 1 :
          $.each(na,function(index,value){
            $(value).removeClass('disappear');
          })
          $.each(sa,function(index,value){
            $(value).addClass('disappear');
          })
          $.each(asia,function(index,value){
            $(value).addClass('disappear');
          })
          $.each(eu,function(index,value){
            $(value).addClass('disappear');
          })
        break;
        case 2 :
          $.each(na,function(index,value){
            $(value).addClass('disappear');
          })
          $.each(sa,function(index,value){
            $(value).removeClass('disappear');
          })
          $.each(asia,function(index,value){
            $(value).addClass('disappear');
          })
          $.each(eu,function(index,value){
            $(value).addClass('disappear');
          })
        break;
        case 3 :
          $.each(na,function(index,value){
            $(value).addClass('disappear');
          })
          $.each(sa,function(index,value){
            $(value).addClass('disappear');
          })
          $.each(asia,function(index,value){
            $(value).removeClass('disappear');
          })
          $.each(eu,function(index,value){
            $(value).addClass('disappear');
          })
        break;
        case 4 :
          $.each(na,function(index,value){
            $(value).addClass('disappear');
          })
          $.each(sa,function(index,value){
            $(value).addClass('disappear');
          })
          $.each(asia,function(index,value){
            $(value).addClass('disappear');
          })
          $.each(eu,function(index,value){
            $(value).removeClass('disappear');
          })
        break;
       }         
    });
});

function Page_Reveal(page){
  first = (page -1 > 1) ? (page - 1) : -1;
  last = (page +1 < 8) ? (page + 1) : -1;

  if(first != -1) $(".p"+first).show();

  if(last != -1) $(".p"+last).show();

  for(var i=1; i<=8; i++){
    if(i!=first && i!=last && i!=page) $(".p"+i).hide();
  }
}