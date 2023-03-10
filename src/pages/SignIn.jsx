import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h1`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 4px;
  padding: 10px;
  background-color: transparent;
`;

const Button = styled.button`
  border-radius: 4px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 16px;
`;

const Links = styled.div`
  margin-left: 50px;
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.textSoft} !important;
`;

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>To continue to websit</SubTitle>
        <Input placeholder="username" />
        <Input placeholder="password" type="password" />
        <Button>Sign In</Button>

        <Title>OR</Title>

        <Input placeholder="username" />
        <Input placeholder="password" type="email" />
        <Input placeholder="password" type="password" />
        <Button>Sign Up</Button>
      </Wrapper>

      <More>
        English (US)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};
export default SignIn;
