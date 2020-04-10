import React from "react";

import classes from "./SearchBar.module.css";

class SearchBar extends React.Component {
	render() {
		return (
			<div className={classes.SearchBar}>
				<h3>Cari Unit Kompetensi</h3>
				<input type="text" placeholder="Ketik di sini..." />
			</div>
		);
	}
}

export default SearchBar;
