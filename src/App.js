import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import UnitKompetensiTable from "./components/UnitKompetensiTable/UnitKompetensiTable";
import DetailUnitKompetensi from "./components/DetailUnitKompetensi/DetailUnitKompetensi";

import "./App.css";

function App() {
	return (
		<React.Fragment>
			<div className="header-app">
				<h1 className="header-title">UKS: Unit Kompetensi Search</h1>
				<SearchBar />
			</div>
			<UnitKompetensiTable />
			<DetailUnitKompetensi />
		</React.Fragment>
	);
}

export default App;
