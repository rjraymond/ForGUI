import React from "react";
import ReactDOM from "react-dom/client";
require ("./global.css");

class Application extends React.Component {
	render () {
		return (
			<h1> I am a wrapper for whatever app goes here </h1>
		);
	}
}

class BarBottom extends React.Component {
  render () {
    return (
      <div style = {{display: "flex", justifyContent: "space-between"}}>
				<div style = {{margin: "auto"}}>
					<div> <b> Contact </b> </div>
					<div> {this.props.contact.address_l1} </div>
					<div> {this.props.contact.address_l2} </div>
					<div> {this.props.contact.city + ", " +
								 this.props.contact.state + " " +
								 this.props.contact.zip_code} </div>
					<div> {this.props.contact.phone} </div>
				</div>
					<div style = {{margin: "auto"}}>
					<div> <b> Source Code </b> </div>
					<div> {this.props.source.msg_website} </div>
					<div> {this.props.source.url_website} </div>
					<div> {this.props.source.msg_utilities} </div>
					<div> {this.props.source.url_utilities} </div>
				</div>
			</div>
    );
  }
}

class BarTop extends React.Component {
	render () {
		return (
			<div style = {{marginLeft: "5%", marginRight: "5%",
										 display: "flex", justifyContent: "space-between"}}>
				<a href = ""> About </a>
				<a href = ""> Option </a>
				<a href = ""> Another </a>
				<a href = ""> Something </a>
				<a href = ""> Something Else </a>
			</div>
		);
	}
}

class Banner extends React.Component {
	render () {
		return (
			<div  >
				<div style = {{height: "100px", margin: "auto", width: "max-content"}}>
					<a href = {this.props.url.ou} target = "_blank">
						<img src = "logo_OaklandUniversity.svg"
								 alt = "Failed to load logo_OaklandUniversity.svg"
								 style = {{maxHeight: "100%", marginBottom: "15px"}} />
					</a>
					<a href = {this.props.url.smiles} target = "_blank">
						<img src = "icon.svg"
								 alt = "Failed to load icon.svg" 
								 style = {{maxHeight: "100%"}}/>
					</a>
				</div>
				<div style = {{textAlign: "center"}}>
					A public utility by the AI and ML lab at Oakland University
				</div>
			</div>
		);
	}
}

class Root extends React.Component {
	constructor (props) {
		super (props);
		this.url = {
			ou: 		"https://oakland.edu/",
			secs:		"https://www.oakland.edu/secs/",
			smiles: "https://github.com/smileslab",
		};
		this.contact = {
			address_l1:	"115 Library Drive",
			address_l2:	"Engineering Center, Room 301",
			city:				"Rochester",
			state:			"MI",
			zip_code:		"48309-4479",
			phone:			"(248) 370-2217",
		};
		this.source = {
			url_website: 				"https://sr.ht/~rjraymond/ForGUI/",
			url_utilities:			"https://github.com/smileslab/forensic_examiner",
			msg_website:				"Source for this website",
			msg_utilities:			"Source for backend utilities",
			license_website: 		"GNU GPLv3 or later",
			license_utilities:	"<<Look into this please!>>",

		};
	}
	render () {
		return (
			<body>
				<BarTop />
				<Banner url = {this.url} />
				<Application />
				<BarBottom contact = {this.contact}  source = {this.source}/>
			</body>
		);
	}
}

const root = ReactDOM.createRoot (document.getElementById ("root"));
root.render (<Root />);
