import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50px;
  border: none;
  display: flex;
  margin-left: 12px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg{
   width: 100%;
   height: 100%;
  }
`;