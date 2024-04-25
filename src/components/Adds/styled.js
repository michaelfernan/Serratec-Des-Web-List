import styled from "styled-components";

export const Container = styled.div`
    background-color: transparent;
    border-radius: 8px;
    padding: 0.5rem;
    margin-bottom: 30px;
    gap: 1rem;
    
    header {
        display: flex;
        align-items: 10px;
       
        img {
            width: rem;
            height: 5rem;
            border-radius: 8px;
            outline: 2px solid greenyellow;
            
        }

        strong {
            line-height: 3;
           font-size: 150%;
            color: #075d00;
            margin-left: 5rem;
        }
    }
`;

export const Content = styled.div`
    margin-top: 1.5rem;
    line-height: 1.6;
    color: darkgreen;

`;

export const Form = styled.form`
    width: 100%;
    margin-top: 1.5rem;
    padding: 1.5rem 0;
    border-top: 1px solid #323238;

    strong {
        line-height: 1.6;
        color: darkgreen;
    }

    textarea {
        width: 100%;
        resize: none;
        background-color: #c5da80;
        border: 0;
        border-radius: 8px;
        height: 3rem;
        padding: 0.7rem;
        margin-top: 1rem;
        color: darkgreen;
        line-height: 1.4;
    }

    button {
        padding: 1rem 1.5rem;
        margin-top: 1rem;
        border-radius: 8px;
        border: 0;
        background-color: gray;
        color: white;
        transition: background-color 0.5s;
    }

    button[type=submit]:not(:disabled):hover{
       background: green;
       
  
    }

`;

export const TaskList = styled.div`
    margin-top: 2rem;

`;

export const TagButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 5px;

  &:hover {
    color: #333;
  }

  ${({ selected }) => selected && `
    font-weight: bold;
    color: #333;
  `}
`;