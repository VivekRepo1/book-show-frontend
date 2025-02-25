import { Route, Routes } from 'react-router-dom';

import BookTicket from './components/book-ticket/book-ticket';
import GhccEvents from './components/ghcc-events/ghcc-events';
import CommingSoon from './components/comming-soon';
import Navbar from './components/common/navbar/navbar';
import EventList from './components/events/list/events';
import EventDetails from './components/events/view/event-details';
import ChooseTickets from './components/choose-tickets/choose-tickets';
import OrderSummary from './components/order-summary/order-summary';
import ConfirmationDetails from './components/confirmation-details/confirmation-details';
import PurchaseTickets from './components/purchase-tickets/purchase-tickets';
import ListYourEvent from './components/list-your-event/list-your-event';
import { EventFilterProvider } from './components/context/event-filter-context';

const routes = [
  { path: '/', element: <CommingSoon /> },
  { path: '/events', element: <EventList /> },
  { path: '/event/:id', element: <EventDetails /> },
  { path: '/choose-ticket/:id', element: <ChooseTickets /> },
  { path: '/checkout/:id/summary', element: <OrderSummary /> },
  { path: '/:id/purchase-tickets', element: <PurchaseTickets /> },
  { path: '/confirmation', element: <ConfirmationDetails /> },
  { path: '/list-your-event', element: <ListYourEvent /> },
  { path: '/about-us', element: <CommingSoon /> },
  { path: '/contact', element: <CommingSoon /> },
  { path: '/hisar', element: <CommingSoon /> },
  { path: '/:id', element: <BookTicket /> },
  { path: '/events/:id', element: <GhccEvents /> },
];

const App = () => (
  <EventFilterProvider>
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
  </EventFilterProvider>
);

export default App;

