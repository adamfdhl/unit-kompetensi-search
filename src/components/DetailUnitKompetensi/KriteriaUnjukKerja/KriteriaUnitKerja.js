import React from "react";

import classes from "./KriteriaUnitKerja.module.css";

const KriteriaUnitKerja = (props) => {
	const kriteriaUnit = (
		<ol>
			<li>Mengidentifikasi tools yang digunakan</li>
			<li>Mengidentifikasi tools yang digunakan</li>
			<li>Mengidentifikasi tools yang digunakan</li>
			<li>Mengidentifikasi tools yang digunakan</li>
			<li>Mengidentifikasi tools yang digunakan</li>
		</ol>
	);
	return (
		<div>
			<p>Kriteria Unit Kerja</p>
			{kriteriaUnit}
		</div>
	);
};

export default KriteriaUnitKerja;
