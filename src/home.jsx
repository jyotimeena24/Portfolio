import React from "react";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

function Home() {
  return (
    <>
      <Navbar />

      <div className=" min-h-screen bg-slate-600 text-white ">
        <div className="  p-8   mx-w-md">
          <h1 className="text-4xl font-bold  mb-4">Jyoti Kumari Meena</h1>
          <p className="text-xl  mb-2">React | DSA | CS</p>
          <p className="text-lg ">Rajasthan, India</p>
        </div>

        <div className="p-8 mx-w-md">
          <h1 className="text-4xl font-bold  mb-4">About me:</h1>
          <p className="text-2xl ">
            {" "}
            I’m a B.Tech Computer Engineering student at NIT Kurukshetra,
            graduating in May 2026. Passionate about DSA, Web Development,
            AI/ML, and Rust, I actively contribute to open-source projects,
            hackathons, and developer communities.
          </p>
        </div>

        <div className="p-8 mx-w-md">
          <h1 className="text-4xl font-bold  mb-4">Currently, i’m:</h1>
          <p className="text-2xl ">
            🚀 Enhancing problem-solving skills with DSA & competitive
            programming
          </p>
          <p className="text-2xl ">
            🛠️ Building projects using Rust, Next.js, and full-stack web
            technologies
          </p>
          <p className="text-2xl ">
            🤖 Exploring Machine Learning & AI for real-world applications
          </p>
        </div>

        <div className="p-8 mx-w-md">
          <h1 className="text-4xl font-bold  mb-4">skills:</h1>
          <p className="text-2xl">
            Languages: C/C++, Rust, Next.js, JavaScript, Python, Go, TypeScript
          </p>
          <p className="text-2xl">
            Core Areas: Data Structures & Algorithms, Machine Learning, Web3,
            System Design
          </p>
          <p className="text-2xl">
            Tools & Frameworks: React.js, Express.js, MongoDB, Tailwind CSS,
            Git/Github
          </p>
        </div>

        <div className="p-8 mx-w-md">
          <h1 className="text-4xl font-bold  mb-4">coding profiles:</h1>
          <span className="text-2xl">
            <a href="#">LeetCode</a> | <a href="#">CodeChef</a> |{" "}
            <a href="#">CodeForces</a>
          </span>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
