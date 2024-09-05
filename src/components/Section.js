import React from 'react';
import './section.css';

function Section() {
  return (
    <div>
      <section id="home" className="text-center text-light"> 
      <div className="full-screen">
       <p>Istiyaq khan Razin</p>
       </div>
       <div className="articles">
           <article className="article">
               <h2>HI I AM RAZIN</h2>
               <p>HI,my name is <strong>Istiyaq khan Razin </strong>.I came from Bangladesh.l live in Sylhet,Bangladesh.I am 15 years old.I’m a student at 8.My favorite subject is Math.My hobbies are surfing  internet.I would like to be a engineer. </p>
           </article>
       </div>
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
