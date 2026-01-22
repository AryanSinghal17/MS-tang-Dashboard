import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackGround from "./Components/BackGround/BackGround";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Explore from "./Components/Explore/Explore";
import Contact from "./Components/Contact/Contact";
import Dashboard from "./Components/Dashboard/Dashboard";



const App = () => {
  let heroData = [
    { text1: "Dive Into", text2: "what You love" },
    { text1: "Indulge", text2: "your passion" },
    { text1:"Give in to", text2: "your passion" },
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => count === 2 ? 0 : count + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ zoom: '75%' }}>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <div>
            <BackGround playStatus={playStatus} heroCount={heroCount}/>
            <Hero
              setPlayStatus={setPlayStatus}
              heroData={heroData[heroCount]}
              heroCount={heroCount}
              setHeroCount={setHeroCount}
              playStatus={playStatus}
            />
          </div>
        }/>
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;