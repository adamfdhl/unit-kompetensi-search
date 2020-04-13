import React from "react";

import classes from "./UnitKompetensiTable.module.css";

const UnitKompetensiTable = (props) => {
	const sendKodeUnitHandler = (kodeUnit) => {
		console.log("LihatDetail button clicked!", kodeUnit);
		props.clickedUKHandler(kodeUnit);
	};

	const tableContent = props.unitKompetensi.map((unit) => {
		return (
			<tr key={unit["kode unit"]}>
				<td>{unit["kode unit"]}</td>
				<td>{unit["judul unit"]}</td>
				<td>
					<button onClick={() => sendKodeUnitHandler(unit["kode unit"])}>
						Lihat Detail
					</button>
				</td>
			</tr>
		);
	});

	return (
		<div className={classes.WrapperTable}>
			<table className={classes.FixedHeader}>
				<thead>
					<tr>
						<th>Kode Unit</th>
						<th>Judul Unit</th>
					</tr>
				</thead>
				<tbody>{tableContent}</tbody>
			</table>
		</div>
	);
};

export default UnitKompetensiTable;
