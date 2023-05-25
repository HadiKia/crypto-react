import React, { useEffect } from "react";

// style
const spanStyle = 'text-[#5367FF] font-medium'

const About = () => {
  useEffect(() => {
    document.title = "About Project";
  }, []);

  return (
    <div className="container max-w-screen-xl mx-auto h-screen bg-[#e6e9f2] md:bg-white px-4 py-8">
      <div className="bg-white py-5 px-4 md:p-6 lg:p-8 xl:p-9 rounded-xl text-left text-[#232530]">
        <h1 className="text-2xl font-medium mb-4">About Project</h1>
        <div className="text-lg leading-8">
          <p>Hello, I'm Hadi Kia and I'm a junior FrontEnd developer.</p>
          <p>This website has been developed using <span className={spanStyle}>React js</span> and <span className={spanStyle}>Tailwind CSS</span>, and uses <span className={spanStyle}>SPA</span> to provide a better user experience. It also uses <a href="https://www.coingecko.com/" className={`${spanStyle} border-b border-[#5367FF]`}>API</a>s to get coins.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
