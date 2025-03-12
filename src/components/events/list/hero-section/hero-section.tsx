import { CiTimer } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

import {
  BackgroundImage,
  BuyNow,
  Container,
  EventCard,
  EventDetail,
  EventTitle,
  SubContainer
} from './styles';
import { formatDateAndTime } from "../../../constants";

const EventPage = ({ event }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <SubContainer>
        <BackgroundImage src={`${event?.images?.banner}`} alt="Event Background" />

        <EventCard>
          <EventTitle>{event?.title} - {event?.venue?.city}</EventTitle>
          <EventDetail>
            <FaCalendarAlt />
            <span>
              {formatDateAndTime(event?.startTime, "month")}
            </span>
            <CiTimer />
            <span>
              {formatDateAndTime(event?.startTime, "time")}
              {event?.endTime ? ` - ${formatDateAndTime(event?.endTime, "time")}` : ""}
            </span>
          </EventDetail>
          <EventDetail>
            <FaMapMarkerAlt />
            <span style={{ fontSize: 12, lineHeight: "16px" }}>{event?.venue?.address}: {event?.venue?.city}</span>
          </EventDetail>
          <BuyNow onClick={() => navigate(`/choose-ticket/${1}`)}>Buy Now</BuyNow>
        </EventCard>
      </SubContainer>
    </Container>
  );
};

export default EventPage;
