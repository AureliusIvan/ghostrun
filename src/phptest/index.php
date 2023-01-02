<?php

$dbhost = "sql104.epizy.com";
$dbusername = "epiz_33301444"; 
// $dbname = "";
$dbpassword = "j40FU9dScPU";
$con = mysqli_connect($dbhost, $dbusername,$dbpassword);
mysqli_select_db($con, 'epiz_33301444_Userdata');
$sql = "SELECT * FROM data";
$json_array = array();
echo json_encode($json_array);
// while()
 ?>

<?php
$dbhost = "localhost";
$dbusername = "root"; 
// $dbname = "";
$dbpassword = "";
$con = mysqli_connect($dbhost, $dbusername,$dbpassword);
mysqli_select_db($con, 'Leaderboard');
$sql = "SELECT * FROM data";
$json_array = array();
echo json_encode($json_array);
// while()
 ?>