import styled from "styled-components";

import EventCard from "../../../common/event-card/event-card";
import { useEventFilter } from "../../../context/event-filter-context";

const UpcomingEvent = () => {
  const { filteredEvents } = useEventFilter();

  if (filteredEvents.length === 0) {
    return (
      <Container>
        <EmptyMessage>No upcoming events available</EmptyMessage>
      </Container>
    );
  }

  return (
    <Container>
      <SubContainer>
        <Title>Upcoming Events</Title>
        <GridContainer>
          {filteredEvents.map(event => (
            <EventCard
              key={event.id}
              eventId={event.id}
              imageUrl={event.imageUrl}
              category={event.category}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              price={event.price}
              buttonLabel="Buy Ticket"
            />
          ))}
        </GridContainer>
      </SubContainer>
    </Container>
  );
};

export default UpcomingEvent;

const Container = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const SubContainer = styled.div`
  position: relative;
  width: 90%;
  overflow: hidden;
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
