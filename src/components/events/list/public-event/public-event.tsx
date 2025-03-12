import styled from "styled-components";

import { formatDateAndTime } from "../../../constants";
import EventCard from "../../../common/event-card/event-card";

const PublicEvent = ({ events }) => {

  if (events?.length === 0) {
    return (
      <Container>
        <EmptyMessage>No upcoming events available</EmptyMessage>
      </Container>
    );
  }


  return (
    <Container>
      <SubContainer>
        <Title>Public Events</Title>
        <GridContainer>
          {events
            ?.filter(event => event.isPublic === true)
            .map(event => (
              <EventCard
                key={event._id}
                eventId={event._id}
                imageUrl={event?.images?.banner}
                category={event.category}
                title={`${event.title} | ${event.venue.city}`}
                date={formatDateAndTime(event.startTime, "month")}
                time={`${formatDateAndTime(event.startTime, "time")}
              ${event.endTime ? ` - ${formatDateAndTime(event.endTime, "time")}` : ""}`}
                location={`${event.venue.address}, ${event.venue.city}`}

              />
            ))}
        </GridContainer>
      </SubContainer>
    </Container>
  )
};

export default PublicEvent;

const Container = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F6F6F6;
  margin-top: 40px;
`;

const SubContainer = styled.div`
  position: relative;
  width: 90%;
  padding-bottom: 40px;
`;


const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #283F93;
  margin-bottom: 20px;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
  align-items: center;

  grid-template-columns: 1fr;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  & > * {
    width: 100%;
  }
`;

const EmptyMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 18px;
  font-weight: bold;
  color: #555;
  text-align: center;
`;
