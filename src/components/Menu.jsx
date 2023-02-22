import styled from 'styled-components';
import AgLogo from '../img/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import ArticleIcon from '@mui/icons-material/Article';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
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
  margin-top: 10px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Logo>
            <Img src={AgLogo} />
            <span>AG-TUBE</span>
          </Logo>
        </Link>

        <Item>
          <HomeIcon />
          Home
        </Item>

        <Item>
          <ExploreIcon />
          Explore
        </Item>

        <Item>
          <SubscriptionsIcon />
          Subscription
        </Item>

        <Hr />

        <Item>
          <VideoLibraryIcon />
          Library
        </Item>

        <Item>
          <HistoryIcon />
          History
        </Item>

        <Hr />

        <Login>
          Sign in to like videos, comment & subscribe
          <Link to="signin" style={{ textDecoration: 'none' }}>
            <Button>
              <AccountCircleIcon /> SIGN IN
            </Button>
          </Link>
        </Login>

        <Hr />

        <Title>BEST OF AG-TUBE</Title>

        <Item>
          <LibraryMusicIcon />
          Music
        </Item>

        <Item>
          <SportsBasketballIcon />
          Sports
        </Item>

        <Item>
          <SportsEsportsIcon />
          Gaming
        </Item>

        <Item>
          <MovieCreationIcon />
          Movies
        </Item>

        <Item>
          <ArticleIcon />
          News
        </Item>

        <Item>
          <LiveTvIcon />
          Live
        </Item>

        <Hr />

        <Item>
          <SettingsIcon />
          Settings
        </Item>

        <Item>
          <FlagIcon />
          Report
        </Item>

        <Item>
          <HelpIcon />
          Help
        </Item>

        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessIcon />
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Item>
      </Wrapper>
    </Container>
  );
};
export default Menu;
