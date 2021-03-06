import React from 'react';

import { INavBar } from '../../../../domain/components/interfaces/INavBar';
import { sideBarData } from '../../../../helpers/components/NavBar/sideBarData';

import CreateTaskButton from '../../../pages/Dashboard/CreateTaskButton';

import * as S from './styles';

const NavBar: React.FC<INavBar> = ({ handleOpenModal }) => {
	return (
		<S.Container>

			<S.NavBarHeader>
				<span>Tasker</span>
			</S.NavBarHeader>

			<S.RoutesWrapper>
				{sideBarData.map((item, index) => {
					return (
						<S.Route key={index}>
							<S.Link to={item.path} icon={item.icon}>
								<S.RouteTitle>{item.title}</S.RouteTitle>
							</S.Link>
						</S.Route>
					);
				})}
			</S.RoutesWrapper>

			<S.NavBarFooter>
				<CreateTaskButton onClick={handleOpenModal} />
			</S.NavBarFooter>

		</S.Container>
	);
};

export default React.memo(NavBar);
