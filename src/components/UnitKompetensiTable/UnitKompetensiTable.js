import React from "react";

import classes from "./UnitKompetensiTable.module.css";

class UnitKompetensiTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			unitKompetensi: [
				{
					"kode unit": "TIK.723131",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.723131",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.723131",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.723131",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.723131",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.723131",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.723131",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.723131",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.723131",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.723131",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.723131",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.723131",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.723131",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.723131",
					"judul unit": "Membuat Unit Test Front-End",
				},
				{
					"kode unit": "TIK.723131",
					"judul unit": "Membuat Unit Test Front-End",
				},
			],
		};
	}

	render() {
		const tableContent = this.state.unitKompetensi.map((unit) => {
			return (
				<tr>
					<td>{unit["kode unit"]}</td>
					<td>{unit["judul unit"]}</td>
					<button>Lihat Detail</button>
				</tr>
			);
		});
		return (
			<table>
				<tr>
					<th>Kode Unit</th>
					<th>Judul Unit</th>
				</tr>
				<tbody className={classes.UnitKompetensiTable}>{tableContent}</tbody>
			</table>
		);
	}
}

export default UnitKompetensiTable;
