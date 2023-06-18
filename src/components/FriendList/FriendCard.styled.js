import styled from '@emotion/styled';

export const Card = styled.li`
display: flex;
  gap: 1.5em;
  margin: 0 auto;
  box-sizing: border-box;
  min-width: 260px;
  padding: 1em;

  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  border-radius: 5px;
  transition: all 0.5s;

  text-align: center;
  align-items: center;
  justify-content: space-around;
  user-select: none;
  font-weight: bolder;
  color: #333;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
`;

const setStatusColor = ({eventType}) => eventType ? 'green' : 'red';

export const StatusFriend = styled.span`
background-color: ${setStatusColor};
width: 20px;
height: 20px;
border-radius: 50%;
`;

export const AvatarFriend = styled.img`
position: relative;
display: block;
&::before{
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 50px;
  background-color: green;
  z-index: 1000;
}
`;
export const NameFriend = styled.p``;