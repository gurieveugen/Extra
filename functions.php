<?php

define('TU', get_bloginfo('template_url'));
define('EXTRA_LANG', 'RU');

function getNavMenu($before_block = '<ul class="nav navbar-nav navbar-right">', $after_block = '</ul>', $before_item = '<li %s>', $after_item = '</li>')
{
	$args  = array(
		'posts_per_page'   => 500,
		'offset'           => 0,
		'orderby'          => 'post_date',
		'order'            => 'ASC',
		'post_type'        => 'page',
		'post_status'      => 'publish',
		'suppress_filters' => true ); 
	$items = get_posts($args);
	$str   = '';

	foreach ($items as $key => $value) 
	{
		$str.= sprintf($before_item, 'class="'.active(is_page($value->ID)).'"').'<a href="'.get_permalink($value->ID).'" title="'.$value->post_title.'">'.$value->post_title.'</a>'.$after_item;
	}

	return $before_block.$str.$after_block;
}

function getShortPosts($exclude = -1)
{
	$args  = array(
		'posts_per_page'   => get_option('posts_per_page'),
		'offset'           => 0,
		'exclude'          => $exclude,
		'orderby'          => 'post_date',
		'order'            => 'DESC',
		'post_type'        => 'post',
		'post_status'      => 'publish',
		'suppress_filters' => true ); 
	$items = get_posts($args);
	$str   = '';

	foreach ($items as $key => $value) 
	{
		$date = date('d.m.Y', strtotime($value->post_date));
		$str .= '<h4 class="link"><a href="'.get_permalink($value->ID).'">'.$value->post_title.'</a><span style="margin-left: 20px;">'.$date.'</span></h4>';
	}

	return $str; 
}

function getLastPost()
{
	$args  = array(
		'posts_per_page'   => 1,
		'offset'           => 0,
		'orderby'          => 'post_date',
		'order'            => 'DESC',
		'post_type'        => 'post',
		'post_status'      => 'publish',
		'suppress_filters' => true ); 
	$items = get_posts($args);
	if($items) return $items[0];
	return NULL;
}

/**
 * Get active css class
 * @param  boolean $bool
 * @return string
 */
function active($bool)
{
	if($bool) return 'active';
	return '';
}