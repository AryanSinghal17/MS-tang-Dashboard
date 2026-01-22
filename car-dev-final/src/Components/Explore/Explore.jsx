import "./Explore.css";
import { useEffect, useState } from "react";
import ImageBackground from "./ImageBackground"; 
const historyData = [
  {
    era: "1960s",
    model: "1965 Shelby GT350",
    overview: "A collaboration between Ford and Carroll Shelby, it set the foundation for future high-performance Mustangs.",
    details: "Equipped with a 271-hp 289-cubic-inch V8 and a special handling package.",
    source: "Car and Driver"
  },
  {
    era: "1970s",
    model: "1978 Mustang II King Cobra",
    overview: "A response to the oil crisis, offering a more compact design. The King Cobra marked the peak of the Mustang II era.",
    details: "Stood out with its V8 engine and distinctive cobra hood graphic.",
    source: "Car and Driver"
  },
  {
    era: "1980s",
    model: "1984 Mustang SVO",
    overview: "Ford's Special Vehicle Operations (SVO) introduced this model to compete with European sports cars.",
    details: "Powered by a 2.3-liter turbocharged four-cylinder engine, balancing performance and efficiency.",
    source: "American Cars And Racing"
  },
  {
    era: "1990s",
    model: "1995 Mustang GT",
    overview: "Marked the celebrated return of the fan-favorite 5.0-liter V8 engine.",
    details: "Featured subtle design updates and improved handling for a well-rounded experience.",
    source: "MotorTrend"
  },
  {
    era: "2000s",
    model: "2003-2004 Mustang Cobra",
    overview: "Developed by Ford's Special Vehicle Team (SVT), these models were nicknamed 'The Terminator'.",
    details: "Equipped with a supercharged 4.6-liter V8 producing over 390 horsepower.",
    source: "MotorTrend"
  },
  {
    era: "2010s",
    model: "2015 Shelby GT350",
    overview: "Celebrated the Mustang's 50th anniversary with a high-revving, exotic car-like experience.",
    details: "Featured a naturally aspirated 5.2-liter 'Voodoo' V8 with a flat-plane crankshaft, producing 526 hp.",
    source: "American Cars And Racing"
  },
  {
    era: "2020s",
    model: "2025 Mustang GTD",
    overview: "Represents Ford's commitment to blending traditional performance with modern, track-focused technology.",
    details: "A street-legal race car aiming for supercar performance levels.",
    source: "Ford"
  }
];

const mtTangSpecs = {
  engine: "5.2L Supercharged V8",
  torque: "625 lb-ft @ 4500 rpm",
  topSpeed: "200 mph (322 km/h)",
  fuelEfficiency: "14 city / 21 hwy MPG"
};

const Explore = () => {
  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="specs-container">
      <ImageBackground heroCount={heroCount} />
      
      <div className="content-overlay">
        <header className="main-header">
          <h1>MS-tang: Apex Predator</h1>
          <p>Engineered from a legacy of pure muscle.</p>
        </header>

        {/* Section for MT-Tang Specifications */}
        <section className="specs-section">
          <h2>Core Specifications</h2>
          <div className="specs-grid">
            <div className="spec-item">
              <h3>Engine</h3>
              <p>{mtTangSpecs.engine}</p>
            </div>
            <div className="spec-item">
              <h3>Torque</h3>
              <p>{mtTangSpecs.torque}</p>
            </div>
            <div className="spec-item">
              <h3>Top Speed</h3>
              <p>{mtTangSpecs.topSpeed}</p>
            </div>
            <div className="spec-item">
              <h3>Fuel Efficiency</h3>
              <p>{mtTangSpecs.fuelEfficiency}</p>
            </div>
          </div>
        </section>

        {/* Section for Historical Timeline */}
        <section className="history-section">
          <h2>A Legacy of Speed: The Mustang Heritage</h2>
          <div className="timeline-container">
            {historyData.map((car, index) => (
              <div className="timeline-card" key={index}>
                <span className="timeline-era">{car.era}</span>
                <h3>{car.model}</h3>
                <p className="timeline-overview">{car.overview}</p>
                <p className="timeline-details"><strong>Highlight:</strong> {car.details}</p>
                <span className="timeline-source">Source: {car.source}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Explore;