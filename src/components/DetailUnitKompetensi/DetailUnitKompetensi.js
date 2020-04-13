import React from "react";
import DeskripsiUnitKompetensi from "./DeskripsiUnitKompetensi/DeskripsiUnitKompetensi";
import ElemenUnitKompetensi from "./ElemenUnitKompetensi/ElemenUnitKompetensi";
import KriteriaUnitKerja from "./KriteriaUnjukKerja/KriteriaUnitKerja";

import classes from "./DetailUnitKompetensi.module.css";

const DetailUnitKompetensi = (props) => {
	return (
		<React.Fragment>
			<h3>Detail Unit Kompetensi</h3>
			<DeskripsiUnitKompetensi selectedUK={props.selectedUnitKompetensi} />
			<div className={classes.WrapperUnitKompetensi}>
				<ElemenUnitKompetensi />
				<KriteriaUnitKerja />
			</div>
		</React.Fragment>
	);
};

export default DetailUnitKompetensi;
