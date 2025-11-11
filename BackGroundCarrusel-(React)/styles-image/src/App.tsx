"use client";

import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    {
      title: "Lossless Youths",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi.",
      image:
        "url('https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg')",
    },
    {
      title: "Estrange Bond",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi.",
      image: "url('https://i.redd.it/tc0aqpv92pn21.jpg')",
    },
    {
      title: "The Gate Keeper",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi.",
      image: "url('https://wharferj.files.wordpress.com/2015/11/bio_north.jpg')",
    },
    {
      title: "Last Trace Of Us",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi.",
      image: "url('https://images7.alphacoders.com/878/878663.jpg')",
    },
    {
      title: "Urban Decay",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi.",
      image:
        "url('https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg')",
    },
    {
      title: "The Migration",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi.",
      image: "url('https://da.se/app/uploads/2015/09/simon-december1994.jpg')",
    },
  ]);

  // 👉 Simula el "slider.append(items[0])"
  const nextSlide = () => {
    setItems((prev) => [...prev.slice(1), prev[0]]);
  };

  // 👉 Simula el "slider.prepend(items[last])"
  const prevSlide = () => {
    setItems((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  return (
    <main>
      <ul className="slider">
        {items.map((item, i) => (
          <li
            key={i}
            className="item"
            style={{ backgroundImage: item.image }}
          >
            <div className="content">
              <h2 className="title">“{item.title}”</h2>
              <p className="description">{item.description}</p>
              <button>Read More</button>
            </div>
          </li>
        ))}
      </ul>

      <nav className="nav">
        <button className="btn prev" onClick={prevSlide}>
          prev
        </button>
        <button className="btn next" onClick={nextSlide}>
          nex
        </button>
      </nav>

  
    </main>
  );
}

export default App;
