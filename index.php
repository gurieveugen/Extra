<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="../../docs-assets/ico/favicon.png">

    <title>Fixed Top Navbar Example for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link href="../css/bootstrap.css" rel="stylesheet">
    <!--<link href="../css/bootstrap-theme.css" rel="stylesheet">-->
    <link href="../css/my-bootstrap-theme.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <!--<link href="navbar-fixed-top.css" rel="stylesheet">-->

    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]><script src="../../docs-assets/js/ie8-responsive-file-warning.js"></script><![endif]-->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

    <!-- Fixed navbar -->
    <div class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.php"><img src="img/logo.png"><!--Project name--></a>
        </div>
        <div class="navbar-collapse collapse">
          <!--<ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li class="dropdown-header">Nav header</li>
                <li><a href="#">Separated link</a></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>-->
          <ul class="nav navbar-nav navbar-right">
          <?php
              $size2 = @GetImageSize('img/FCBayernM_2013.swf');
              $size2 = (@intval($size2[0]))."x".(@intval($size2[1]));
          ?>            
            <li class="active"><a href="index.php">about project</a></li>
            <li><a href="mission.php">mission</a></li>
            <li><a href="team.php">team</a></li>
            <li><a href="we_hire.php">we hire</a></li>
            <li><a href="contacts.php">contacts</a></li>
            <li><a href="blogs.php">blogs</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>
    
    <div class="navbar-fixed-top myZindex_2"></div>
    <div class="navbar-fixed-top myZindex_1 mybackground_swf">
        <!--<embed src="/img/FCBayernM_2013.swf" width="1500px" height="845px" wmode="transparent" />-->
        <div id="myswf">
        <embed wmode="transparent"  quality="high" src="/img/FCBayernM_2013.swf" width="100%" height="100%" align="center"  />
        </div>
    </div>

    <div class="myfixedContent">
    <div class="container myContent">
        <div id="prePage"></div>
        <div id="PageSCRL_1" class="row">

            <div class="col-md-9 col-md-offset-3 col-sm-12 col-xs-12" style="background-color: aqua; margin-top: 120px;" >
                <div id="pixel" style="width: 1px; height: 1px;background-color: transparent;"></div>
                <!--<div class="flipbox-container">-->
                    <div class="red-white-r pull-right" >You're in the midst of events</div>
                <!--</div> -->
                <div id="red-white" class="red-white pull-right" >You're in the midst of events</div>
                <div id="white-red" class="white-red pull-right" >All the most interesting highlights!</div>
                <div id="black-white" class="black-white pull-right" >On the screen of your phone and tablet</div>
            </div>
            <div class="col-md-9 col-md-offset-3 col-sm-12 col-xs-12 text-center" style="background-color: aqua;margin-top: 50px;" >
                <div id="krug_scroll"></div>
            </div>
            
        </div>
        <div id="PageSCRL_2" class="row" >
            
            <div id="iphone5" class=" col-lg-offset-1 col-md-offset-1 col-sm-offset-1 text-left"  >
                <img src="/img/iphone5.png" alt="">
            </div>
            <div id="volna" class="col-lg-offset-3 text-left"  >
                <img src="/img/volna.gif" alt="">
            </div>
            <div id="player3423" class="col-lg-offset-7 col-md-offset-7 col-sm-offset-7 text-right" >
                <img src="/img/player3423.png" alt="" width="100%" style="position:relative;" >
            </div>
            
            <div id="tv-front" class="col-lg-6 col-lg-offset-5 col-md-6 col-md-offset-6 col-sm-6 col-sm-offset-6  text-right" >
                <img src="/img/tv-front.png" alt="" width="100%">
            </div>
            
            <!--<div id="scr_2" class="col-lg-9 col-lg-offset-3 text-center" style="display: none; background-color: white;margin-top: 50px; height: 500px;" >Second</div>-->  
        </div>
        <div style="height: 1000px;"></div>
    </div>
    </div>
    

    <!--<div class="navbar-fixed-bottom myFooter" style="background-color: red;">-->
    <div class="navbar-fixed-bottom myFooter">
        <!--<div class="container" style="background-color: black;">-->
        <div class="container">
            <div class="row">
                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-8"><h2>EXTRA &copy; 2013 Beautiful video replays and statistics in real time</h2></div>
<!--                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-2 text-right" style="background-color: blue;">                    
                    <h2 style="background-color: aquamarine;">
                        <img id="sound" src="../img/sound_active.png" active="1" alt="">
                        <a id="on_off" style="cursor: pointer;" >off</a>
                    </h2>
                </div>
                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center" style="background-color: pink;"><h2><a href="#">rus<a></h2></div>
                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-left" style="background-color: yellow;"><h2><a href="#" class="active">eng<a></h2></div>-->                
                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-2 text-right">                    
                    <h2>
                        <img id="sound" src="../img/sound_active.png" active="1" alt="">
                        <a id="on_off" style="cursor: pointer;" >off</a>
                    </h2>
                </div>
                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center"><h2><a href="#">rus</a></h2></div>
                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-left"><h2><a href="#" class="active">eng</a></h2></div>
            </div>
        </div>
    </div>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/main_page.js"></script>
    
    <script src="../js/jquery.flippy.js"></script>
    
    <script src="../js/MyFlippy.js"></script>
  </body>
</html>