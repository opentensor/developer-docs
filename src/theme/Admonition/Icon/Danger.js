import React from 'react';
import { PiWarningOctagonLight } from "react-icons/pi";

export default function AdmonitionIconDanger(props) {
	console.log(props, "Props for danger Icons");
	return (<PiWarningOctagonLight {...props} />);
}
