import React from 'react';

import * as S from './styles';

type ICreateTask = React.InputHTMLAttributes<HTMLInputElement>;

const CreateTaskInput: React.FC<ICreateTask> = ({ ...props }) => {
	return (
		<S.Container {...props} />
	);
};

export default React.memo(CreateTaskInput);
