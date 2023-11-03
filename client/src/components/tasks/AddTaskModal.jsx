import React from "react";
import { useState } from "react";
import { Modal } from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
	return (
		<Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
				molestias, illo totam incidunt sint praesentium porro iste nemo
				doloremque! Hic?
			</p>
		</Modal>
	);
};

export default AddTaskModal;
