$(document).ready( function () {
    var TU = $('#template_url').attr('data-url');
    //alert($(window).height() + '_' + $(window).width());
    $("#on_off").on('click', function(){
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
    var LP3_bool = true;
    var LP4_bool = true;
    if( $('.myfixedContent').scrollTop() < 100) 
        {
            $('.myfixedContent').unbind('scroll');
            loadPage_1();
        }
    function loadPage_1()
    {        
        //console.log("enter L1" );
//        if (LP2_bool)
//        {
//            $('.myfixedContent').scrollTop(0);        
//        }
        
        LP1_bool = false;
        LP2_bool = true;
        $('#prePage').height(0);
        $('.myfixedContent').scrollTop(0);
        $('#PageSCRL_2').stop(true,true).hide();
            $('#iphone5').stop(true,true).hide();
            $('#player3423').stop(true,true).hide();
            $('#search').stop(true,true).hide();
            $('#volna').stop(true,true).hide();
            $('#Reflector').stop(true,true).hide();        
            $('#tv-front').stop(true,true).hide();
        
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
            $("#red-white-m").flippy({
                color_target: "#F1533C",
                duration: "100",
                direction: 'bottom',
                verso: '<span>Youre in the midst of events!!!<span>',
                depth: 5,
             });
        });
        
        //$('.myfixedContent').bind('scroll', bindScroll);
    }
    
    function loadPage_2()
    {
        if (LP3_bool)
        {    
            $('.myfixedContent').scrollTop(300);
            $('#prePage').height(300);        
        }
        else
        {
            $('#prePage').height($('.myfixedContent').scrollTop()-50);
        }
        LP1_bool = true;
        LP2_bool = false;
        LP3_bool = true;
//        $('#prePage').height(300);
//        $('.myfixedContent').scrollTop(300);
        $('#PageSCRL_1').stop(true,true).hide();
            $('#red-white').attr({class:'red-white pull-right'});
            $('#red-white').stop(true,true).hide();
            $('#white-red').attr({class:'white-red pull-right'});
            $('#white-red').stop(true,true).hide();
            $('#black-white').attr({class:'black-white pull-right'});
            $('#black-white').stop(true,true).hide();
            $('#krug_scroll').stop(true,true).hide();
            $('#pixel').stop(true,true);
            $("#red-white-m").stop(true,true).hide();
        
        $('#PageSCRL_3').stop(true,true).hide();
        $('#menuR').stop(true,true).hide();
            $('#menuR_1').attr({class:'red-white pull-right'});
            $('#menuR_1').stop(true,true).hide();
            $('#menuR_2').attr({class:'red-white pull-right'});
            $('#menuR_2').stop(true,true).hide();
            $('#menuR_3').attr({class:'red-white pull-right'});
            $('#menuR_3').stop(true,true).hide();
            $('#menuR_4').attr({class:'red-white pull-right'});
            $('#menuR_4').stop(true,true).hide();
            $('#menuR_5').attr({class:'red-white pull-right'});
            $('#menuR_5').stop(true,true).hide();
            $('#menuR_6').attr({class:'red-white pull-right'});
            $('#menuR_6').stop(true,true).hide();
            $("#red-white-r").stop(true,true).hide();
            $('#Reflector').stop(true,true).hide();
            $('#pixelR').stop(true,true).hide();
        
        $('#PageSCRL_2').show().fadeTo(500,1,function()
        {
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
            $('#search').fadeTo(2000,1).delay(4000).fadeOut(1500,function(){
                if ($(window).width()>768){$('#Reflector').show();}
                //$('#Reflector').show();
            });
            $('#volna').fadeTo(2000,1).delay(6000).fadeOut(1500);
            $('#tv-front').fadeTo(10,1).delay(8000).fadeOut(1500);
        });
        
        //$('.myfixedContent').bind('scroll', bindScroll);
        
    }
    
    function loadPage_3()
    {
        if (LP4_bool)
        {   
            $('.myfixedContent').scrollTop(600);
            $('#prePage').height(600);        
        }
        else
        {
            $('#prePage').height($('.myfixedContent').scrollTop()-50);
        }
        LP4_bool = true;
        LP3_bool = false;
        LP2_bool = true;
        //$('#prePage').height(600);
//        $('.myfixedContent').scrollTop(600);
        $('#PageSCRL_2').stop(true,true).hide();
            $('#player3423').stop(true,true).hide();
            $('#search').stop(true,true).hide();
            $('#volna').stop(true,true).hide();
            $('#tv-front').stop(true,true).hide();
        $('#PageSCRL_4').stop(true,true).hide();
            $('#subscribe').stop(true,true).hide();
            $('#subscribe_1').attr({class:'red-whiteS pull-right'});
            $('#subscribe_1').stop(true,true).hide();
            $("#red-white-s").stop(true,true).hide();            
            $('#pixelS').stop(true,true).hide();
            $('#footerSlideImg').fadeTo(100,0).stop(true,true).hide();
        
        $('#PageSCRL_3').show().fadeTo(100,1,function()
        {
            $('#Reflector').show();
            $('#menuR').show(function()
            {
                $('#pixelR').delay(500).fadeOut(10,function(){
                    $('#menuR_1').attr({class:'stylie red-white pull-right'});
                    $('#menuR_1').show().delay(1500).fadeTo(1,1,function(){
                        $('#menuR_2').attr({class:'stylie white-red pull-right'});
                        $('#menuR_2').show().delay(1500).fadeTo(1,1,function(){
                            $('#menuR_3').attr({class:'stylie red-white pull-right'});
                            $('#menuR_3').show().delay(1500).fadeTo(1,1,function(){
                                $('#menuR_4').attr({class:'stylie white-red pull-right'});
                                $('#menuR_4').show().delay(1500).fadeTo(1,1,function(){
                                    $('#menuR_5').attr({class:'stylie red-white pull-right'});
                                    $('#menuR_5').show().delay(1500).fadeTo(1,1,function(){
                                        $('#menuR_6').attr({class:'stylie white-red pull-right'});
                                        $('#menuR_6').show().delay(1500).fadeTo(1,1,function(){
                                            
                                        });
                                    });
                                });    
                            });
                        });
                    });
                });
                $("#red-white-r").flippy({
                    color_target: "#F1533C",
                    duration: "100",
                    direction: 'bottom',
                    verso: '<span>Youre in the midst of events!!!<span>',
                    depth: 5,
                });
            });
        });
        
        //$('.myfixedContent').bind('scroll', bindScroll);
        
    }
    
    function loadPage_4()
    {
        LP3_bool = true;
        LP4_bool = false;
        $('#prePage').height(900);
        $('.myfixedContent').scrollTop(900);
        $('#PageSCRL_3').stop(true,true).hide();
        $('#menuR').stop(true,true).hide();
            $('#menuR').stop(true,true).hide();
            $('#menuR_1').attr({class:'red-white pull-right'});
            $('#menuR_1').stop(true,true).hide();
            $('#menuR_2').attr({class:'red-white pull-right'});
            $('#menuR_2').stop(true,true).hide();
            $('#menuR_3').attr({class:'red-white pull-right'});
            $('#menuR_3').stop(true,true).hide();
            $('#menuR_4').attr({class:'red-white pull-right'});
            $('#menuR_4').stop(true,true).hide();
            $('#menuR_5').attr({class:'red-white pull-right'});
            $('#menuR_5').stop(true,true).hide();
            $('#menuR_6').attr({class:'red-white pull-right'});
            $('#menuR_6').stop(true,true).hide();
            $("#red-white-r").stop(true,true).hide();
            $('#pixelR').stop(true,true).hide();
        
        $('#PageSCRL_4').show().fadeTo(500,1,function(){
            $('#iphone5').show();
            $('#Reflector').show();
            $('#subscribe').show(function(){
                        $('#pixelS').delay(1000).fadeOut(10,function(){
                            $('#subscribe_1').attr({class:'stylie red-whiteS pull-right'});
                            $('#subscribe_1').show();
                            $("#red-white-s").flippy({
                                color_target: "#F1533C",
                                duration: "1000",
                                direction: 'bottom',
                                verso: '<span>Youre in the midst of events!!!<span>',
                                depth: 5,
                            });
                        });
            });            
            $('#footerSlideImg').fadeTo(2000,1,function(){
                $(this).animate({left: '-=15'}, 2000, function() 
                {
                    $(this).animate({left: '+=30'},2000,function(){
                        $(this).animate({left: '-=15'},2000);
                    });                                                     
                });
            });
        });
        
        //$('.myfixedContent').bind('scroll', bindScroll);
        
    }

    function bindScroll()
    {
        //console.log("Top1=%s", $('.myfixedContent').scrollTop() );
        if( $('.myfixedContent').scrollTop() < 300 && LP1_bool ) 
        {
            //console.log("Top1=%s", $('.myfixedContent').scrollTop() );
            //$('.myfixedContent').unbind('scroll');
            loadPage_1();
        }
        if( $('.myfixedContent').scrollTop() >= 300 && $('.myfixedContent').scrollTop() < 600 && LP2_bool) 
        {
            //console.log("Top2=%s", $('.myfixedContent').scrollTop() );
            //$('.myfixedContent').unbind('scroll');
            loadPage_2();            
        }
        if( $('.myfixedContent').scrollTop() >= 600 && $('.myfixedContent').scrollTop() < 900 && LP3_bool) 
        {
            //$('.myfixedContent').unbind('scroll');
            loadPage_3();
        }
        if( $('.myfixedContent').scrollTop() >= 900  && LP4_bool) 
        {
            //$('.myfixedContent').unbind('scroll');
            loadPage_4();
        }
    }

    //$(window).scroll(bindScroll);
    //$('.myfixedContent').bind('scroll', bindScroll);
    
    //var myfixedContentH = $('#scr_1').height() + 500;
    //$('#scr_1').height(myfixedContentH);
    //alert($('#scr_1').height());
    var ms=90;
    function throttle(ms, callback) {
    var timer, lastCall=0;

    return function() {
        var now = new Date().getTime(),
            diff = now - lastCall;
        console.log(diff, now, lastCall);
        if (diff >= ms) {
            console.log("Call callback!");
            lastCall = now;
            callback.apply(this, arguments);
        }
    };
}
    
    $('.myfixedContent').scroll( 
        throttle(ms , function() {           
        bindScroll();
        }) 
    );
    
});




