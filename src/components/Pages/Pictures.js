import React, { Component } from 'react';
import { pictures } from '../../constants';
import { SearchBar } from '../../components/Search';

function isFiltered(filterValue) {
	return function(item) {
		return !filterValue ||
			item.tags.toLowerCase().includes(filterValue.toLowerCase());
	}
}

class Pictures extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchValue: '',
		}

		this.onClear = this.onClear.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
	}

	onClear() {
		this.setState({
			searchValue: '',
		})
	}

	onSearchChange(event) {
		this.setState({ searchValue: event.target.value });
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
				{pictures.filter(isFiltered(this.state.searchValue)).map((picture) => (
					<img 
						className="media"
						src={picture.url}
					>
					</img>
					)
				)}
			</div>
		)
	}
}

export default Pictures;