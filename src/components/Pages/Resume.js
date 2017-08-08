import React, { Component } from 'react';
import { resumeData } from '../../constants';
import { Button } from '../../components/Buttons';
import { SearchBar } from '../../components/Search';
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
				<SearchBar 
					label="Filter below. There are non-visible tags, so feel free to try words you can't see." 
					value={this.searchValue}
					onChange={this.onSearchChange}
					onClick={this.onClear}
				>
					Clear
				</SearchBar>
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