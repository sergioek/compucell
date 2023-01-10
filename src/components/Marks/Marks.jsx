import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
AOS.init();

export const Marks = () => {
  const arrayMarks = [
    "amd.png",
    "asus.jpg",
    "apple.jpg",
    "fujitsu.png",
    "genius.png",
    "gigabyte.png",
    "hp.jpg",
    "intel.png",
    "jbl.jpg",
    "kingston.jpg",
    "mercusys.png",
    "microsoft.png",
    "msi.jfif",
    "only.png",
    "redragon.png",
    "sentey.png",
    "tp-link.png",
    "wd.png",
  ];

  const [marks, setMarks] = useState([]);

  useEffect(() => {
    setMarks(arrayMarks);
  }, []);

  return (
    <div className="marksContainer container">
      <h2>Nuestras principales marcas</h2>

      <div
        className="marksContainer__items"
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        {marks.map((mark,index) => {
          return (
            <div
              className="markItem"
              data-aos="flip-left"
              data-aos-offset="50"
              data-aos-delay="50"
              data-aos-duration="500"
              key={index}
            >
              <img src={`/img/marks/${mark}`} alt={mark} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
