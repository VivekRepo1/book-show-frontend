import styled from 'styled-components';

export const FormGroup = styled.div<{ $twoInputField?: boolean }>`
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    width: ${({ $twoInputField }) => $twoInputField ? "48%" : "100%"};
    box-sizing: border-box;
`;

export const InputLabel = styled.label`
    font-size: 12px;
    color: #292929;
`;

export const ErrorMsg = styled.div`
    font-size: 12px;
    margin-top: 5px;
`;

export const Input = styled.input<{ $fullInput?: boolean }>`
    padding: 10px;
    width: ${({ $fullInput }) => $fullInput ? "40%" : "auto"};
    font-size: 14px;
    border: 1px solid #D1D1D1;
    border-radius: 5px;
    margin-top: 5px;
    outline: none;
    color: #000;

    &::placeholder{
        color: #ccc;
        font-size: 12px;
    }
`;

export const SubmitButton = styled.button<{ disabled: boolean }>`
    background-color: ${({ disabled }) => (disabled ? '#d3d3d3' : '#007BFF')};
    color: ${({ disabled }) => (disabled ? '#888' : '#fff')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    font-size: 14px;
    align-items: center;
    gap: 10px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: ${({ disabled }) => (disabled ? '#d3d3d3' : '#0056b3')};
    }
`;
