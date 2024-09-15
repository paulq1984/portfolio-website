import React from "react";
import ProjectsCSS from "./Projects.module.css";

function Projects() {
  return (
    <>
      <section id="projects">
        <div className={ProjectsCSS.project}>
          <h2>Things I've Done!</h2>
          <p>A collect of projects</p>
          <div className={ProjectsCSS.project_cards}>
            <div className={ProjectsCSS.project_card}>
              <h3>Tube-Checker</h3>
              <p>
                {" "}
                Using Transport for Londons API, I've produced a line status
                checker for the London Underground. It shows the status of the
                line and any delays and reason for the delays. I have used React
                and Tailwind.{" "}
              </p>
              <a href="https://github.com/paulq1984/tube-checker">Code</a>
              <a href="https://paulq1984.github.io/tube-checker/">
                Tube-Checker
              </a>
              <a href="https://api.tfl.gov.uk/">Transport for London API</a>
            </div>
            <div className={ProjectsCSS.project_card}>
              <h3>Faversham Weather Station</h3>
              <p>
                {" "}
                My Dad runs a local weather service back in England and I hate
                his php website. So I produced a basic dashboard which using
                data froma web scraper to get the data from his website.
              </p>
              <p>
                PLEASE NOTE: The Web Scraper is running on a free server, please
                refresh until data is shown.
              </p>
              <a href="https://github.com/paulq1984/Faversham-Weather_Station">
                Code
              </a>
              <a href="https://paulq1984.github.io/Faversham-Weather_Station/">
                My version - Faversham Weather Station
              </a>
              <a href="https://favershamweather.org/pwsWD/index.php">
                Offical - Faversham Weather Station
              </a>
            </div>
            <div className={ProjectsCSS.project_card}>
              <h3>Perth Veteran's Banners</h3>
              <p>
                Every year in Perth, On. They place the banners of Veterans
                around the town for Remembrance Day. My father in law has a
                banner up and it was always frustrating sharing its location
                with people, So i produce an web app where you can share your
                Veterans banner.{" "}
              </p>
              <a href="">Coming Soon</a>
            </div>
            <div className={ProjectsCSS.project_card}>
              <h3>League Admin</h3>
              <p>
                As someone who has been a player, coach and referee in Ontraio,
                the websites used to manage these activities are slow. I'm
                developing a solution which will run on a MERN stack.
              </p>
              <a href="">Coming Soon</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
