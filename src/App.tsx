import './App.css';
import Main from './components/main/MainComponent';
import Navbar from './components/navbar/Navbar';
// https://www.anwita-arun.in/
function App() {
  return (
    <div className="px-10 pt-5 sm:px-20 xl:px-40">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
