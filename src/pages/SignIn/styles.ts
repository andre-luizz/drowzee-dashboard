import styled from 'styled-components';
import colors from '../../styles/colors';
import Heading from '../../components/DataDisplay/Heading';
import LinkBase from '../../components/Navigation/Link';
import Text from '../../components/DataDisplay/Text';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.secondary};
`;

export const PageLeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 100vh;
    background-color: ${colors.primary};
`;

export const PageRightSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 100vh;
    background-color: ${colors.secondary};
`;

export const FormTitle = styled(Heading)`
    margin-bottom: 21px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    width: 411px;
    height: auto;
    background: ${colors.secondary};
    border-radius: 24px;
`;

export const NoAccountWrapper = styled.div`
    margin-top: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
`;

export const NoAccountText = styled(Text)`
    margin-right: 3px;
    color: ${colors.input};
`;

export const NoAccountLink = styled(LinkBase)``;
