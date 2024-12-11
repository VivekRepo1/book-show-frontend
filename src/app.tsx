import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BookTicket from './components/book-ticket/book-ticket';
import GhccEvents from './components/ghcc-events/ghcc-events';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<BookTicket />} />
        <Route path="/events/:id" element={<GhccEvents />} />
      </Routes>
    </Router>
  );
}

export default App;
