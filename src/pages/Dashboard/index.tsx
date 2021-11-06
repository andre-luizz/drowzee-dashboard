import React from 'react';

import Header from '../../components/common/DataDisplay/Header';
import NavBar from '../../components/common/Navigation/NavBar';
import CreateTaskInput from '../../components/pages/Dashboard/CreateTaskInput';
import ListItem from '../../components/pages/Dashboard/ListItem';
import Modal from '../../components/pages/Dashboard/Modal';
import colors from '../../styles/colors';

interface Task {
    id: number;
    title: string;
}

const Dashboard: React.FC = () => {
	const [tasks, setTasks] = React.useState<Task[]>([]);
	const [taskTitle, setTaskTitle] = React.useState('');
	const [modalIsOpen, setModalIsOpen] = React.useState(false);

	function handleCreateTask() {
		if (!taskTitle) return;

		const newTask = {
			id: Math.random(),
			title: taskTitle,
		};

		setTasks(state => [...state, newTask]);
		setTaskTitle('');
	}

	function handleDeleteTask(id: number) {
		const findedTasks = tasks.filter(task => task.id !== id);

		setTasks(findedTasks);
	}

	return (
		<>
			<NavBar handleOpenModal={() => setModalIsOpen(true)} />
			<Header />

			<div style={{ position: 'absolute', left: '20%', top: '25%' }} >
				<h1 style={{ fontFamily: 'Mulish', color: colors.primary, marginBottom: 26 }} >To Do</h1>
				<ul>
					{tasks.map((task) => {
						return (
							<ListItem
								key={task.id}
								toogleTask={() => handleDeleteTask(task.id)}
							>
								{task.title}
							</ListItem>
						);
					})}
				</ul>
			</div>

			<Modal
				isOpen={modalIsOpen}
				toogleModal={() => setModalIsOpen(false)}
				handleCreate={handleCreateTask}
			>
				<CreateTaskInput
					placeholder="digite o nome de sua tarefa:"
					onChange={(e) => setTaskTitle(e.target.value)}
					value={taskTitle}
				/>
			</Modal>
		</>
	);
};

export default Dashboard;
