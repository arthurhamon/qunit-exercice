<?php 
$name = $_GET["name"];

if($name === "Antonio"){
	echo json_encode(array('username' => $name));
}else {
	header("HTTP/1.0 404 Not Found");
}

?>