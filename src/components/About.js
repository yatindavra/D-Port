import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <h1 className="text-3xl font-bold">Hi Everyone, I am Yatin Davra from Gujarat, India.</h1>
        <p className="text-xl mt-10">
        I graduated from GEC-Bhuj in Mechanical Engineering.
<br />
<br />
        Apart from coding, some other activities that I love to do!
    <ul className="list-disc	">
      <br />
      <li> Sports</li>
      <li>Writting More Efficient Code</li>
      <li> Watching Movies</li>
    </ul>
       
        
    <br />
      
        "Strive to build things that make a difference!"
        </p>

        <br />

        
      </div>
    </div>
  );
};

export default About;
