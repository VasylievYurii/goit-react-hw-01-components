import styled from '@emotion/styled';

export const CardProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  margin: 0 auto;
  margin-top: 30px;
  box-sizing: border-box;
  width: 260px;
  height: 320px;

  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  border-radius: 17px;
  transition: all 0.5s;

  text-align: center;
  align-items: center;
  justify-content: center;
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

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  margin: 0 auto;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 50%;
`;

export const UserName = styled.p`
  color: #333;
  font-size: 1.5em;
  font-weight: 600;
  line-height: 2rem;
`;
export const UserTag = styled.p`
  font-weight: 400;
  color: #859ba8;
  font-size: 0.8em;
`;

export const UserLocation = styled.p`
  font-weight: 400;
  color: #859ba8;
  font-size: 0.8em;
`;

export const UserStats = styled.ul`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: #333;

  &::before {
    content: '';
    position: absolute;
    top: -30%;
    width: 100%;
    height: 1px;
    background-color: white;
  }
`;

export const List = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.2em;

  &:not(:first-of-type)::before {
    content: '';
    position: absolute;
    top: -30%;
    right: 155%;
    width: 1px;
    height: 190%;
    background-color: white;
  }
`;

export const Label = styled.span`
  font-weight: 600;
  color: #859ba8;
  font-size: 0.8em;
`;
