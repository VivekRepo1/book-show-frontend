import { BiCalendar, BiTime, BiMap } from 'react-icons/bi';
import { FaCheck } from "react-icons/fa";
import { FaFacebookF } from 'react-icons/fa';
import { PiPrinterLight } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

import {
  DateAndTime,
  DetailRow,
  EventDetails,
  EventTitle,
  ImageSection,
  InfoGrid,
  InfoItem,
  InfoSection,
  QRSection,
  Container,
  TicketWrapper,
  SubContainer,
  CheckCircle,
  GreenLine,
  CopyLinkButton,
  EmailLink,
  EmailText,
  IconContainer,
  IconLink,
  ShareContainer,
  ProgressBar,
  Subtitle,
  Title
} from './styles';

const ConfirmationDetails = () => {
  return (
    <Container>
      <SubContainer>
        <Title>Congratulations</Title>
        <Subtitle>Your purchase was successful</Subtitle>

        <ProgressBar>
          <CheckCircle><FaCheck /></CheckCircle>
          <GreenLine />
          <CheckCircle><FaCheck /></CheckCircle>
          <GreenLine />
          <CheckCircle><FaCheck /></CheckCircle>
        </ProgressBar>

        <EmailText>
          Your tickets are in your mailbox
          <EmailLink>abc@yourmail.com</EmailLink>
        </EmailText>
        <TicketWrapper>
          <ImageSection>
            <img
              src="/mehfil_sartaj.png"
              alt="Wonder Girls 2025"
            />
          </ImageSection>

          <InfoSection>
            <EventTitle>Wonder Girls 2025 | Bangalore</EventTitle>

            <EventDetails>
              <DateAndTime>
                <DetailRow>
                  <BiCalendar /> Feb 8
                </DetailRow>
                <DetailRow>
                  <BiTime /> 03PM - 09PM
                </DetailRow>
              </DateAndTime>
              <DetailRow>
                <BiMap /> Sri Kanteerava Outdoor Stadium,
                Bengaluru
              </DetailRow>
            </EventDetails>

            <InfoGrid>
              <InfoItem>
                <h4>Name</h4>
                <p>Anjali</p>
              </InfoItem>
              <InfoItem alignRight>
                <h4>Mobile number</h4>
                <p>1234569872</p>
              </InfoItem>
              <InfoItem>
                <h4>Ticket Category</h4>
                <p>General Admission</p>
              </InfoItem>
              <InfoItem alignRight>
                <h4>Zone</h4>
                <p>04</p>
              </InfoItem>
              <InfoItem>
                <h4>Seat no.</h4>
                <p>1356</p>
              </InfoItem>
            </InfoGrid>
          </InfoSection>

          <QRSection>
            <img
              src="/svg/qr-code.svg"
              alt="Wonder Girls 2025"
            />
          </QRSection>
        </TicketWrapper>

        <ShareContainer>
          <IconContainer>
            <IconLink
              href="#"
              target='_blank'
              $isFacebook={false}
            >
              <FaXTwitter />
            </IconLink>
            <IconLink
              href="https://www.facebook.com/repozitory/"
              target='_blank'
              $isFacebook={true}
            >
              <FaFacebookF />
            </IconLink>
            <CopyLinkButton>
              <PiPrinterLight size={20} /> Print
            </CopyLinkButton>
            <CopyLinkButton>
              <FaWhatsapp size={20} color="green" /> Send to WhatsApp
            </CopyLinkButton>
          </IconContainer>
        </ShareContainer>

      </SubContainer>
    </Container>
  );
};

export default ConfirmationDetails;
