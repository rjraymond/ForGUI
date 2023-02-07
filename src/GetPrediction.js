export function GetPrediction (model, sample)
{
	if (model == null)
		return -1;
	if (sample == null)
		return -2;
	var get = new XMLHttpRequest ();
	get.open ("GET", "http://" +
										process.env.REACT_APP_URL_PHP +
										process.env.REACT_APP_PWD.substring (process.env.REACT_APP_PHP.length) +
										"/GetPrediction.php", false);
	get.send ();
	return get.responseText;
}
