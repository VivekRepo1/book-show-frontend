import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  margin: 60px auto;
`;

export const ConfirmationCard = styled.div`
  max-width: 800px;
  margin: 60px auto;
  text-align: center;
`;

export const PageTitle = styled.h1`
    font-size: 20px;
    text-align: center;
    color: #111827;
    margin-bottom: 24px;
    padding-top: 30px;
    font-weight: bold;

    @media (max-width: 480px){
        font-size: 18px;
    }
`;

export const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

export const CheckCircle = styled.div<{ $isComplete?: boolean }>`
  width: 35px;
  height: 35px;
  background: ${({ $isComplete }) => $isComplete ? "#22c55e" : "none"};
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border: 1px dashed #E5E7EB;
`;

export const GreenLine = styled.div<{ $isComplete?: boolean }>`
  width: 100px;
  height: 2px;
  background: #22c55e;
  background: ${({ $isComplete }) => $isComplete ? "#22c55e" : "#D9D9D9"};
`;

export const FormContainer = styled.div`
  max-width: 480px;
  margin: 20px auto;
  padding: 24px;
  background: white;
  border-radius: 12px;
  border: 0.5px solid #E5E7EB;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 480px){
    border: none;
    box-shadow: none;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 24px 0;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 480px){
    display: flex;
    flex-direction: column;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FullWidthField = styled(FormField)`
  grid-column: 1 / -1;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #555;
  display: flex;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  color: #333;
  height: 25px;

  @media (max-width: 480px){
    height: 30px;
  }

  &:focus {
    outline: none;
    border-color: #4a67e3;
  }

  &::placeholder {
    color: #9CA3AF;
    font-size: 12px;
  }
`;

export const SmallText = styled.p`
  font-size: 12px;
  color: #666;
  display: flex;
  margin: 4px 0 10px 0;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 20px;

  @media (max-width: 480px){
    align-items: center;
  }
`;

export const Checkbox = styled.input`
  margin-top: 3px;
`;

export const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #333;

  @media (max-width: 480px){
    font-size: 12px;
  }
//   line-height: 1.4;
`;

export const TermsLink = styled.span`
  color: #4a67e3;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const ContinueButton = styled.button`

  background-color: ${({ disabled }) => (disabled ? '#d3d3d3' : '#2842b1')};
  color: ${({ disabled }) => (disabled ? '#888' : '#fff')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 16px;

  &:hover {
    background: #233693;
  }
`;

export const BackButton = styled.button`
  width: 100%;
  padding: 12px;
  background: transparent;
  border: 1px solid #4a67e3;
  color: #4a67e3;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: #f5f7ff;
  }
`;
