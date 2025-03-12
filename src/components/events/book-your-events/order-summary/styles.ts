import styled from 'styled-components';

export const Container = styled.div`
    max-width: 480px;
    margin: 60px auto;
    padding: 24px 16px;
`;

export const PageTitle = styled.h1`
    font-size: 20px;
    text-align: center;
    color: #111827;
    margin-bottom: 24px;
    font-weight: bold;

    @media (max-width: 480px){
        font-size: 18px;
    }
`;

export const StepsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 24px;
`;

export const StepCircle = styled.div<{ active?: boolean }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px dashed #3C3C3C;
`;

export const StepLine = styled.div`
    width: 100px;
    margin: -8px;
    height: 2px;
    background-color: #D9D9D9;

    @media (max-width: 480px){
        width: 100px;
    }
`;

export const OrderCard = styled.div`
    background: white;
    border-radius: 8px;
    border: 1px solid #E5E7EB;
    padding: 16px;
`;

export const Title = styled.h2 <{ title?: boolean }>`
    font-size: ${({ title }) => title ? "20px" : "16px"};
    color: #000000;
    margin-bottom: 16px;
    font-weight: 500;
    
    @media (max-width: 480px){
        margin-top: 0px;
    }
`;

export const TicketsSection = styled.div`
    margin-bottom: 24px;
`;

export const TicketCard = styled.div`
    background: #F9FAFB;
    border-radius: 8px;
    padding: 5px 10px;

    @media (max-width: 480px){
        padding: 5px;
    }
`;

export const EventName = styled.h3`
    font-size: 16px;
    color: #283F93;
    margin-bottom: 12px;
    margin-left: 10px;

    @media (max-width: 480px){
        margin-left: 5px;
    }
`;

export const TicketCategory = styled.div`
    padding-bottom: 15px;
    color: #222222;
    font-size: 14px;
    font-weight: bold;
`;

export const GeneralAdmission = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
    font-size: 14px;
    justify-content: space-between;
`;

export const TicketContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const TicketCounter = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    background: #1F41BB;
    padding: 4px 8px;
    border-radius: 4px;

    span {
        color: #fff;
    }
`;

export const CounterButton = styled.button`
    background: none;
    border: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    padding: 0 4px;
`;

export const TicketText = styled.span`
    color: #404040;
    font-size: 10px;
`;

export const TicketPrice = styled.span`
    margin-left: auto;
    font-weight: bold;
    font-size: 16px;
`;

export const AmountWrapper = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column;

    div {
        color: #283F93;
        font-size: 10px;
    }
`;

export const BuyMoreTickets = styled.button`
    color: #1F41BB;
    background: none;
    border: none;
    font-size: 14px;
    padding: 0;
    cursor: pointer;
    text-decoration: underline;
`;

export const DiscountSection = styled.div`
    margin-bottom: 24px;
`;

export const DiscountTitle = styled.h3`
    font-size: 14px;
    color: #111827;
    margin-bottom: 8px;
`;

export const DiscountWrapper = styled.div`
    display: flex;
    gap: 8px;
`;

export const DiscountInput = styled.input`
    flex: 1;
    padding: 8px 12px;
    border: 1px solid #E5E7EB;
    border-radius: 4px;
    font-size: 14px;
    outline: none;
    
    &::placeholder {
        color: #9CA3AF;
    }
`;

export const ApplyButton = styled.button`
    background: #1F41BB;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

export const PaymentSection = styled.div`
    margin-bottom: 24px;
`;

export const PaymentRow = styled.div<{ total?: boolean }>`
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    font-size: 14px;
    
    ${props => props.total && `
        border-top: 1px solid #E5E7EB;
        margin-top: 8px;
        padding-top: 16px;
        font-weight: 500;
    `}
`;

export const PaymentLabel = styled.span`
    color: #6B7280;
`;

export const PaymentAmount = styled.span`
    color: #111827;
`;

export const ContinueButton = styled.button`
    width: 100%;
    background: #1F41BB;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 12px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, opacity 0.3s ease-in-out;

    &:hover {
        opacity: 0.8;
    }
`;

export const BackButton = styled.button`
  width: 100%;
  padding: 12px;
  background: transparent;
  border: 1px solid #4A67E3;
  color: #4A67E3;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 1rem;
  &:hover {
    background: #F5F7FF;
  }
`;
