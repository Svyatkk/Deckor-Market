import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Імпортуємо компоненти роутера
import './App.css';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
// Імпортуйте сторінку детальної інформації (переконайтесь у правильності шляху)
import BookInformation from './Components/Pages/BookInformation';
import ShowCategoryBooks from './Components/ShowCategoryBooks/ShowCategoryBooks';
import CatalogPanel from './Components/CatalogPanel/CatalogPanel';
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


          <Route path="/book/:name" element={<BookInformation />} />

          <Route path="/category/:mainCategory" element={<ShowCategoryBooks />} />

          <Route path="/category/:mainCategory/:subCategory" element={<ShowCategoryBooks />} />        </Routes>
      </div>
    </BrowserRouter>
  );
}




export default App;