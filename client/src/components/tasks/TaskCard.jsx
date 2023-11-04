import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { updateStatus } from "../../redux/features/tasks/tasksSlice";

const TaskCard = ({ task }) => {
	const dispatch = useDispatch();
	return (
		<div className="bg-secondary/10 rounded-md p-5">
			<h1 className="text-lg font-semibold mb-3">{task?.title}</h1>
			<p className="mb-3">{task?.description}</p>
			<p className="text-sm">Assigned to - {task?.assignedTo}</p>
			<div className="flex justify-between mt-3">
				<p className="text-blue-800">{task?.date}</p>
				<div className="flex gap-3">
					<button title="Delete">
						<TrashIcon className="h-5 w-5 text-red-500" />
					</button>
					<button onClick={() => dispatch(updateStatus(task.id))} title="Update Status">
						<ArrowRightIcon className="h-5 w-5 text-primary" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default TaskCard;
