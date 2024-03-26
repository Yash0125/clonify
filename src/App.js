import './App.css';
import BodyContent from './components/BodyContent/BodyContent';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
    <div className="app-container">
      <Sidebar/>
      <BodyContent/>
    </div>
    </>
  );
}

export default App;
