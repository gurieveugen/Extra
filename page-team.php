<?php
/**
 * Template name: Team page
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
                        <img class="bigImage" src="<?php echo TU;?>/img/AYaraliev.png" alt="">
                    </div>
                    <div class="col-lg-7 col-md-6 col-sm-6 col-xs-6 vertical-align">
                        <h1 class="linkteam name">Albert Yaraliev</h1>
                        <h3 class="thin skill" style="text-transform: uppercase;">ceo</h3>
                    </div>
                </div>
                <div class="row">
                    <div id="imgCircle3_text" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h3>333Interview with Tomas Silny, Creative director and Web designer at PositiveZero</h3>
                        <h3>It isn't being a web designer. It requires extensive training in a multitude of disciplines. Through our interviews, we attempt to seek out those designers...</h3>
                    </div>
                    <div id="imgCircle2_text" style="display: none;">
                        <h3>222Interview with Tomas Silny, Creative director and Web designer at PositiveZero</h3>
                        <h3>It isn't being a web designer. It requires extensive training in a multitude of disciplines. Through our interviews, we attempt to seek out those designers...</h3>
                    </div>
                    <div id="imgCircle1_text" style="display: none;">
                        <h3>111Interview with Tomas Silny, Creative director and Web designer at PositiveZero</h3>
                        <h3>It isn't being a web designer. It requires extensive training in a multitude of disciplines. Through our interviews, we attempt to seek out those designers...</h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-5 col-xs-12">
                <div id="imgCircle1" class="row right-row team-hover" >
                    <div class="col-lg-4 col-md-5 col-sm-7 col-xs-6 text-center  vertical-align" >
                        <img class="smallImage" src="<?php echo TU;?>/img/VSazanskiy.png" alt="">
                    </div>
                    <div class="col-lg-8 col-md-7 col-sm-5 col-xs-6 vertical-align">
                        <h3 class="linkteam thin name">Valeriy Saranskiy</h3>
                        <h3 class="thin skill">confounder</h3>
                    </div>
                </div>
                <div id="imgCircle2" class="row right-row team-hover" style="margin-top: 20px;">
                    <div class="col-lg-4 col-md-5 col-sm-7 col-xs-6 text-center vertical-align">
                        <img class="smallImage" src="<?php echo TU;?>/img/VGryadil.png" alt="">
                    </div>
                    <div class="col-lg-8 col-md-7 col-sm-5 col-xs-6 vertical-align">
                        <h3 class="linkteam thin name">Vitaliy Gryadil</h3>
                        <h3 class="thin skill">designer</h3>
                    </div>
                </div>
            </div>
        </div>
    </div> <!-- /container -->
    </div>
<?php get_footer(); ?>