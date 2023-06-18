import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  margin: 0 auto;
  margin-top: 1em;
  padding-top: 1em;
  box-sizing: border-box;
  /* width: 300px; */
  /* height: 320px; */

  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  /* border-radius: 5px; */
  transition: all 0.5s;

  text-align: center;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: bolder;
  color: #333;
`;

export const Title = styled.h2`
  color: #333;
  text-transform: uppercase;
`;

export const StatsList = styled.ul`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: #333;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: white;
  }
`;
