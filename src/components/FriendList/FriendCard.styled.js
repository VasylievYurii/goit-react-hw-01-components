import styled from '@emotion/styled';

const setStatusColor = ({ eventType }) => (eventType ? '#8ac926' : '#ff595e');

export const Card = styled.li`
  display: flex;
  gap: 1.5em;
  margin: 0 auto;
  box-sizing: border-box;
  min-width: 200px;
  padding: 1em;

  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  border-radius: 5px;
  transition: all 0.5s;

  text-align: center;
  align-items: center;
  justify-content: start;
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

  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 130px;
    height: 130px;
    background-color: ${setStatusColor};
    border-radius: 50%;
    left: -25%;
    z-index: -1;
  }
`;

export const StatusFriend = styled.span`
  /* background-color: ${setStatusColor};
  width: 20px;
  height: 20px;
  border-radius: 50%; */
`;

export const AvatarFriend = styled.img``;
export const NameFriend = styled.p`
font-size: 1.4em;
padding-left: 0.5em;
`;


