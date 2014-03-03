<?php
/**
 * Template name: Mission page
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
                <div class="row left-row">
                    <div class="col-lg-5 col-md-6 col-sm-6 col-xs-6 text-center">
                        <img class="bigImage" src="<?php echo TU;?>/img/why.png" alt="">
                    </div>
                    <div class="col-lg-7 col-md-6 col-sm-6 col-xs-6 vertical-align">
                        <h1 class="link"><a href="#">We believe in: tech, sports</a></h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h3>Interview with Tomas Silny, Creative director and Web designer at PositiveZero</h3>
                        <h3>It isn't being a web designer. It requires extensive training in a multitude of disciplines. Through our interviews, we attempt to seek out those designers...</h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-5 col-xs-12">
                <div class="row right-row">
               
                    <div class="col-lg-4 col-md-5 col-sm-7 col-xs-6 text-center  vertical-align" >
                        <img src="<?php echo TU;?>/img/how.png" alt="">
                    </div>
                    <div class="col-lg-8 col-md-7 col-sm-5 col-xs-6 vertical-align">
                        <h3 class="link"><a href="#">We bring more interaction to sports events...</a></h3>
                    </div>
                </div>
                <div class="row right-row" style="margin-top: 20px;  ">
                    <div class="col-lg-4 col-md-5 col-sm-7 col-xs-6 text-center vertical-align">
                        <img src="<?php echo TU;?>/img/what.png" alt="">
                    </div>
                    <div class="col-lg-8 col-md-7 col-sm-5 col-xs-6 vertical-align">
                        <h3 class="link"><a href="#">We build new age application (ACR, real time state chat...)</a></h3>
                    </div>
                </div>
            </div>
        </div>
    </div> <!-- /container -->
    </div>
<?php get_footer(); ?>