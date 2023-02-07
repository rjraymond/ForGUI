<?php
	header("Access-Control-Allow-Origin: *");

	$model = $_POST["model"];
	$sample = $_FILES["sample"]["name"];
	$DEST = "tmp.file";
	error_log ("model: $model");
	error_log ("sample: $sample");

	move_uploaded_file ($_FILES["sample"]["tmp_name"], $DEST);

	$output = null;
	$retval = null;
	exec("./predict --model $model $DEST", $output, $retval);
	echo ($retval);
?>
