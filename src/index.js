import React from "react";
import ReactDOM from "react-dom/client";
import { Application } from "./Application.js";
import { IsFake } from "./IsFake.js";
require ("./global.css");

class BarBottom extends React.Component {
  render () {
    return (
      <div style = {{marginTop: "auto", display: "flex", justifyContent: "space-between"}}>
				<div style = {{margin: "auto"}}>
					<div> <b> Contact </b> </div>
					<div> { this.props.contact.address_l1 } </div>
					<div> { this.props.contact.address_l2 } </div>
					<div> { this.props.contact.city  + ", " +
								  this.props.contact.state + " "  +
								  this.props.contact.zip_code   } </div>
					<div> { this.props.contact.phone      } </div>
				</div>
				<div style = {{margin: "auto"}}>
					<div> <b> Source Code </b> </div>
					<div> { this.props.source.msg_website   } </div>
					<div> { this.props.source.url_website   } </div>
					<div> { this.props.source.msg_utilities } </div>
					<div> { this.props.source.url_utilities } </div>
				</div>
				{ process.env.REACT_APP_LOCAL == "true" ?
				<div style = {{margin: "auto"}}>
					<div> <b> DEBUG INFO </b> </div>
					<div> PWD: {process.env.REACT_APP_PWD} </div>
					<div> PHP: {process.env.REACT_APP_PHP} </div>
					<div> STA: { process.env.REACT_APP_PWD.indexOf (process.env.REACT_APP_PHP) != 0 ?
												"PHP directory misconfigured" : "PHP directory properly configured"}
					</div>
				</div> : <> </>
				}
			</div>
    );
  }
}

class BarTop extends React.Component {
	render () {
		return (
			<div>
				<div style = {{ margin: "0px", display: "flex", justifyContent: "space-between"}}>
					<div className = "Button" > <a href = ""> About </a> </div>
					<div className = "Button" > <a href = ""> Option </a> </div>
					<div className = "Button" > <a href = ""> Another </a> </div>
					<div className = "Button" > <a href = ""> Something </a> </div>
					<div className = "Button" > <a href = ""> Something Else </a> </div>
				</div>
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
		this.pages = {
			application: "./index.js",
		};
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
			<div style = {{backgroundColor: "white", height: "100vh"}}>
				<div style = {{boxShadow: "0px 0px 60px grey", backgroundColor: "white",
											 maxWidth: "1000px", margin: "auto", height: "100%"}}>
					<div style = {{display: "flex",
												 flexDirection: "column", height: "100%"}}>
						<BarTop />
						<Banner url = {this.url} />
						<Application />
						<BarBottom contact = {this.contact}  source = {this.source}/>
					</div>
				</div>
			</div>
		);
	}
}

const root = ReactDOM.createRoot (document.getElementById ("root"));
root.render (<Root />);
