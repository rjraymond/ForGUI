import React from "react";
import ReactDOM from "react-dom/client";
import { GetModelList } from "./GetModelList.js";

export class Application extends React.Component {
  constructor (props)
	{
		super (props);
		this.state = {}
		this.state.models = GetModelList ();
		this.state.model = this.state.models[0];
		this.state.prediction_in_progress = false;
		this.state.prediction = -1;
	}
	
	Submit = (event) => 
	{
		event.preventDefault ();	/*	Must be *first* to prevent automatic refresh	*/
		
		var model = document.getElementById ("model").value;
		var sample = document.getElementById ("sample").files[0];
		var post = new XMLHttpRequest ();
    var data = new FormData ();

		if (sample == null) {
			console.log ("No sample uploaded!");
			return; }
		
		this.setState ({prediction_in_progress: true});	/* Start our spinner */
		
		data.append ("sample", sample);
		data.append ("model", model);
		post.open ("POST", "http://" +
												process.env.REACT_APP_URL_PHP +
												process.env.REACT_APP_PWD.substring (process.env.REACT_APP_PHP.length) +
											 "/GetPrediction.php", true);
		post.onload = (e) => {
			console.log (post.responseText);
			this.setState ({prediction_in_progress: false,
											prediction: post.responseText});
		}
		console.log ("Launching with sample: " + sample.name + " and model: " + model);
		post.send (data);
	}
	render () {
    return (
      <div>
				<form onSubmit = {this.Submit} style = {{margin: "auto", width: "max-content"}}>
					<div>
						<label htmlFor = "UploadSample"> Upload Sample: </label>
						<input type = "file" id = "sample" name = "sample"/>
					</div><>
					<label htmlFor = "model"> Select Model: </label>
      		<select id = "model">
      			{this.state.models.sort ().map ((name, index) => (
        			<option value = {name} key = {index}>
          	{name}
        		</option>
      			))}
      		</select></>
					<div>
						<input type = "submit" value = "Analyze" />
					</div>
				</form>
				<div style = {{margin: "auto", width: "max-content"}}>
				{
				this.state.prediction_in_progress ?
					<span className = "LoadingAnimation"></span> :
					(this.state.prediction > 100 ?
						<> Server error. Sorry </> :
						(this.state.prediction < 0 ?
						<> </> :
						<> We estimate a {this.state.prediction}% chance that this is a deepfake. </>))
				}
				</div>
      </div>
    );
  }
}
