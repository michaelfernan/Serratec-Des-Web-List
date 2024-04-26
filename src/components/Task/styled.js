import styled from "styled-components";

export const Container = styled.div`
    background-color: #98ac62;
    display: flex;
    gap: 1rem;
    border-radius: 8px;
    padding: 1rem;
    flex-direction: row;
    justify-content: flex-start; // Alinhamento à esquerda
    margin-bottom: 1rem;

    input {
        flex: 0 0 40px; // Largura fixa para checkbox
        margin-right: 10px; // Espaço após o checkbox
    }

    .text {
        flex: 2 0 200px; // Largura flexível para descrição
        margin-right: 10px; // Espaço após a descrição
    }

    .category {
        flex: 1 0 100px; // Largura fixa para categoria
        margin-right: 10px; // Espaço após a categoria
    }

    .icon {
        flex: 0 0 40px; // Largura fixa para ícone de prioridade
        margin-right: 20px; // Espaço maior antes dos botões
    }

    button {
        flex: 0 0 40px; // Largura fixa para botões
        background: transparent;
        border: 0;
        color: darkgreen;
        border-radius: 2px;
        margin-right: 10px; // Espaço entre botões
    }

    button:last-child {
        margin-right: 0; // Remove margem do último botão para evitar espaçamento extra no final
    }

    input[type=checkbox]:checked ~ .text {
        color: #ccc;
        text-decoration: line-through;
    }

    :hover button {
        color: red;
    }
`;
