import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Schedule from "./components/schedule/Schedule";
import Shows from "./components/shows/Shows";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/schedule")
      .then((res) => setSchedule(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(schedule, "scheduleeeee");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Schedule scheduleData={schedule} />}
          />
          <Route exact path="/show/:id" element={<Shows />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
