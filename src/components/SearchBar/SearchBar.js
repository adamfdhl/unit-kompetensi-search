import React from "react";

import classes from "./SearchBar.module.css";

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			querySearch: "",
		};
	}

	querySearchHandler = (event) => {
		console.log(event.target.value);
	};

	render() {
		return (
			<div className={classes.SearchBar}>
				<h4>Cari Unit Kompetensi</h4>
				<input
					type="text"
					placeholder="Ketik di sini..."
					onChange={this.querySearchHandler}
				/>
			</div>
		);
	}
}

export default SearchBar;
