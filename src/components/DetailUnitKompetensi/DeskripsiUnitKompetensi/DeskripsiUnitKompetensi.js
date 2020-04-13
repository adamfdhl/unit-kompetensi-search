import React from "react";

import classes from "./DeskripsiUnitKompetensi.module.css";

const DeskripsiUnitKompetensi = (props) => {
	return (
		<div>
			<p>
				<strong>Kode Unit:</strong> {props.selectedUK["kode unit"]}
			</p>
			<p>
				<strong>Judul Unit:</strong> {props.selectedUK["judul unit"]}
			</p>
			<p>
				<strong>Deskripsi Unit:</strong> blablabla
			</p>
		</div>
	);
};

export default DeskripsiUnitKompetensi;
