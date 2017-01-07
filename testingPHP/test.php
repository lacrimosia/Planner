<?php
 

 //header("Access-Control-Allow-Origin: *");
 //header("Content-Type: application/json; charset=UTF-8");

//$postdata = file_get_contents("php://input");
//$request = json_decode($postdata, true);

$data = json_decode(file_get_contents("php://input"));
var_dump($data->test);