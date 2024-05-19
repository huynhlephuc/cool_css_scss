import './App.css';
import './assets/index.scss';
// import { SlideCheckbox } from './components/checkbox/slide_checkbox';
// import { ChangeFontColor } from './components/font/change_font_color';
// import { SearchResponsive } from './components/search/search_responsive';
// import { LagText } from './components/font/lag_text';
// import FontCut from './components/font/font_cut';
import ShowLetter from './components/letter/show_letter';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <Spline scene="https://prod.spline.design/gz9kiKxKJBvdVKrl/scene.splinecode" />
  );
}
 

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <ShowLetter />
//       </header>
//     </div>
//   );
// }

export default App;
