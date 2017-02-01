<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// get the data from the form
$dataFromAdmin = file_get_contents("php://input");

// decode it
$data = json_decode($dataFromAdmin);

//$file = "../assets/live.json";  // server version
$file = "../src/assets/live.json"; // localhost version

$fp = fopen($file, 'w') or die("cannot open file");
$json = json_encode($data); // encode the settings into json
fwrite($fp, $json) or die("Cannot write to file");
fclose($fp);
// write this updated data into a file
// file_put_contents('../assets/live.json', $json);




