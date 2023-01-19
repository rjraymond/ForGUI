export function GetPrediction (model, sample)
{
	if (model == null)
		return -1;
	if (sample == null)
		return -2;
	return Math.round (Math.random() * 100);
}
