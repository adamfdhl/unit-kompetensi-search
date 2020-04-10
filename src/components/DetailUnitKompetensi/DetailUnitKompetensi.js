import React from "react";

import classes from "./DetailUnitKompetensi.module.css";

const DetailUnitKompetensi = (props) => {
	return (
		<React.Fragment>
			<h3>Detail Unit Kompetensi</h3>
			<div className={classes.WrapperUnitKompetensi}>
				<p>Deskripsi Unit Kompetensi</p>
				<p>Elemen Unit Kompetensi</p>
				<p>Kriteria Unjuk Kerja</p>
			</div>
		</React.Fragment>
	);
};

export default DetailUnitKompetensi;
