import React from 'react';
import logo from './logogandalf.png';
import './App.css';
import Movie from './components/Movie'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Lord of The Rings: A Trilogy</h1>
      </header>
      <main>
        <div className="moviebox">
            <Movie title="Fellowship of The Ring" hours="2" minutes="58" imgUrl="https://lh5.googleusercontent.com/-9TYmcYDeY5Y/TYLQ5-7noaI/AAAAAAAAA7o/U8g_eCIcO2U/s1600/the-lord-of-the-rings-the-fellowship-of-the-ring-ofriginal.jpg" />
            <Movie title="The Two Towers" hours="2" minutes="59" imgUrl="https://1.bp.blogspot.com/-Rgx_1wY4jqg/UP_oNKW1oPI/AAAAAAAAA6o/rfwUMmrX3OE/s1600/lord+of+the+rings_two_towers_2.jpg" />
            <Movie title="The Return of the King" hours="3" minutes="21" imgUrl="https://image.tmdb.org/t/p/original/uexxR7Kw1qYbZk0RYaF9Rx5ykbj.jpg" />
        </div>
      </main>
    </div>
  );
}


export default App;
