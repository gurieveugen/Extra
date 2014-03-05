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
                        <?php 
                        $p          = getLastPost(); 
                        $exclude_id = -1;
                        if($p)
                        {
                            $exclude_id = $p->ID;
                            $date       = date('d.m.Y', strtotime($p->post_date));                            
                            ?>
                            <h3 class="linkteam thin name" style="margin-top: 30px;"><?php echo $p->post_title; ?></h3>
                            <h3 class="thin skill"><?php echo $date; ?></h3>
                            <h4><?php echo $p->post_content; ?></h4>
                            <?php
                        }
                        ?>
                    </div>                    
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-5 col-xs-12">
                <?php echo getShortPosts($exclude_id); ?>
            </div>
        </div>       
    </div> <!-- /container -->
    </div>
<?php get_footer(); ?>