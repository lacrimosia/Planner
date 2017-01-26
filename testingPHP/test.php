<?php

// gets the connection to db info here
// $dbc is connection string
require('dbc.php');


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$title = json_encode($request->course_title);

// echo $title;

// create table names if does not exist
$query = "CREATE TABLE IF NOT EXISTS plannerTitle (id INT(5) UNSIGNED AUTO_INCREMENT PRIMARY KEY, title VARCHAR(50) NOT NULL, date DATETIME)";

// insert the names into the the table
$insertName = "UPDATE plannerTitle SET title=$title WHERE id=6";

// Perform queries
// check if query was successful
// if not, trigger error
if (mysqli_query($dbc, $query) && mysqli_query($dbc, $insertName)) {
    echo "Successful";
} else {
    echo "Error creating table: " . mysqli_error($dbc);
}


mysqli_close($dbc);



