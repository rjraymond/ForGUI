export function GetPrediction (model, sample)
{
	if (model == null)
		return -1;
	if (sample == null)
		return -2;
	var get = new XMLHttpRequest ();
	get.open ("GET", "http://localhost:8000/GetPrediction.php", false);
	get.send ();
	return get.responseText;
}
