import { Modal } from "../ui/Modal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTasks } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
	const dispatch = useDispatch();
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = (data) => {
		dispatch(addTasks(data));
		onCancel();
	};

	const onCancel = () => {
		reset();
		setIsOpen(false);
	};

	return (
		<Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col gap-3 mb-5">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						className="w-full rounded-md"
						{...register("title")}
					/>
				</div>
				<div className="flex flex-col mb-5">
					<label htmlFor="description" className="mb-2">
						Description
					</label>
					<textarea
						type="text"
						id="description"
						className="w-full rounded-md"
						{...register("description")}
					/>
				</div>
				<div className="flex flex-col mb-5">
					<label htmlFor="description" className="mb-2">
						Deadline
					</label>
					<input
						type="date"
						id="date"
						className="w-full rounded-md"
						{...register("date")}
					/>
				</div>
				<div className="flex flex-col mb-5">
					<label htmlFor="assignedTo" className="mb-2">
						Assign to
					</label>
					<select
						id="assignedTo"
						className="w-full rounded-md"
						{...register("assignedTo")}
					>
						<option value="Shariful Islam">Shariful Islam</option>
						<option value="Mir Hossain">Mir Hossain</option>
						<option value="Nahid Hossain">Nahid Hossain</option>
						<option value="Mizanur Rahman">Mizanur Rahman</option>
						<option value="Tanmoy Parvez">Tanmoy Parvez</option>
						<option value="Fahim Ahmed">Fahim Ahmed</option>
						<option value="Rahatul Islam">Rahatul Islam</option>
						<option value="Samim Israr Ravi">Samim Israr Ravi</option>
						<option value="Mehedi Anik">Mehedi Anik</option>
						<option value="Eshtiaque Ahmed">Eshtiaque Ahmed</option>
						<option value="Tarique Ahmed">Tarique Ahmed</option>
						<option value="Masud Alam">Masud Alam</option>
					</select>
				</div>
				<div className="flex flex-col mb-5">
					<label htmlFor="priority" className="mb-2">
						Priority
					</label>
					<select
						id="priority"
						className="w-full rounded-md"
						{...register("priority")}
					>
						<option value="high">High</option>
						<option value="medium">Medium</option>
						<option value="low">Low</option>
					</select>
				</div>
				<div className="flex gap-3 justify-end">
					<button
						onClick={() => onCancel()}
						type="button"
						className="btn btn-danger"
					>
						Cancel
					</button>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default AddTaskModal;
