import styled, { keyframes } from 'styled-components';

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

export const EventDuration = styled.div`
    display: flex;
    justify-content: space-between;;
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

export const TwoInputField = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const BackNavigate = styled.div`
    display: flex;
    border: 1px solid #283F93;
    margin-top: 10px;
    padding: 8px 5px;
    border-radius: 6px;
    gap: 10px;
    color: #283F93;
    cursor: pointer;
    opacity: 0.9;
    justify-content: center;
`;

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 2px solid #fff;
  border-top: 2px solid transparent;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: ${spin} 0.6s linear infinite;
`;
