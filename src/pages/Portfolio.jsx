import React from 'react';


const portfolioItems = [
  {
    image: '../src/assets/app1.jpg',
    name: 'Original Portfolio',
    repoLink: 'https://github.com/GarrettBritton/My-Portfolio',
    appLink: 'https://garrettbritton.github.io/My-Portfolio/'
  },
  {
    image: '../src/assets/app2.jpg',
    name: 'Payroll Tracker',
    repoLink: 'https://github.com/GarrettBritton/Payroll-Tracker',
    appLink: 'https://garrettbritton.github.io/Payroll-Tracker/'
  },
  {
    image: '../src/assets/app3.jpg',
    name: 'Local Storage Blog',
    repoLink: 'https://github.com/GarrettBritton/LocalStorage-Blog',
    appLink: 'https://garrettbritton.github.io/LocalStorage-Blog/'
  },
  {
    image: '../src/assets/app4.jpg',
    name: 'Chasing the Golden Hour',
    repoLink: 'https://github.com/GarrettBritton/ChasingtheGoldenHours',
    appLink: 'https://andrewpelfrey.github.io/ChasingtheGoldenHours/'
  },
  {
    image: '../src/assets/app5.jpg',
    name: 'Story Roulette',
    repoLink: 'https://github.com/GarrettBritton/Story-Roulette',
    appLink: 'https://story-roulette.onrender.com/'
  },
  {
    image: '../src/assets/app6.jpg',
    name: 'Task Board',
    repoLink: 'https://github.com/GarrettBritton/TaskBoard/settings/pages',
    appLink: 'https://garrettbritton.github.io/TaskBoard/'
  },
];

const Portfolio = () => {
    return (
      <section className="portfolio">
        <h1>Portfolio</h1>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-item">
              <a href={item.appLink} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                <div className="portfolio-image-container">
                  <img src={item.image} alt={item.name} className="portfolio-image" />
                  <div className="portfolio-overlay">
                    <p className="portfolio-text">{item.name}</p>
                    <a href={item.repoLink} target="_blank" rel="noopener noreferrer">
                      <img src="src/assets/github-logo.png" alt="GitHub" className="github-logo" />
                    </a>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Portfolio;