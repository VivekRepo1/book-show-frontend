import styled from 'styled-components';

import withFooter from '../../hoc/with-footer';
import HeroSection from './hero-section/hero-section';
import PublicEvent from './public-event/public-event';
import EventCarousel from './event-carousel/event-carousel';
import UpcomingEvent from './upcoming-event/upcoming-events';
import SearchAndFilter from './search-and-filter/search-and-filter';

const EventList = () => (
  <Container>
    <EventCarousel />
    <HeroSection />
    <SearchAndFilter />
    <UpcomingEvent />
    <PublicEvent />
  </Container>
);

export default withFooter(EventList);

const Container = styled.div`
  margin-top: 60px;
  justify-content: center;
`;
