import styled from "styled-components";

const BasicTextInput = styled.input`
  box-shadow: 0px 0px 0px 1px #e7e7e9 inset;
  transition: border-color .08s ease-in, box-shadow .08s ease-in, color .08s ease-in;
  background-color: #fff;
  outline: none;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 0.75rem;

  &:focus {
    background-color: #fff;
    border-color: rgba(7, 16, 234, 0.4);
    box-shadow: 0 0 0 4px rgba(7, 16, 234, 0.1);
    z-index: 2;
  }
`;

export default BasicTextInput;
