import { Modal } from "../ui/Modal";
import { useForm } from "react-hook-form";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col gap-3">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						className="w-full rounded-md"
						{...register("name")}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</Modal>
	);
};

export default AddTaskModal;
