import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubContainer = styled.div`
  position: relative;
  width: 90%;
  overflow: hidden;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
  min-height: 200px;
`;

export const EventCard = styled.div`
  position: absolute;
  bottom: 25px;
  left: 20px;
  background: #26262680;
  backdrop-filter: blur(3.078202724456787px);
  padding: 10px;
  border-radius: 10px;
  width: fit-content;
  color: #fff;
  opacity: 0.9;
  width: 25%;
  border: 1px solid #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    bottom: 10px;
    left: 10px;
    padding: 15px;
    // max-width: 250px;
  }

  @media (max-width: 480px) {
    left: 5px;
    padding: 10px;
    // max-width: 200px;
  }
`;

export const BuyNow = styled.button`
  background-color: #283F93;
  width: 100%;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  padding: 5px 0px;
  border-radius: 4px;
  margin-top: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
    
  @media (max-width: 480px) {
    font-size: 14px;
    font-weight: normal;
  }
`;

export const EventTitle = styled.h1`
  font-size: 20px;
  margin: 0;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 14px;
    font-weight: normal;
  }
`;

export const EventDetail = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #fff;
  line-height: 25px;
  font-weight: 400;
  margin: 6px 0;

  @media (max-width: 480px) {
    font-size: 10px;
    font-weight: normal;
    line-height: 10px;
  }

  svg {
    margin-right: 6px;
    color: #fff;
  }

  span {
    margin-right: 12px;
  }
`;
