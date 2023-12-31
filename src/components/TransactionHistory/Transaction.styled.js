import styled from '@emotion/styled';

export const Row = styled.tr`
&:hover{
  background-color: #ddfdfe;
}
  &:nth-of-type(even) {
    background: #f8f8f8;

    &:hover{
      background-color: #ddfdfe;
    }
  }
`;
export const Cell = styled.td`
  border-right: 1px solid #f8f8f8;
  font-size: 0.8em;
  text-align: center;
  padding: 0.6em;

  &:first-of-type{
    text-transform: capitalize;
  }
`;
