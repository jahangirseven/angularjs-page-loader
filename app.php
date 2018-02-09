<?php
$conn = mysqli_connect("localhost","root","lenovo123","angular") or die("DB Connection error ");

$query = mysqli_query($conn,"SELECT * FROM posts");
$data_array = [];
while($fetch = mysqli_fetch_array($query)){
  $data_array[] = $fetch;
 }

 print json_encode($data_array);
?>