import React from "react";
import ReactDOM from "react-dom/client";
import { GetModelList } from "./GetModelList.js";
import { GetPrediction } from "./GetPrediction.js";

export class Application extends React.Component {
  constructor (props)
	{
		super (props);
		this.state = {}
		this.state.models = GetModelList ();
		this.state.model = this.state.models[0];
		this.state.sample = null;
		this.state.prediction_in_progress = false;
		this.state.prediction = -1;
	}
	async AsyncPrediction ()
	{
		let promise = new Promise ((resolve) => {
			setTimeout(() => {
				resolve (GetPrediction (this.state.model, this.state.sample));
				}, Math.random() * 2000);
			});
		let prediction = await promise;
		this.setState ({prediction: prediction, prediction_in_progress: false});
	}
	Submit = (event) => 
	{
		event.preventDefault ();
		if (!this.state.sample || this.state.prediction_in_progress)
			return;
		this.setState ({prediction_in_progress: true});
		this.AsyncPrediction ();
	}
	FileUpload = (event) => {
		if (event.target.files)
			this.setState ({sample: event.target.files[0]});
		/* Handle file-upload logic here. */
		
	}
	render () {
    return (
      <div>
				<form onSubmit = {this.Submit} style = {{margin: "auto", width: "max-content"}}>
					<div>
						<label htmlFor = "UploadSample"> Upload Sample: </label>
						<input onChange = {this.FileUpload} type = "file" id = "UploadSample" name = "UploadSample"/>
					</div><>
					<label htmlFor = "SelectModel"> Select Model: </label>
      		<select id = "SelectModel" onChange = {this.ModelChanged}>
      			{this.state.models.map ((name, index) => (
        			<option value = {name} key = {index}>
          	{name}
        		</option>
      			))}
      		</select></>);
					<div>
						<input type = "submit" value = "Submit (What Verb is Appropriate?)" />
					</div>
				</form>
				<div>
				{ this.state.sample == null ?
					<> Please upload a sample </> :
					<> </> }
				</div>
				<div>
				{ this.state.model == null ?
					<> Please select a model </> :
					<> </> }
				</div>
				<div>
				{
				this.state.prediction_in_progress ?
					<IdleAnimation /> :
					(this.state.prediction >= 0 ?
						<> We estimate a {this.state.prediction}% chance that {this.state.sample.name} is a deepfake. </> :
						<> </>)
				}
				</div>
				<p> Finally got the async. Moving on to idle animations </p>
      </div>
    );
  }
}

class IdleAnimation extends React.Component {
	render () {
		return (
			<div className = "IdleAnimation"> Calculating... </div>
		);
	}
}
