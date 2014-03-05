 	<div class="navbar-fixed-bottom myFooter">       
 	    <div class="container">
 	        <div class="row">
 	            <div class="col-lg-9 col-md-9 col-sm-9 col-xs-8"><h2>EXTRA &copy; 2013 Beautiful video replays and statistics in real time</h2></div>
 	            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-2 text-right">                    
 	                <h2>
 	                    <img id="sound" src="<?php echo TU; ?>/img/sound_active.png" active="1" alt="">
 	                    <a id="on_off" style="cursor: pointer;" >off</a>
 	                </h2>
 	            </div>
 	            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center"><h2><a href="/ru" class="<?php echo active((EXTRA_LANG == 'RU')); ?>">rus</a></h2></div>
 	            <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-left"><h2><a href="/en" class="<?php echo active((EXTRA_LANG == 'EN')); ?>">eng</a></h2></div>
 	        </div>
 	    </div>
 	</div>
 	<!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="<?php echo TU; ?>/js/bootstrap.min.js"></script>
   
    
    <script src="<?php echo TU; ?>/js/jquery.flippy.js"></script>
    
    <script src="<?php echo TU; ?>/js/MyFlippy.js"></script>
     <script src="<?php echo TU; ?>/js/MyScript.js"></script>
    <?php wp_footer(); ?>
  </body>
</html>