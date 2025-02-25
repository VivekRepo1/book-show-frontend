import { useNavigate, useParams } from "react-router-dom";
import { CiTimer } from "react-icons/ci";
// import { FaXTwitter } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";
import { FaLink } from 'react-icons/fa';
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

import { EVENTS_DATA } from "../../../constants";
import {
    BuyButton,
    CardContent,
    Container,
    CopyLinkButton,
    EventDetail,
    IconContainer,
    // IconLink,
    Image,
    NotFound,
    PriceRow,
    PriceTag,
    Section,
    ShareContainer,
    ShareText,
    Title
} from "./styles";

const BasicInfo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const eventDetails = EVENTS_DATA.find(event => event.id === Number(id));

    if (!eventDetails) {
        return (
            <NotFound>
                Oops! Event Not Found
            </NotFound>
        );
    }

    return (
        <Container>
            <Image src={eventDetails.imageUrl} alt="error_404" />
            <Section>
                <CardContent>
                    <Title>{eventDetails.title}</Title>
                    <EventDetail>
                        <FaCalendarAlt /> <span>{eventDetails.date}</span>
                        <CiTimer /> <span>{eventDetails.time}</span>
                    </EventDetail>
                    <EventDetail>
                        <FaMapMarkerAlt />
                        <span>{eventDetails.location}</span>
                    </EventDetail>
                    <PriceRow>
                        <PriceTag><MdCurrencyRupee size={15} />{eventDetails.price}</PriceTag>
                        <BuyButton onClick={() => navigate(`/choose-ticket/${id}`)}>Buy Ticket</BuyButton>
                    </PriceRow>
                </CardContent>
                <ShareContainer>
                    <ShareText>Share this event</ShareText>
                    <IconContainer>
                        {/* <IconLink
                            href="#"
                            target='_blank'
                            $isFacebook={false}
                        >
                            <FaXTwitter />
                        </IconLink> */}
                        {/* <IconLink
                            href="https://www.facebook.com/repozitory/"
                            target='_blank'
                            $isFacebook={true}
                        >
                            <FaFacebookF />
                        </IconLink> */}
                        <CopyLinkButton>
                            <FaLink /> Copy link
                        </CopyLinkButton>
                    </IconContainer>
                </ShareContainer>
            </Section>
        </Container>
    );
};

export default BasicInfo;
