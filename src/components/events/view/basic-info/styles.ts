import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    display: flex;
    gap: 40px;
    margin: 40px 0px;

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 30px;
    }
`;

export const Section = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const CardContent = styled.div`
    border: 1px solid #A3A3A3;
    padding: 0px 20px 0px;
    border-radius: 6px;
    background-color: #FDFDFD;
`;

export const Image = styled.img`
    width: 60%;
    border-radius: 6px;
    
    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const EventDetail = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #6A6A6A;
  margin: 6px 0;

  svg {
    margin-right: 6px;
    color: #6A6A6A;
  }

  span {
    margin-right: 12px;
  }
`;

export const ComingSoon = styled.div`
  font-weight: 500;
  color: #6A6A6A;
`;

export const MoreInfo = styled.p`
  display: flex;
  font-size: 14px;
  color: #6A6A6A;
  margin-top: 16px;

  svg {
    color: #6A6A6A;
    margin: 0 6px 0 10px;
  }
`;

export const Strong = styled.strong`
    font-weight: bold;
    display: flex;
`;


export const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #222;
  margin-bottom: 20px;
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0px;
`;

export const PriceTag = styled.span`
  color: #283f93;
  font-size: 14px;
  font-weight: bold;
  border-radius: 6px;
  display: flex;
  justify-content: center;

  svg {
    margin-top: 1px;
  }
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

export const ShareContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 5px;
  justify-content: space-between;
  background-color: #f9f9f9;

  @media (max-width: 480px) {
    margin-top: 20px;
    font-size: 14px;
  }
`;

export const ShareText = styled.span`
  margin-right: 10px;

  @media (max-width: 480px) {
    margin-right: 0;
  }
`;

export const IconLink = styled.a <{ $isFacebook: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ $isFacebook }) => ($isFacebook ? '#1877F2' : 'none')};
  border: ${({ $isFacebook }) => ($isFacebook && '1px solid #ddd')};
  margin-right: 5px;
  transition: background-color 0.3s;

  @media (max-width: 480px) {
    margin-right: 10px;
  }

  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${({ $isFacebook }) => ($isFacebook ? '#fff' : '#333')};
  }
`;

export const CopyLinkButton = styled.button`
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: background-color 0.3s;
  display: inline-flex;
  align-items: center;

  &:hover {
    background-color: #eee;
  }

  svg {
    margin-right: 5px;
  }
`;

export const IconContainer = styled.div`
    gap: 10px;
`;

export const NotFound = styled.h2`
    textAlign: center;
    padding: 20px;
    fontSize: 18px;
    color: red;
`;
