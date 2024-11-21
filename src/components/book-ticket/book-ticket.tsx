import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoMdTime } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { useParams } from 'react-router-dom';

const Ticket = () => {
  const { id } = useParams<{ id: string }>();
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    fetch(`http://www.bookshow.online/api/reservation/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setUserInfo(data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);


  return (
    <div>
      <Container>
        <TicketContainer>
          <Title>Sangini Presents - A stand up comedy show</Title>
          <TicketInfo>
            <p><MdDateRange /> 10th January, 2025   <IoMdTime /> 10:00AM - 1:00PM</p>
            <p><CiLocationOn /> Midtown Grand, Hisar, HR</p>
          </TicketInfo>
          <SolidDivider />
          <InfoDetails>
            <UserInfo>
              <Detail><Label>Name</Label> {userInfo?.name}</Detail>
              <Detail><Label>Mobile number</Label> {userInfo?.mobileNumber}</Detail>
            </UserInfo>
            <UserInfo>
              <Detail><Label>Ticket Category</Label> {userInfo?.ticketCategory}</Detail>
              <Detail $isZone={true}><Label>Zone</Label> {userInfo?.zone}</Detail>
            </UserInfo>
            <UserInfo>
              {userInfo?.tickets?.length && <Detail><Label>Seat no</Label> {userInfo?.tickets[0]?.seatNumber}</Detail>}
            </UserInfo>

          </InfoDetails>
          <DottedDivider />
          <QrCode src="https://pngimg.com/uploads/qr_code/qr_code_PNG10.png" alt="QR Code" />
        </TicketContainer>
        <Footer>
          <img src="/footer-fram.png" alt="Footer Frame" />
          <a href="https://www.repozitory.com/" target='blank'>
            <PowerBy>Powered by Repozitory</PowerBy>
          </a>
        </Footer>
      </Container>
    </div>
  )
};

export default Ticket;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    align-items: center;
    justify-content: center;
    height: 100vw;
`;

const TicketContainer = styled.div`
  width: 350px;
  border: 2px solid #fff;
  border-radius: 20px;
  padding: 20px;
  position: relative;
  background-color: white;
  text-align: center;
  overflow: hidden;
  box-shadow: 0px 4px 10px 0px #00000026;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    border: 2px solid #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &::before {
    left: -20px;
    top: 56%;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    // box-shadow: inset 1px 1px 8px -2px rgba(0, 0, 0, 0.55);
  }

  &::after {
    right: -20px;
    top: 56%;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    // box-shadow: inset 1px 1px 8px -2px rgba(0, 0, 0, 0.55);
  }
`;

const Title = styled.div`
  font-size: 20px;
  line-height: 30px;
  font-weight: 600;
  color: #313030;
`;

const SolidDivider = styled.div`
  border-top: 1px solid #CCCCCC;
  margin: 10px 0;
`;

const DottedDivider = styled.div`
  border-top: 1px dashed #CCCCCC;
  margin-top: 25px;
`;

const InfoDetails = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TicketInfo = styled.div`
  margin: 10px 0;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.p`
    color: #827f7f;
    font-size: 16px;
    font-weight: 300;
`;

const Detail = styled.div<{ $isZone?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    line-height: 10px;
    font-size: 18px;
    color: #313030;
    width: ${({ $isZone }) => ($isZone ? '32%' : 'auto')};
    font-weight: 500;
`;

const QrCode = styled.img`
    width: 200px;
    height: 200px;
    margin: 20px 0px;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
`;

const Footer = styled.div`
    margin-top: 25px;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const PowerBy = styled.div`
    color: #0089EB;
    margin-top: 10px;
`;