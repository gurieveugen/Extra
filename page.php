<?php get_header(); ?>   
<?php the_post(); ?> 
    <div class="navbar-fixed-top myZindex_2"></div>
    <div class="navbar-fixed-top myZindex_1 mybackground"></div>

    <div class="myfixedContent">
    <div class="container myContent" >
        <div class="row">
            <h1><?php the_title(); ?></h1>
            <article class="text-white"><?php the_content(); ?></article>
        </div>       
    </div> <!-- /container -->
    </div>
<?php get_footer(); ?>