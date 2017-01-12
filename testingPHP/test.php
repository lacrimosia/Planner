<?php

// gets the connection to db info here
// $dbc is connection string
require('dbc.php');


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$title = json_encode($request->course_title);

//echo $title;



$query = "CREATE TABLE IF NOT EXISTS names (id INT(5) UNSIGNED AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(50) NOT NULL, reg_date TIMESTAMP)";

$insertName = "INSERT INTO names (firstname) VALUES ($title)";

// Perform queries
if (mysqli_query($dbc, $query) && mysqli_query($dbc, $insertName)) {
    echo "Successful";
} else {
    echo "Error creating table: " . mysqli_error($dbc);
}


mysqli_close($dbc);



