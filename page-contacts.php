<?php
/**
 * Template name: Contacts page
 */
?>
<?php get_header(); ?>   
<?php the_post(); ?> 
    <div class="navbar-fixed-top myZindex_2"></div>
    <div class="navbar-fixed-top myZindex_1 mybackground"></div>

    <div class="myfixedContent">
    <div class="container myContent" >
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12" style="z-index:10;">
                <br>
                <h3 class="textbold m-b">We are open for any anquires and proposition</h3>
                <h3 class="linkteam textbold m-b">Feel free - you are friendly welcomed:</h3>
                
                <h3 class="thin textbold blockwidth">*Man 'was on his way to kill Cameron'</h3>
                <h3 class="thin textbold blockwidth">*How to beat the All Blacks(again)</h3>
                <h3 class="thin textbold blockwidth">*Trapped player asks Zidane for Help</h3>
                
            </div>
            <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12 map">
                 <img src="<?php echo TU; ?>/img/map.png" alt="" style="width: 100%;">
            </div>
        </div>       
    </div> <!-- /container -->
    </div>
<?php get_footer(); ?>