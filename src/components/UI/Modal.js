import classes from "./Modal.module.css";
import { Fragment } from "react";

const Backdrop = () => {
	return <div className={classes.backdrop} />;
};

const ModalOverlay = () => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};

const Modal = () => {
	return (
		<Fragment>
			<Backdrop />
			<ModalOverlay />
		</Fragment>
	);
};

export default Modal;
