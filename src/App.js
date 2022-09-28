import './App.css';
import './assets/index.scss';
// import { SlideCheckbox } from './components/checkbox/slide_checkbox';
// import { ChangeFontColor } from './components/font/change_font_color';
// import { SearchResponsive } from './components/search/search_responsive';
import { LagText } from './components/font/lag_text';
 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LagText />
      </header>
    </div>
  );
}

export default App;
