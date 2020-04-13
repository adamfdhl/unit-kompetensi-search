import React from "react";

import classes from "./DeskripsiUnitKompetensi.module.css";

const DeskripsiUnitKompetensi = (props) => {
	return (
		<div>
			<p>
				<strong>Kode Unit: {props.selectedUK["kode unit"]}</strong>
			</p>
			<p>
				<strong>Judul Unit: {props.selectedUK["judul unit"]}</strong>
			</p>
			<p>
				<strong>Deskripsi Unit: blablabla</strong>
			</p>
		</div>
	);
};

export default DeskripsiUnitKompetensi;
