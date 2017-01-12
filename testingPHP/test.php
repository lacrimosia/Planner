<?php
 

 header("Access-Control-Allow-Origin: *");
 header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents('php://input');
$request = json_decode($postdata);

$post = json_encode($request->data->course_title);

echo $post;

