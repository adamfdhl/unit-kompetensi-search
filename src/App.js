import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import UnitKompetensiTable from "./components/UnitKompetensiTable/UnitKompetensiTable";
import DetailUnitKompetensi from "./components/DetailUnitKompetensi/DetailUnitKompetensi";

import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			unitKompetensi: [
				{
					"kode unit": "TIK.723131",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.723132",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.723133",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.723134",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.723135",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.723136",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.723137",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.723138",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.723139",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.7231310",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.7231311",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.7231312",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.7231313",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.7231314",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.7231315",
					"judul unit": "Membuat Unit Test Front-End",
				},
			],
			kodeUnitClicked: "",
		};
	}

	getKodeUnitHandler = (kodeUnit) => {
		this.setState({ kodeUnitClicked: kodeUnit });
	};

	render() {
		let selectedUnit = null;
		for (let i = 0; i < this.state.unitKompetensi.length; i++) {
			if (
				this.state.unitKompetensi[i]["kode unit"] === this.state.kodeUnitClicked
			) {
				selectedUnit = this.state.unitKompetensi[i];
			}
		}

		let detailUnitKompetensi = null;
		if (this.state.kodeUnitClicked) {
			console.log(selectedUnit);
			detailUnitKompetensi = (
				<DetailUnitKompetensi selectedUnitKompetensi={selectedUnit} />
			);
		}
		return (
			<div className="container-app">
				<h2 className="header-title">UKS: Unit Kompetensi Search</h2>
				<SearchBar />
				<UnitKompetensiTable
					clickedUKHandler={this.getKodeUnitHandler}
					unitKompetensi={this.state.unitKompetensi}
				/>
				<p>Weleh: {this.state.kodeUnitClicked}</p>
				{detailUnitKompetensi}
			</div>
		);
	}
}

export default App;
