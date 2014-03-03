$(document).ready( function () {
    
    //alert($(window).height() + '_' + $(window).width());
    $("#on_off").on('click', function(){
          var act = $("#sound").attr("active");
          if (act==1)
            {
                $("#sound").attr({
                    src:"../img/sound_passive.png",
                    active:"0"
                });
                $(this).text('on');
            }
          if (act==0)
            {
                $("#sound").attr({
                    src:"../img/sound_active.png",
                    active:"1"
                });
                $(this).text('off');
            }
          
          var width = $('.myZindex_1').width();
          var height = $('.myZindex_1').height();
          console.log('W = %s H = %s', width , height);
          //alert(width+" "+height);
          
    });    

    var t1 = [];
    $(window).resize(function(){
        
//        var widthS = $('.mybackground_swf').width();
//        var heightS = $('.mybackground_swf').height();
        
        var widthS = $(this).width();
        var heightS = $(this).height();
        //alert(widthS+" "+heightS+" werwerwerwer ");
        
        var swf_width = widthS;
        var swf_height = (widthS/1.778).toFixed(0);
        if (heightS < swf_height)
        {
            var topS = -((swf_height-heightS)/2).toFixed(0);
            var topS = topS + 'px';
            $('.mybackground_swf').css({'top':topS});
        }       
        
        //console.log('W = %s H = %s', swf_width , swf_height);
        
        if (heightS > swf_height)
        {
            var swf_width = (heightS*1.778).toFixed(0);
            var swf_height = heightS;
            var leftS = -((swf_width-widthS)/2).toFixed(0);
            var leftS = leftS + 'px';            
            $('.mybackground_swf').css({'left':leftS});            
            //console.log('W = %s H = %s R = %s ww = %s hh = %s', swf_width , swf_height, left, widthS, heightS);
        }
        $('.myswf').css({'width':swf_width,'height':swf_height});
        $('.mybackground_swf embed').attr({'width':swf_width,'height':swf_height});
  
    });
    $(window).resize();
    

    var LP1_bool = true;
    var LP2_bool = true;
    if( $('.myfixedContent').scrollTop() < 20) 
        {
            $('.myfixedContent').unbind('scroll');
            loadPage_1();
        }
    function loadPage_1()
    {
        console.log("enter L1" );
        LP1_bool = false;
        LP2_bool = true;
        $('#prePage').height(0);
        $('#PageSCRL_2').hide();
        $('#PageSCRL_1').show();        
            
        $('#pixel').delay(1000).fadeOut(10,function(){
            $('#red-white').attr({class:'stylie red-white pull-right'});
            $('#red-white').show().delay(1500).fadeTo(1,1,function(){
                $('#white-red').attr({class:'stylie white-red pull-right'});
                $('#white-red').show().delay(1500).fadeTo(1,1,function(){
                    $('#black-white').attr({class:'stylie black-white pull-right'});
                    $('#black-white').show().delay(1500).fadeTo(1,1,function(){
                        $('#krug_scroll').fadeTo(1000,1,function(){});
                    });
                });
            });
        });
        
        $('.myfixedContent').bind('scroll', bindScroll);    
        /*$('#pixel').delay(1000).fadeOut(10,function(){
            $('#red-white').attr({class:'stylie red-white pull-right'});
            $('#red-white').show();            
        }).delay(1500).fadeOut(10,function(){
            $('#white-red').attr({class:'stylie white-red pull-right'});
            $('#white-red').show();
        }).delay(1500).fadeOut(10,function(){
            $('#black-white').attr({class:'stylie black-white pull-right'});
            $('#black-white').show();
        }).delay(1500).fadeOut(10,function(){
            $('#krug_scroll').fadeTo(1000,1,function(){});
        });*/
    }
    
    function loadPage_2()
    {
        LP1_bool = true;
        LP2_bool = false;
        $('#prePage').height(20);
        $('.myfixedContent').scrollTop(20);
        $('#PageSCRL_1').stop().hide();
            $('#red-white').attr({class:'red-white pull-right'});
            $('#red-white').stop(true,true).hide();
            $('#white-red').attr({class:'white-red pull-right'});
            $('#white-red').stop(true,true).hide();
            $('#black-white').attr({class:'black-white pull-right'});
            $('#black-white').stop(true,true).hide();
            $('#krug_scroll').stop(true,true).hide();
            $('#pixel').stop(true,true);
                    
        $('#PageSCRL_2').show().fadeTo(500,1,function(){
            $('#player3423').fadeTo(2000,1,function(){
                $('#player3423').animate({
                left: '+=50',
                }, 6000, function() {
                    $(this).fadeOut(1500,function(){
                        $(this).attr({style:'left:0px;'});    
                    });                                   
                });                
            });

            $('#iphone5').fadeTo(2000,1);
            $('#volna').fadeTo(2000,1).delay(6000).fadeOut(1500);
            $('#tv-front').fadeTo(10,1).delay(8000).fadeOut(1500);
        });
          
        $('.myfixedContent').bind('scroll', bindScroll);
    }

    function bindScroll()
    {
        //alert($('.myfixedContent').scrollTop() + '_' + $('.myfixedContent').height() );
        if( $('.myfixedContent').scrollTop() < 20 && LP1_bool ) 
        {
            console.log("Top1=%s", $('.myfixedContent').scrollTop() );
            $('.myfixedContent').unbind('scroll');
            loadPage_1();
        }
        if( $('.myfixedContent').scrollTop() > 20 && LP2_bool) 
        {
            console.log("Top2=%s", $('.myfixedContent').scrollTop() );
            $('.myfixedContent').unbind('scroll');
            loadPage_2();
            //alert($('.myfixedContent').scrollTop() + '_' + $('.myfixedContent').height() );
        }
        
//       if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
//           
//           $(window).unbind('scroll');
//           loadMore();
//       }
    }

    //$(window).scroll(bindScroll);
    //$('.myfixedContent').bind('scroll', bindScroll);
    
    //var myfixedContentH = $('#scr_1').height() + 500;
    //$('#scr_1').height(myfixedContentH);
    //alert($('#scr_1').height());
    
    
    $('.myfixedContent').scroll(function() {   
        //alert('tt');
        bindScroll();
    });
    
//    $(window).scroll(function() {   
//        alert('tt');
//        bindScroll();
//    });
    
    
});




