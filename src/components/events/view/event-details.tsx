import styled from 'styled-components';

import Gallery from './gallery/gallery';
import BasicInfo from './basic-info/basic-info';
import AboutEvent from './about-event/about-event';
import TrendingEvents from './trending-events/trending-events';
import withFooter from '../../hoc/with-footer';

const EventDetails = () => (
    <Container>
        <BasicInfo />
        <AboutEvent />
        <Gallery />
        <TrendingEvents />
    </Container>
);

export default withFooter(EventDetails);

const Container = styled.div`
    width: 100%;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
