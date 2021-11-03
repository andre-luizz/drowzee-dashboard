import React from 'react';

import { IModal } from '../../../../domain/components/interfaces/IModal';

import * as S from './styles';

const Modal: React.FC<IModal> = ({ isOpen, handleCreate, toogleModal, children }) => (
	<>
		{isOpen && (
			<S.Background>
				<S.Content>
					{children}
					<S.ButtonsGroup>
						<S.AddTaskButton onClick={handleCreate}>Adicionar</S.AddTaskButton>
						<S.ExitTaskButton onClick={toogleModal} >Cancelar</S.ExitTaskButton>
					</S.ButtonsGroup>
				</S.Content>
			</S.Background>
		)}
	</>
);

export default Modal;
