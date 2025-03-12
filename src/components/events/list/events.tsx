import styled, { keyframes } from 'styled-components';

import withFooter from '../../hoc/with-footer';
import HeroSection from './hero-section/hero-section';
import PublicEvent from './public-event/public-event';
import EventCarousel from './event-carousel/event-carousel';
import UpcomingEvent from './upcoming-event/upcoming-events';
import SearchAndFilter from './search-and-filter/search-and-filter';
import { useEventContext } from '../../context/events-context';

const EventList = () => {
  const { events, isFetching } = useEventContext();

  if (isFetching) {
    return (
      <LoaderWrapper>
        <Loader />
        <p>Loading...</p>
      </LoaderWrapper>
    );
  }

  return (
    <Container>
      <EventCarousel slides={events?.map((event) => event?.images?.banner)} />
      <HeroSection event={events && events.length && events[0]} />
      <SearchAndFilter />
      <UpcomingEvent />
      <PublicEvent events={events} />
    </Container>
  );
};

export default withFooter(EventList);

const Container = styled.div`
  margin-top: 60px;
  justify-content: center;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 4px solid gray;
  border-top: 4px solid #333;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spin} 0.9s linear infinite;
`;

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #F6F6F6;
  color: #333;
  font-size: 16px;
`;
