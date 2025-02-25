import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const EventImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

export const CategoryTag = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #FF8C1A;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 6px;
`;

export const CardContent = styled.div`
  padding: 16px;
`;

export const EventTitle = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: bold;
  color: #222;
  margin: 0;
`;

export const EventDetail = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;
  margin: 6px 0;

  svg {
    margin-right: 6px;
    color: #555;
  }

  span {
    margin-right: 12px;
  }
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

export const PriceTag = styled.span`
  color: #283f93;
  font-size: 14px;
  font-weight: bold;
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid #283F93;
`;

export const BuyButton = styled.button`
  background: #283f93;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #1c2f6e;
  }
`;
