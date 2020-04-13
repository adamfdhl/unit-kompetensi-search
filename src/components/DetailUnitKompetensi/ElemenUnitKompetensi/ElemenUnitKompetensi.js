import React from "react";

import classes from "./ElemenUnitKompetensi.module.css";

const ElemenUnitKompetensi = (props) => {
	const elemenUnit = (
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
			<p>Elemen Unit Kompetensi</p>
			{elemenUnit}
		</div>
	);
};

export default ElemenUnitKompetensi;
