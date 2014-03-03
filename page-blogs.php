<?php
/**
 * Template name: Blogs page
 */
?>
<?php get_header(); ?>   
<?php the_post(); ?> 
    <div class="navbar-fixed-top myZindex_2"></div>
    <div class="navbar-fixed-top myZindex_1 mybackground"></div>

    <div class="myfixedContent">
    <div class="container myContent" >
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-7 col-xs-12">
                <div id="imgCircle3" class="row left-row">
                    <div class="col-lg-5 col-md-6 col-sm-6 col-xs-6 text-center">
                        <img class="smallImage" src="<?php echo TU; ?>/img/AYaraliev.png" alt="">
                    </div>
                    <div class="col-lg-7 col-md-6 col-sm-6 col-xs-6 vertical-align">
                        <h1 class="linkteam name">Albert Yaraliev</h1>
                        <h3 class="thin skill" style="text-transform: uppercase;">ceo</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h3 class="linkteam thin name" style="margin-top: 30px;">England are ready to banish pain of Bloemfontein</h3>
                        <h3 class="thin skill">21.12.2013</h3>
                        <h4>333Interview with Tomas Silny, Creative director and Web designer at PositiveZero</h4>
                        <h4>It isn't being a web designer. It requires extensive training in a multitude of disciplines. Through our interviews, we attempt to seek out those designers...</h4>
                    </div>                    
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-5 col-xs-12">
                <?php echo getShortPosts(); ?>
            </div>
        </div>       
    </div> <!-- /container -->
    </div>
<?php get_footer(); ?>