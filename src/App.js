import './App.css';
import Header from "./components/Header/Header";
import EventList from "./components/EventList/EventList";
import AddEvent from "./components/EventList/AddEvent/AddEvent";
import EditEvent from "./components/EventList/EditEvent/EditEvent";
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
                <Route path="/add" exact element={<AddEvent />} />
                <Route path="/edit/:id" exact element={<EditEvent />} />
            </Routes>
        </Router>

    </div>
  );
}

export default App;
