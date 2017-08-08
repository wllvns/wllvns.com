import React, { Component } from 'react';
import { Button } from '../../components/Buttons';

const SearchBar = ({
	label,
	value,
	onChange,
	onClick,
	children
}) => {
	return (
		<div style={{width: "50vw", marginLeft: "25vw", marginRight: "25vw", fontSize: "75%", textAlign: "center"}}>
			<div style={{paddingTop: "5px"}}>{label}</div>
			<form style={{paddingTop: "10px"}}>
				<input 
					type="text"
					value={value}
					onChange={onChange}
				>
				</input>
				<Button
					onClick={onClick}
				>
					{children}
				</Button>
			</form>
		</div>
	)
}

export default SearchBar;