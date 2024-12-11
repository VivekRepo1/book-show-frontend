import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoMdTime } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { useParams } from 'react-router-dom';

const GhccEvents = () => {
  const { id } = useParams<{ id: string, page: string }>();
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    fetch(`https://www.tghcc.in/api/payments/get?orderId=${id}`)
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

  const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    bytes.forEach(byte => binary += String.fromCharCode(byte));
    return window.btoa(binary);
  };

  const binaryData = userInfo?.qrCode?.data;
  const base64String = arrayBufferToBase64(binaryData);

  return (
    <div>
      <Container>
        <TicketContainer>
          <Title>Opportunities in E-commerce</Title>
          <TicketInfo>
            <Info>
              <span>
                <MdDateRange /> 21th Dec, 2024
              </span>
              <span>
                <IoMdTime /> 09:00 AM
              </span>
            </Info>
            <Place><CiLocationOn /> Ch. Ranbir Singh Auditorium, <br /> GJU, Hisar</Place>
          </TicketInfo>
          <SolidDivider />
          <InfoDetails>
            <UserInfo>
              <Detail><Label>Name</Label> {userInfo?.name}</Detail>
              <Detail><Label>Phone number</Label> {userInfo?.phoneNo}</Detail>
            </UserInfo>
            <UserInfo>
              <Detail><Label>Number of Tickets</Label> {userInfo?.numberOfTickets}</Detail>
              <Detail $isZone={true}><Label>Total amount</Label> {userInfo?.amount}</Detail>
            </UserInfo>
          </InfoDetails>
          <DottedDivider />
          <QrCode
            src={`data:image/png;base64,${base64String}`}
            alt="Payment QR Code"
            style={{ width: '200px', height: '200px' }}
          />
        </TicketContainer>
        <Footer>
          <FooterImg src="/footer-fram.png" alt="Footer Frame" />
          <PoweredByHyperLink href="https://www.repozitory.com/#contact_us" target='blank'>
            <PowerBy>Powered by Repozitory</PowerBy>
          </PoweredByHyperLink>
          <ContactUsMessage>
            Contact <a href="tel:+919034269099">+919034269099</a> for your shows and events ticketing solution
          </ContactUsMessage>
        </Footer>
      </Container>
    </div>
  )
};

export default GhccEvents;

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
    top: 50%;
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
    top: 50%;
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
  margin-top: 1.8rem;
  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 1.8rem;
  }
`;

const PowerBy = styled.div`
  font-size: 0.85rem;
  text-decoration: underline;
  margin: 0;
  margin-top: 2px;
  color: #0089EB;
  font-size: 16px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.85rem;
    margin-top: 0px;
  }
`;

const FooterImg = styled.img`
  @media (max-width: ${breakpoints.tablet}) {
    width: 200px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 162px;
  }
`;

const PoweredByHyperLink = styled.a`
  margin-top: 0.5rem;
`;

const ContactUsMessage = styled.p`
  color: rgb(168, 168, 168);
  text-align: center;
  font-size: 0.9rem;
  max-width: 17rem;
  font-weight: 500;
  margin-block: 0.9rem 1rem;
`;