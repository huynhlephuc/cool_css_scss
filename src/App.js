import './App.css';
import './assets/index.scss';
// import { SlideCheckbox } from './components/checkbox/slide_checkbox';
// import { ChangeFontColor } from './components/font/change_font_color';
import { SearchResponsive } from './components/search/search_responsive';
 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchResponsive />
      </header>
    </div>
  );
}

export default App;
