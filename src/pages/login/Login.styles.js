import styled from 'styled-components';
import {Container} from '../../styles/shared/Container';

export const LoginContainer = styled(Container)`
  margin-top: 128px;
  height: 450px;
  width: 600px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

export const InputDiv = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;

export const LoginInput = styled.input`
  font-size: 1rem;
  margin-bottom: 16px;
  margin-top: 8px;
  border: 1px solid #cccc;
  line-height: 1.5;
  padding: 8px;
`;

export const LoginHR = styled.hr`
  margin-top: 16px;
  margin-bottom: 16px;
  width: 80%;
`;

export const GoogleSignIn = styled.button`
  padding: 8px;
  display: flex;
  font-size: 16px;
  margin-bottom: 32px;
`;

export const GoogleImage = styled.img`
  max-width: 100%;
  max-heigth: 100%;
`;

export const GoogleImageDiv = styled.div`
  width: 16px;
`;
