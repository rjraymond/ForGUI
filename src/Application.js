import React from "react";
import ReactDOM from "react-dom/client";
import { GetModelList } from "./GetModelList.js";

export class Application extends React.Component {
  constructor (props)
	{
		super (props);
		this.state = {show_prediction: true};
	}
	Submit (event)
	{
		console.log ("State was " + this.state.show_prediction);
		event.preventDefault ();
		this.setState ({show_prediction: false});
	}
	render () {
    return (
      <div>
				<form onSubmit = {this.Submit} style = {{margin: "auto", width: "max-content"}}>
					<div>
						<label htmlFor = "UploadSample"> Upload Sample: </label>
						<input type = "file" id = "UploadSample" name = "UploadSample"/>
					</div>
					<SelectModel />
					<div>
						<input type = "submit" value = "Submit (What Verb is Appropriate?)" />
					</div>
				</form>
        <Prediction show = {this.state.show_prediction}/>
				<div style = {{margin: "auto", width: "max-content"}}>
          ToDo:
          <p> Passing state to child (result needs state) </p>
					<p> Dummy function pretend to call models </p>
					<p> Tie to python instead of server commandline? </p>
          <p> Handle server output </p>
        </div>
      </div>
    );
  }
}

class Prediction extends React.Component {
	constructor (props)
	{
		super (props);
	}
	render () {
		if (this.props.show)
			return (
				<div>
      		<p> I am the result, but you shouldnt be able to see me </p>
      	</div>
		);
	}
}

class SelectModel extends React.Component {
	constructor (props) {
		super (props);
		this.state = {models: GetModelList ()};
		}
	/*	I want to be able to update this thing if it ever changes.	*/
	/*	Where should I get this prop? Maybe it's not important right now.	*/
	render () {
		return (<>
			<label htmlFor = "SelectModel"> Select Model: </label>
			<select id = "SelectModel">
			{this.state.models.map ((name, index) => (
				<option value = {index} key = {index}>
					{name}
				</option>
			))}
			</select>
		</>);
	}
}

