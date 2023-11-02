import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="m-12 border-5 border-black text-left">
        <div className="rounded-full">
          <Image
            src="/cat_portfolio.jpg"
            alt="profile"
            width={100}
            height={100}
          />
        </div>

        <h1 className="text-3xl mt-4">
          <b>Sanjana Ammanagi</b>
        </h1>
        <div className="mt-1 mb-1">
          <Link href="https://www.linkedin.com/in/sanjana-ammanagi/">
            <p className="inline-block mr-2 text-blue-500">LinkedIn</p>
          </Link>
          <Link href="https://leetcode.com/Sanjana250503/">
            <p className="inline-block ml-2 text-blue-500">LeetCode</p>
          </Link>
        </div>

        <p className="text-black text-justify">
          I am a seasoned Software Development Engineer with strong proficiency
          in both Java and Python. I bring to the table a deep understanding of
          Machine Learning, having successfully designed and implemented
          cutting-edge ML solutions . My passion for technology,
          problem-solving, and continuous learning fuels my commitment to
          delivering robust, efficient, and innovative software solutions.
        </p>
        <div>
          <h2 className="text-xl font-bold mt-3">Projects</h2>
          <p>Attendance Tracker</p>
          <p>Machine Learning</p>
        </div>
        <div>
          <h2 className=" text-xl font-bold mt-3">Education</h2>
          <p>Computer Science Engineering</p>
          <p>RNSIT</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mt-3">Certificates</h2>
          <p>Infosys springboard python</p>
          <p>AWS</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mt-3">Skills</h2>
          <p>Python</p>
          <p>Java</p>
        </div>
      </div>
    </>
  );
}
