$(document).ready( function () {
  var TU = $('#template_url').attr('data-url');
    
    $("#on_off").on('click', function(){                                      
          //alert('ttt');
          var act = $("#sound").attr("active");
          if (act==1)
            {
                $("#sound").attr({
                    src: TU + "/img/sound_passive.png",
                    active:"0"
                });
                $(this).text('on');
            }
          if (act==0)
            {
                $("#sound").attr({
                    src: TU + "/img/sound_active.png",
                    active:"1"
                });
                $(this).text('off');
            }
    });
    
        //$('.vertical-align').each(function(){
//            $(this).css({
//            position:'relative',
            //left: ($(window).width() - $('.vertical-align').outerWidth())/2,
            //left:0,
//            top: ($('.left-row').height() - $(this).outerHeight())/2
//            });
            //$(this).height($('.left-row').height());
//        });
//        $('.right-row').each(function(){
//            $(this).height($('.left-row').height());           
//        });
    var t1 = [];
    $(window).resize(function(){
        $('.right-row').each(function(){
            $(this).height($('.left-row').height());
            //t1.push($(this).height())
            //alert( t1 );
        });
        $('.vertical-align').each(function(){
            $(this).css({
            position:'relative',
            //left: ($(window).width() - $('.vertical-align').outerWidth())/2,
            //left:0,
            top: ($('.left-row').height() - $(this).outerHeight())/2
            });
        });
  
    });
    $(window).resize();
    
    $(".team-hover").on('click', function()
    {                                      
          //alert($(".team-hover .vertical-align img").attr("src"));
          //alert($(this).attr("id"));
          var idx =  $(this).attr("id");
          var idx_src = $('#'+ idx + " .vertical-align img").attr("src");
          var idx_name = $('#'+ idx + " h3.name").text();
          var idx_skill = $('#'+ idx + " h3.skill").text();
          var idx_text = $('#'+ idx + "_text").html();
          
          var id3_src = $("#imgCircle3 .text-center img").attr("src");
          var id3_name = $("#imgCircle3 h1.name").text();
          var id3_skill = $("#imgCircle3 h3.skill").text();
          var id3_text = $("#imgCircle3_text").html();
          
          $( "#"+idx+" .vertical-align img" ).fadeOut( 1000, "linear", function() 
          {
              $(this).attr({src:id3_src});
              $("#"+idx+" h3.name").text(id3_name);
              $("#"+idx+" h3.skill").text(id3_skill);
              $(this).fadeIn(1000,function() {});
          });
          $( "#imgCircle3  .text-center img" ).fadeOut( 1000, function() 
          {
              $(this).attr({src:idx_src});
              $("#imgCircle3 h1.name").text(idx_name);
              $("#imgCircle3 h3.skill").text(idx_skill);
              $(this).fadeIn(700,function() 
              {                  
                  $('.vertical-align').each(function(){
                        $(this).css({
                        position:'relative',                    
                        top: ($('.left-row').height() - $(this).outerHeight())/2
                        });                    
                  });
              });                            
          });
          $( "#imgCircle3_text" ).slideUp( 1000, function() 
          {
              $(this).html(idx_text);              
              $("#"+idx+"_text").html(id3_text);
              $(this).slideDown(600,function() {});
          });          
    });
    
    
    
    $('#myTab a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
      var href = $(this).attr('href');
      if (href == '#home')
      {
        $('#lineArrow').css({'background-position':'right -180px'})    
      }
      if (href == '#profile')
      {
        $('#lineArrow').css({'background-position':'right -122px'})    
      }
      if (href == '#message')
      {
        $('#lineArrow').css({'background-position':'right -63px'})    
      }
      
    })

    
});




//var $act = $(".team-hover").attr("src");
//          alert(act);
          //if (act==1)
//            {
//                $("#sound").attr({
//                    src:"../img/sound_passive.png",
//                    active:"0"
//                });
//                $(this).text('on');
//            }
//          if (act==0)
//            {
//                $("#sound").attr({
//                    src:"../img/sound_active.png",
//                    active:"1"
//                });
//                $(this).text('off');
//            }