import styled from 'styled-components';

export const TicketWrapper = styled.div`
  display: flex;
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  margin-top: 30px;
  overflow: hidden;
  position: relative;

  @media (max-width: 480px) {
    flex-direction: column;
    margin-top: 20px;
    width: 90%;
  }
`;

export const ImageSection = styled.div`
  width: 30%;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  }
`;

export const InfoSection = styled.div`
  width: 40%;
  padding: 24px;
  position: relative;
  border-right: 0px dashed #e0e0e0;

  @media (max-width: 480px) {
      width: auto;
      padding: 15px;
    }

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 40px;
    height: 40px;
    background: #f0f0f0;
    border-radius: 50%;
    z-index: 1;

    @media (max-width: 768px) {
      right: 100%;
      transform: translateX(50%);
    }
  }
`;

export const QRSection = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  border-left: 2px dashed #e0e0e0;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 40px;
    height: 40px;
    background: #f0f0f0;
    border-radius: 50%;
    z-index: 1;

    @media (max-width: 768px) {
      left: 100%;
      transform: translateX(-50%);
    }
  }

  @media (max-width: 768px) {
    width: auto;
    padding: 24px;
    border-left: none;
    border-top: 1px dashed #e0e0e0;
    
    img {
      width: 200px;
      height: 200px;
    }
  }

  img {
    width: 90%;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
`;

export const EventTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 20px 0;
  color: #333;

  @media (max-width: 768px) {
    font-size: 18px;
    margin: 0 0 16px 0;
  }
`;

export const EventDetails = styled.div`
  margin-bottom: 24px;
  border-bottom: 2px solid #CCCCCC;
  margin-bottom: 10px;
`;

export const DateAndTime = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
`;

export const DetailRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: #666;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 12px;
  }

  svg {
    margin-right: 8px;
    font-size: 18px;
    color: #666;
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const InfoItem = styled.div<{ alignRight?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: ${({ alignRight }) => alignRight ? "end" : "start"};
  h4 {
    font-size: 10px;
    color: #666;
    margin: 0 0 4px 0;
    font-weight: normal;
  }
  
  p {
    font-size: 12px;
    color: #333;
    margin: 0;
    font-weight: 500;
  }
`;

export const Container = styled.div`
  border-radius: 20px;
  width: 100%;
  display: flex;
  text-align: center;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 60px auto;
  align-items: center;

  @media (max-width: 480px){
    width: 100%;
  }
`;


export const Title = styled.h1`
  font-size: 24px;
  color: #000000;
  margin-bottom: 8px;
  font-weight: bold;
  margin-top: 30px;
`;

export const Subtitle = styled.p`
  color: #666;
  margin-bottom: 32px;
`;

export const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

export const CheckCircle = styled.div`
  width: 35px;
  height: 35px;
  background: #22c55e;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border: 1px dashed #E5E7EB;
`;

export const GreenLine = styled.div`
  width: 100px;
  height: 2px;
  background: #22c55e;

  @media (max-width: 480px){
    width: 70px;
  }
`;

export const EmailText = styled.div``;

export const EmailLink = styled.div`
  color: #2563eb;
  margin-top: 18px;
`;


export const ShareContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 40px;
  background: #F5F5F5;
  justify-content: space-between;

  @media (max-width: 480px) {
    margin-top: 20px;
    font-size: 12px;
    width: 80%;
    justify-content: center;
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
    width: 25px;
    height: 25px;
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
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: background-color 0.3s;
  display: inline-flex;
  align-items: center;
  font-size: 12px;

  @media (max-width: 480px){
    font-size: 10px;
  }

  &:hover {
    background-color: #eee;
  }

  svg {
    margin-right: 5px;
  }
`;

export const IconContainer = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
`;
