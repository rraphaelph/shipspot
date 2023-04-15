import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./Hero";
import Header from "./Header";
import About from "./AboutSection";
import Services from "./Services";
import Team from "./Team";

function App() {
  return (
    <div className="App">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ShipSpot</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />

        {/* Favicons */}
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

      </head>
      <body>
        <Header />
        <Hero />
        <About />
        <Team />
        <Services/>
      </body>
    </div>
  );
}

export default App;
