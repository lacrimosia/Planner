<?php

$dbc = mysqli_connect("localhost", "root", "", "test");

mysqli_set_charset($dbc, 'utf8');

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
