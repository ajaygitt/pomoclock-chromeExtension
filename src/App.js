import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <div className="container mx-auto bg-primary h-screen">

      <div className="text-center text-xl font-bold">
        Pomoclock
      </div>
      <div>
        <Timer />
      </div>


    </div>
  );
}

export default App;
