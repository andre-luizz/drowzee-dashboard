import React from 'react';

import * as S from './styles';

type ICreateTask = React.ButtonHTMLAttributes<HTMLButtonElement>;

const CreateTaskButton: React.FC<ICreateTask> = ({ ...props }) => {
	return (
		<S.Container {...props}>
			<S.Icon />
		</S.Container>
	);
};

export default React.memo(CreateTaskButton);
