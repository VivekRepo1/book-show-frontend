import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import styled, { keyframes } from 'styled-components';

// import Gallery from './gallery/gallery';
import BasicInfo from './basic-info/basic-info';
import AboutEvent from './about-event/about-event';
// import TrendingEvents from './trending-events/trending-events';
import withFooter from '../../hoc/with-footer';
import { EventService } from '../../../service/event-service';

const EventDetails = () => {
    const { id } = useParams();

    const eventService = new EventService();

    const { data: event, isFetching } = useQuery({
        queryKey: ["get-event", id],
        queryFn: () => eventService.getOne(id),
        enabled: !!id,
    });

    if (isFetching) {
        return (
            <LoaderWrapper>
                <Loader />
                <p>Loading...</p>
            </LoaderWrapper>
        );
    }

    console.log(event)

    return (
        <Container>
            <BasicInfo event={event} />
            <AboutEvent event={event} />
            {/* <Gallery /> */}
            {/* <TrendingEvents /> */}
        </Container>
    );
}

export default withFooter(EventDetails);

const Container = styled.div`
    width: 100%;
    margin-top: 60px;
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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
