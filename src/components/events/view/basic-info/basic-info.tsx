import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CiTimer } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";
import { FaLink } from 'react-icons/fa';
import { FaFacebookF, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

import { EVENTS_DATA, formatDateAndTime } from "../../../constants";
import {
    BuyButton,
    CardContent,
    Container,
    CopyLinkButton,
    EventDetail,
    IconContainer,
    IconLink,
    NotFound,
    PriceRow,
    PriceTag,
    Section,
    ShareContainer,
    ShareText,
    Title
} from "./styles";
import Carousel from "./carousel";

const BasicInfo = ({ event }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [copied, setCopied] = useState(false);

    const eventDetails = EVENTS_DATA.find(event => event.id === Number(id));

    // if (!eventDetails) {
    //     return (
    //         <NotFound>
    //             Oops! Event Not Found
    //         </NotFound>
    //     );
    // }

    const eventURL = window.location.href;
    // const eventTitle = encodeURIComponent(eventDetails.title);
    const twitterDMURL = `https://twitter.com/messages/compose?text=${encodeURIComponent(eventURL)}`;
    const facebookMessengerURL = `https://www.facebook.com/dialog/send?link=${encodeURIComponent(eventURL)}&app_id=YOUR_APP_ID&redirect_uri=${encodeURIComponent(eventURL)}`;

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy link:", err);
        }
    };

    return (
        <Container>
            {/* <Image src={eventDetails.imageUrl} alt="error_404" /> */}
            <Carousel slides={event?.images?.gallery} />
            <Section>
                <CardContent>
                    <Title>{event?.title} | {event?.venue?.city}</Title>
                    <EventDetail>
                        <FaCalendarAlt /> <span>{formatDateAndTime(event?.startTime, "month")}</span>
                        <CiTimer />
                        <span>
                            {`${formatDateAndTime(event?.endTime, "time")} - ${formatDateAndTime(event?.startTime, "time")}`}
                        </span>
                    </EventDetail>
                    <EventDetail>
                        <FaMapMarkerAlt />
                        <span>{`${event?.venue.address}, ${event?.venue.city}`}</span>
                    </EventDetail>
                    <PriceRow>
                        <PriceTag><MdCurrencyRupee size={15} />{event?.price}</PriceTag>
                        <BuyButton onClick={() => navigate(`/choose-ticket/${id}`)}>Buy Ticket</BuyButton>
                    </PriceRow>
                </CardContent>
                <ShareContainer>
                    <ShareText>Share this event</ShareText>
                    <IconContainer>
                        <IconLink
                            href={twitterDMURL}
                            target='_blank'
                            rel="noopener noreferrer"
                            $isFacebook={false}
                        >
                            <FaXTwitter />
                        </IconLink>
                        <IconLink
                            href={facebookMessengerURL}
                            target='_blank'
                            rel="noopener noreferrer"
                            $isFacebook={true}
                        >
                            <FaFacebookF />
                        </IconLink>
                        <CopyLinkButton onClick={handleCopyLink}>
                            <FaLink /> {copied ? "Copied!" : "Copy link"}
                        </CopyLinkButton>
                    </IconContainer>
                </ShareContainer>
            </Section>
        </Container>
    );
};

export default BasicInfo;
