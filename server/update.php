<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// get the data from the form
$dataFromForm = file_get_contents("php://input");

// decode it
$data = json_decode($dataFromForm);

// encode the settings into json
$json = json_encode($data);
// $title = json_encode($data->value);
// write this updated data into a file
file_put_contents('../assets/data.json', $json);