<?php
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: *");

	$output = null;
	$retval = null;

	//error_log ("\$_FILES: ".print_r ($_FILES, true));
	error_log (file_get_contents ("php://input"));
	$filename = $_FILES["UploadSample"]["name"];
	$location = "samples/".$filename;
	move_uploaded_file ($_FILES[0]["tmp_name"], $location)
?>
