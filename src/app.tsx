import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import BookTicket from './components/book-ticket/book-ticket';
import GhccEvents from './components/ghcc-events/ghcc-events';
// import ComingSoon from './components/coming-soon';
import Navbar from './components/common/navbar/navbar';
import EventList from './components/events/list/events';
import EventDetails from './components/events/view/event-details';
import { EventFilterProvider } from './components/context/event-filter-context';
import { FormProvider } from './components/context/form-context';
import ListYourEvent from './components/events/list-your-event';
// import ChooseTickets from './components/events/book-your-events/choose-tickets/choose-tickets';
// import OrderSummary from './components/events/book-your-events/order-summary/order-summary';
// import PurchaseTickets from './components/events/book-your-events/purchase-tickets/purchase-tickets';
// import ConfirmationDetails from './components/events/book-your-events/confirmation-details/confirmation-details';
import { EventProvider } from './components/context/events-context';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const routes = [
  { path: '/', element: <EventList /> },
  // { path: '/events', element: <EventList /> },
  { path: '/event/:id', element: <EventDetails /> },
  // { path: '/choose-ticket/:id', element: <ChooseTickets /> },
  // { path: '/checkout/:id/summary', element: <OrderSummary /> },
  // { path: '/:id/purchase-tickets', element: <PurchaseTickets /> },
  // { path: '/confirmation', element: <ConfirmationDetails /> },
  { path: '/list-your-event', element: <ListYourEvent /> },
  // { path: '/about-us', element: <ComingSoon /> },
  // { path: '/contact', element: <ComingSoon /> },
  // { path: '/hisar', element: <ComingSoon /> },
  { path: '/:id', element: <BookTicket /> },
  { path: '/events/:id', element: <GhccEvents /> },
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <EventFilterProvider>
      <FormProvider>
        <EventProvider>
          <Navbar />
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </EventProvider>
      </FormProvider>
    </EventFilterProvider>
  </QueryClientProvider>
);

export default App;
