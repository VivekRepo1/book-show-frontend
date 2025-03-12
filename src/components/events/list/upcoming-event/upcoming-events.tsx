import { useQuery } from "@tanstack/react-query";

import { formatDateAndTime } from "../../../constants";
import EventCard from "../../../common/event-card/event-card";
import { useEventFilter } from "../../../context/event-filter-context";
import { EventService } from "../../../../service/event-service";
import { Container, EmptyMessage, GridContainer, Loader, LoaderWrapper, SubContainer, Title } from "./styles";

const UpcomingEvent = () => {
  const { filters } = useEventFilter();

  const eventService = new EventService();

  const { data: filterEvents, isFetching } = useQuery({
    queryKey: ["get-events", filters],
    queryFn: () => eventService.getAll(filters),
    enabled: !!filters,
  });

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
      <SubContainer>
        <Title>Upcoming Events</Title>
        {filterEvents?.length !== 0 ? <GridContainer>
          {filterEvents
            ?.filter(event => event.isPublic === false)
            .map(event => {
              console.log(" HELLO EEEEEEEEEEeee ", event.bookingUrl);
              return (
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
                  price={event.price}
                  bookingUrl={event.bookingUrl}
                  buttonLabel="Buy Ticket"
                />
              )
            })}
        </GridContainer>
          : <EmptyMessage>No upcoming events available</EmptyMessage>}
      </SubContainer>
    </Container>
  );
};

export default UpcomingEvent;
