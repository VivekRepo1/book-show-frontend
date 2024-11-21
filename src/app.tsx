import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BookTicket from './components/book-ticket/book-ticket';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<BookTicket />} />
      </Routes>
    </Router>
  );
}

export default App;
