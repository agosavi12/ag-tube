import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 20px;
  position: relative;
`;

const Search = styled.div`
  position: absolute;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: 0;
  right: 0;
  margin: auto;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: 0;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search..." />
          <SearchIcon />
        </Search>
        <Button>
          {' '}
          <AccountCircleIcon /> Sign In
        </Button>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
