import React, { useState,useEffect } from 'react'
import "animate.css";

export const Marks = () => {
  const arrayMarks = ['amd.png', 'asus.jpg', 'apple.jpg', 'fujitsu.png', 'genius.png', 'gigabyte.png', 'hp.jpg', 'intel.png', 'jbl.jpg', 'kingston.jpg', 'mercusys.png', 'microsoft.png', 'msi.jfif', 'only.png', 'redragon.png', 'sentey.png', 'tp-link.png', 'wd.png'];

  const [marks, setMarks] = useState([]);

  useEffect(() => {
    console.log('sa')
    setMarks(arrayMarks)
  },[])
  
  
  return (
    <div className="marksContainer container">
      <h2 className="animate__animated animate__bounce">
        Nuestras principales marcas
      </h2>

      <div className="marksContainer__items">
        {marks.map((mark) => {
          return (
            <div className="markItem">
              <img src={`/img/marks/${mark}`} alt={mark} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

