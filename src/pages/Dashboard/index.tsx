import React from 'react';

import Header from '../../components/common/DataDisplay/Header';
import NavBar from '../../components/common/Navigation/NavBar';
import CreateTaskInput from '../../components/pages/Dashboard/CreateTaskInput';
import Modal from '../../components/pages/Dashboard/Modal';

const Dashboard: React.FC = () => {
	const [modalIsOpen, setModalIsOpen] = React.useState(true);

	return (
		<>
			<NavBar handleOpenModal={() => setModalIsOpen(true)} />

			<Header />

			<Modal isOpen={modalIsOpen} toogleModal={() => setModalIsOpen(false)}>
				<CreateTaskInput
					placeholder="digite o nome de sua tarefa:"
				/>
			</Modal>
		</>
	);
};

export default Dashboard;
