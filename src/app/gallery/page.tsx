'use client'; 
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const GalleryPage: React.FC = () => {

  return (
    <div className="container">
      <div className="description panel blue">
        <div>
          SCROLL DOWN
          <div className="scroll-down">
            <div className="arrow">
            </div>
          </div>
        </div>
      </div>

      <div className="panel">
        ONE
      </div>
      <section className="panel orange">
        TWO
      </section>
      <section className="panel purple">
        THREE
      </section>
    </div>
    /* 
    <div ref={containerRef} className="container" style={{ overflow: 'hidden' }}>
      <div className="panel" ref={el => el && panelsRef.current.push(el)}>Panel 1</div>
      <div className="panel" ref={el => el && panelsRef.current.push(el)}>Panel 2</div>
      <div className="panel" ref={el => el && panelsRef.current.push(el)}>Panel 3</div>
    </div>
    */
  );
};

export default GalleryPage;