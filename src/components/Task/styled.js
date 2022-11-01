import styled from "styled-components";

export const Container = styled.div`
    background-color: #98ac62;
    display: flex;
    gap: 1rem;
    border-radius: 8px;
    padding: 1rem;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;


    button {
        background: transparent;
        border: 0;
        color: darkgreen;
        border-radius: 2px;
    }

    input[type=checkbox]:checked ~ .text {
         color: #ccc;
         text-decoration: line-through;
              
    }

    :hover button {
        color: red;
    }


`;