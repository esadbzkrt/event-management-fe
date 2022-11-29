import './App.css';
import Header from "./components/Header/Header";
import EventList from "./components/EventList/EventList";
import AddEvent from "./components/EventList/AddEvent/AddEvent";
import EditEvent from "./components/EventList/AddEvent/AddEvent";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header/>
        <Router>
            <Routes>
                <Route path="/" exact element={<EventList />} />
                <Route path="/add" element={<AddEvent />} />
                <Route path="/edit" element={<EditEvent />} />
            </Routes>
        </Router>

    </div>
  );
}

export default App;
