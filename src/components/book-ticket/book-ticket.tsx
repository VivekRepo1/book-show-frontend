import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoMdTime } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { useParams } from 'react-router-dom';

const BookTicket = () => {
  const { id } = useParams<{ id: string }>();
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    fetch(`https://www.bookshow.online/api/reservation/${id}`)
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
  }, [id]);


  return (
    <div>
      <Container>
        <TicketContainer>
          <Title>Sangini Presents - A stand up comedy show</Title>
          <TicketInfo>
            <Info>
              <span>
                <MdDateRange /> 10th January, 2025
              </span>
              <span>
                <IoMdTime /> 10:00AM - 1:00PM
              </span>
            </Info>
            <Place><CiLocationOn /> Midtown Grand, Hisar, HR</Place>
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
          <QrCode src={userInfo.qrCode} alt="QR Code" />
        </TicketContainer>
        <Footer>
          <FooterImg src="/footer-fram.png" alt="Footer Frame" />
          <a href="https://www.repozitory.com/#contact_us" target='blank'>
            <PowerBy>Contact Repozitory if you need a ticketing solution.</PowerBy>
          </a>
        </Footer>
      </Container>
    </div>
  )
};

export default BookTicket;

const breakpoints = {
  mobile: '480px',  // Mobile devices
  tablet: '768px',  // Tablet devices
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const TicketContainer = styled.div`
  width: 350px;
  border: 2px solid #fff;
  border-radius: 20px;
  padding: 10px 20px;
  position: relative;
  background-color: white;
  text-align: center;
  overflow: hidden;
  box-shadow: 0px 4px 10px 0px #00000026;

  @media (max-width: ${breakpoints.tablet}) {
    width: 300px;
    border-radius: 10px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 250px;
    border-radius: 10px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    border: 2px solid #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &::before {
    left: -25px;
    top: 60%;
    // box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    box-shadow: inset 0px 0px 11px -2px #bab4b4;
    @media (max-width: ${breakpoints.tablet}) {
      top: 62%;
      width: 45px;
      height: 45px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      top: 60%;
      width: 40px;
      height: 40px;
    }
  }

  &::after {
    right: -25px;
    top: 60%;
    box-shadow: inset 0px 0px 11px -2px #bab4b4;
    @media (max-width: ${breakpoints.tablet}) {
      top: 62%;
      width: 45px;
      height: 45px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      top: 60%;
      width: 40px;
      height: 40px;
    }
  }
`;

const Title = styled.div`
  font-size: 20px;
  line-height: 30px;
  font-weight: 600;
  color: #313030;
  margin-bottom: 15px;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
    margin-bottom: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
    margin-bottom: 10px;
    line-height: 20px;
  }
`;

const Info = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  & span {
    gap: 5px;
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 14px;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    font-size: 14px;
    gap: 10px;
  }
`;

const Place = styled.p`
  font-size: 14px;
  @media (max-width: ${breakpoints.mobile}) {
    margin: 8px;
  }
`;

const SolidDivider = styled.div`
  border-top: 1px solid #CCCCCC;
`;

const DottedDivider = styled.div`
  border-top: 1px dashed #CCCCCC;
  margin-top: 35px;
`;

const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const TicketInfo = styled.div``;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.p`
  color: #827f7f;
  font-size: 16px;
  font-weight: 300;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
  }
`;

const Detail = styled.div<{ $isZone?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  line-height: 10px;
  font-size: 18px;
  color: #313030;
  width: ${({ $isZone }) => ($isZone ? '31%' : 'auto')};
  font-weight: 500;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
    width: ${({ $isZone }) => ($isZone ? '33%' : 'auto')};
  }
`;

const QrCode = styled.img`
  width: 160px;
  height: 160px;
  margin-top: 10px;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
  @media (max-width: ${breakpoints.tablet}) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 150px;
    height: 150px;
  }
`;

const Footer = styled.div`
  margin-top: 25px;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 10px;
  }
`;

const PowerBy = styled.div`
  color: #0089EB;
  margin-top: 10px;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;

const FooterImg = styled.img`
  @media (max-width: ${breakpoints.tablet}) {
    width: 200px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 150px;
  }
`;