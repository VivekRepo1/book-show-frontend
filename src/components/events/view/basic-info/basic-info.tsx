import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CiTimer } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { MdCurrencyRupee, MdPhone } from "react-icons/md";
import { FaLink } from 'react-icons/fa';
import { FaFacebookF, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

import { formatDateAndTime } from "../../../constants";
import {
    BuyButton,
    CardContent,
    ComingSoon,
    Container,
    CopyLinkButton,
    EventDetail,
    IconContainer,
    IconLink,
    MoreInfo,
    PriceRow,
    PriceTag,
    Section,
    ShareContainer,
    ShareText,
    Strong,
    Title
} from "./styles";
import Carousel from "./carousel";

const BasicInfo = ({ event }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [copied, setCopied] = useState(false);

    const eventURL = window.location.href;
    const twitterDMURL = `https://twitter.com/messages/compose?text=${encodeURIComponent(eventURL)}`;
    const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventURL)}`;

    const handleCopyLink = async () => {
        try {
            await navigator?.clipboard?.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy link:", err);
        }
    };

    const handleBuyTicket = (e: any) => {
        e.stopPropagation();
        window.open(`${event?.bookingUrl}`, "_blank");
    };

    return (
        <Container>
            <Carousel slides={event?.images?.gallery} />
            <Section>
                <CardContent>
                    <Title>{event?.title} | {event?.venue?.city}</Title>
                    {!event?.isComingSoon ? <>
                        <EventDetail>
                            <FaCalendarAlt /> <span>{formatDateAndTime(event?.startTime, "month")}</span>
                            <CiTimer />
                            <span>
                                {`${formatDateAndTime(event?.startTime, "time")} - ${formatDateAndTime(event?.endTime, "time")}`}
                            </span>
                        </EventDetail>
                        <EventDetail>
                            <FaMapMarkerAlt />
                            <span>{`${event?.venue.address}, ${event?.venue.city}`}</span>
                        </EventDetail></>
                        : <ComingSoon> Coming Soon... </ComingSoon>}
                    {event.price ? (
                        <PriceRow>
                            <PriceTag>
                                <MdCurrencyRupee size={15} />
                                {event.price}
                            </PriceTag>
                            <BuyButton onClick={handleBuyTicket}>Buy Ticket</BuyButton>
                        </PriceRow>
                    ) : (
                        <MoreInfo>
                            For more information:
                            <Strong>
                                <MdPhone size={15} />
                                {event?.organizer?.contact}
                            </Strong>
                        </MoreInfo>
                    )}
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
                            href={facebookShareURL}
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
