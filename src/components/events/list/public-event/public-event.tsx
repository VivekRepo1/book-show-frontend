import styled from "styled-components";

import { EVENTS_DATA } from "../../../constants";
import EventCard from "../../../common/event-card/event-card";

const PublicEvent = () => (
  <Container>
    <SubContainer>
      <Title>Public Events</Title>
      <GridContainer>
        {EVENTS_DATA.map(event => (
          <EventCard
            key={event.id}
            imageUrl={event.imageUrl}
            title={event.title}
            date={event.date}
            time={event.time}
            eventId={event.id}
            location={event.location}
          />
        ))}
      </GridContainer>
    </SubContainer>
  </Container>
);

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
