import styled from "styled-components";

export const Container = styled.div`
  max-width: 50%;
  margin: 60px auto;

  @media (max-width: 480px) {
    max-width: 100%;
    margin-bottom: 0px;
  }
`;

export const SubContainer = styled.div<{ $totalTickets: boolean }>`
  padding-top: 40px;
  padding-bottom: ${({ $totalTickets }) => $totalTickets ? "100px" : "10px"};

  @media (max-width: 480px) {
    padding-top: 0px;
  }
`;

export const EventHeader = styled.div`
  background-color: #283F93;
  color: white;
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 480px) {
    border-radius: 0px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;

export const EventTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const EventInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #ffffff;
  gap: 20px;
  font-weight: 400;

  span {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  @media (max-width: 480px) {
    gap: 10px;
    flex-direction: column;
  }
`;

export const TicketSection = styled.div`
  border-radius: 8px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const TicketContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const NotFound = styled.h2`
  text-align: center;
  padding: 20px;
  font-size: 18px;
  color: red;
`;

export const DateAndTime = styled.div`
  gap: 10px;
  display: flex;

  span {
    display: flex;
    gap: 8px;
    color: #fff;
    align-items: center;
  }
`;

export const SummarySection = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    @media (max-width: 480px) {
      flex-direction: column;
      gap: 15px;
    }
`;

export const SummaryContent = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;

    @media (max-width: 480px) {
      width: 100%;
      justify-content: space-between;
    }
`;

export const SummaryText = styled.div`
    font-size: 18px;
    color: #222222;
    font-weight: bold;
    
    span {
      font-weight: 600;
      color: #2e3192;
    }
`;

export const AddToCart = styled.button`
    background-color: #2e3192;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
    font-weight: bold;
    height: 40px;

    &:hover {
      background-color: #232578;
    }

    @media (max-width: 480px) {
      width: 40%;
      padding: 5px;
      font-size: 14px;
      font-weight: 500;
    }
`;

export const FooterContainer = styled.div`
  width: 36%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const NumberOfTickets = styled.div`
  color: #757575;
  font-size: 12px;
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
  &:hover {
    background: #F5F7FF;
  }
`;
