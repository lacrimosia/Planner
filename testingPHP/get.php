<?php

// gets the connection to db info here
// $dbc is connection string
require('dbc.php');


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$query = "SELECT title FROM plannertitle";
$result = mysqli_query($dbc, $query);

if (mysqli_query($dbc, $query)) {
   // echo "Successful";
    while($row = mysqli_fetch_assoc($result)) {
        echo json_encode($row['title']);
    }
} else {
    echo "Error getting name: " . mysqli_error($dbc);
}

//$json = file_get_contents("php://input");
//echo json_encode($query);

