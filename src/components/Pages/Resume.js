import React, { Component } from 'react';
import { resumeData } from '../../constants';
import { Button } from '../../components/Buttons';
import './index..css';

function isSearched(searchValue) {
	return function(item) {
		return !searchValue ||
			item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
			item.tags.toLowerCase().includes(searchValue.toLowerCase())	||
			item.location.toLowerCase().includes(searchValue.toLowerCase());
	}
}

class Resume extends Component {
	constructor (props) {
		super(props);

		this.state = {
			searchValue: ''
		}

		this.onSearchChange = this.onSearchChange.bind(this);
		this.onClear = this.onClear.bind(this);
	}

	onSearchChange(event) {
		this.setState({ searchValue: event.target.value });
	}

	onClear() {
		this.setState({ searchValue: ''});
	}

	render () {
		return (
			<div>
				<div style={{width: "50vw", marginLeft: "25vw", marginRight: "25vw", fontSize: "75%", textAlign: "center"}}>
					<div style={{paddingTop: "5px"}}>Search below. Tags are employed in the background, so feel free to search for words you can't see.</div>
					<form style={{paddingTop: "10px"}}>
						<input 
							type="text"
							value={this.state.searchValue}
							onChange={this.onSearchChange}
						>
						</input>
						<Button
							onClick={this.onClear}
						>
							Clear
						</Button>
					</form>
				</div>
				<div className="table">
					{resumeData.map((resumeDatum) => 
						<div>
							<div className="section-header">{resumeDatum.category}</div>
								{resumeDatum.items.filter(isSearched(this.state.searchValue)).map((item) => 
									<div className="section-item">
										<span className="item-name">{item.name}</span>
										<span className="item-location">{item.location}</span>
										<span className={`item-experience ${item.experience}`}>{item.experience}</span>
									</div>
								)}
						</div>)}
				</div>
			</div>
		)
	}
}
export default Resume;