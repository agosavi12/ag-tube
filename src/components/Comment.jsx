import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const Description = styled.p`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar />
      <Details>
        <Name>
          LAma Dev <Date>1 day ago</Date>
        </Name>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde enim,
          maxime est impedit obcaecati ut doloribus earum magni! Laboriosam
          dolor adipisci in asperiores dolorem dolores odio consequuntur
          blanditiis animi veniam.
        </Description>
      </Details>
    </Container>
  );
};
export default Comment;
