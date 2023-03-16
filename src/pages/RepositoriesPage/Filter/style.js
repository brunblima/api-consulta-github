import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 0.3rem;
  margin: 1rem auto;
  margin-right: 1rem;
  
  padding: 0rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
    grid-template-columns: auto auto;
    gap: 0.8rem;
    padding: 0 1rem;
  }
`;

export const Selector = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.container};
  color: ${(props) => props.color};
  width: 100%;
  min-height: 1rem;
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: background 0.3s, transform 0.3s;
  padding: 0.5rem;

  &:hover,
  &.selected{
    background: ${(props) => props.color || props.theme.colors.ligth};
    color: ${(props) => 
      props.color ? props.theme.colors.white : props.theme.colors.black};
    transform: translateX(5px) scale(1.02);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
    border-radius: 20px;

    &:hover,
    &.selected{
      transform: tanslateX(0) scale(1.02);
    }
  }

`;

export const Cleaner = styled.button`
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  border: none;
  text-align: left;
  padding:  0.5rem;

  &:hover{
    color:rgba(255, 255, 255, 0.5)
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
    text-align: center;
    padding: 0 1rem;
  }
`;
