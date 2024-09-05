import React from 'react';
import './section.css';

function Section() {
  return (
    <div>
      <section id="home" className="text-center text-light"> 
      This is home section 
    </section>
   <section id="about" className="text-center text-light">
       This is about section
   </section>
   <section id="blog" className="text-center text-light">
   This is blog section
   </section> 
   <section id="project" className="text-center text-light">
    This is project section
   </section>
    </div>
  );
}

export default Section;
