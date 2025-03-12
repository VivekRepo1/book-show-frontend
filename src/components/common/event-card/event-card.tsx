import { CiTimer } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

import {
  BuyButton,
  CardContainer,
  CardContent,
  CategoryTag,
  EventDetail,
  EventImage,
  EventTitle,
  ImageContainer,
  PriceRow,
  PriceTag
} from "./styles";

const EventCard = ({
  imageUrl,
  category,
  title,
  date,
  time,
  eventId,
  location,
  price,
  buttonLabel,
  bookingUrl,
}: any) => {
  const navigate = useNavigate();

  const handleBuyTicket = (e: any) => {
    e.stopPropagation();
    window.open(`${bookingUrl}`, "_blank");
  };

  return (
    <CardContainer onClick={() => navigate(`/event/${eventId}`)}>
      <ImageContainer>
        <EventImage src={imageUrl} alt={title} />
        {category && <CategoryTag>{category}</CategoryTag>}
      </ImageContainer>
      <CardContent>
        <EventTitle>{title}</EventTitle>
        <EventDetail>
          <FaCalendarAlt /> <span>{date}</span>
          <CiTimer /> <span>{time}</span>
        </EventDetail>
        <EventDetail>
          <FaMapMarkerAlt />
          <span>{location}</span>
        </EventDetail>
        {price && (
          <PriceRow>
            <PriceTag>₹{price}</PriceTag>
            {buttonLabel && (
              <BuyButton onClick={(e) => handleBuyTicket(e)}>{buttonLabel}</BuyButton>
            )}
          </PriceRow>
        )}
      </CardContent>
    </CardContainer>
  );
};

export default EventCard;
