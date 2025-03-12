import styled from "styled-components";

export const TicketCardWrapper = styled.div`
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 6px;
  box-shadow: 0px 0.8px 1.6px 0px #0000004D;
`;

export const TicketInfo = styled.div`
  width: 100%;
  padding: 15px;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
`;

export const TicketTypeText = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #222;
  margin-bottom: 14px;

  @media (max-width: 480px){
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Category = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const TicketPrice = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #222222;

  @media (max-width: 480px){
    font-size: 14px;
    font-weight: bold;
  }
`;

export const AddButton = styled.button`
  background-color: #2e3192;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 20px;
  font-size: 14px;
  cursor: pointer;
  margin-left: 15px;

  &:hover {
    background-color: #232578;
  }
`;

export const QuantityControl = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: #2e3192;
    border-radius: 4px;
    padding: 2px;
`;

export const QuantityButton = styled.button`
    background-color: #2e3192;
    color: white;
    border: none;
    border-radius: 4px;
    width: 24px;
    height: 24px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #232578;
    }
`;

export const QuantityText = styled.span`
    min-width: 24px;
    text-align: center;
    font-weight: 600;
    color: #fff;
`;

export const TicketDescription = styled.div`
  font-size: 13px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 15px;

  @media (max-width: 480px){
    font-size: 12px;
  }
`;
