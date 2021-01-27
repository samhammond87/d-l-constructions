import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [timesheet, setTimesheet] = useState([]);

  const handleClick = () => {
    fetch("http://localhost:3000/api/timesheets")
      .then((response) => response.json())
      .then((data) => setTimesheet(data))
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <button onClick={handleClick}>Get Timesheets</button>
      {timesheet.map((timesheet, index) => {
      return (
        <ul key={index}>
          <li>Name: {timesheet.name}</li>
          <li>Date: {timesheet.date}</li>
          <li>Start Time: {timesheet.start_time}</li>
          <li>End Time: {timesheet.end_time}</li>
          <li>Total Hours: {timesheet.total_hours}</li>
          <li>Comments: {timesheet.comments}</li>
          {/* <li>Posted: {timesheet.created_at}</li> */}
        </ul>
        )
      })}
    </>
  );
};

export default Home;
