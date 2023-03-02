import './App.css';
import './assets/index.scss';
// import { SlideCheckbox } from './components/checkbox/slide_checkbox';
// import { ChangeFontColor } from './components/font/change_font_color';
// import { SearchResponsive } from './components/search/search_responsive';
// import { LagText } from './components/font/lag_text';
// import FontCut from './components/font/font_cut';
// import ShowLetter from './components/letter/show_letter';
// import PageTurning from './components/book/PageTurning';
// import PageFlipOnClick from './components/book/PageFlipOnClick';
import BookWebReponsive from './components/template/BookWebReponsive';
 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookWebReponsive />
      </header>
    </div>
  );
}

export default App;
