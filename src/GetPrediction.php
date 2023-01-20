<?php
	header("Access-Control-Allow-Origin: *");
	$output = null;
	$retval = null;
	exec("python GetPrediction.py", $output, $retval);
	echo ($retval);
?>
