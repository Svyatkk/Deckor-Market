import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Імпортуємо компоненти роутера
import './App.css';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
// Імпортуйте сторінку детальної інформації (переконайтесь у правильності шляху)
import BookInformation from './Components/Pages/BookInformation';

function App() {
  return (
    <BrowserRouter> {/* Огортаємо весь додаток */}
      <div className="App">

        <Routes>
          {/* Головна сторінка */}
          <Route path="/" element={
            <Main>
              <Nav /> {/* Навігація зазвичай доступна на всіх сторінках */}

            </Main>
          } />

          {/* Сторінка книги. :id - це динамічний параметр */}
          <Route path="/book/:name" element={<BookInformation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;