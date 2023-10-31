import Image from "next/image";
import cat from "../public/cat_portfolio.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        style={{
          margin: "60px",
          border: "5px solid black",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={cat}
            alt="profile"
            width={140}
            height={80}
            layout="intrinsic"
          />
        </div>
        <p style={{ fontSize: "30px" }}>
          <b></b>Sanjana Ammanagi<b></b>
        </p>
        <Link href="https://www.linkedin.com/in/sanjana-ammanagi/">
          <p
            style={{
              display: "inline-block",
              margin: "0 10px",
              color: "blue",
            }}
          >
            LinkedIn
          </p>
        </Link>
        <Link href="https://leetcode.com/Sanjana250503/">
          <p
            style={{ display: "inline-block", margin: "0 10px", color: "blue" }}
          >
            LeetCode
          </p>
        </Link>
        <p style={{ textAlign: "center", color: "Red 400" }}>
          I am a seasoned Software Development Engineer with strong proficiency
          in both Java and Python. My experience in software development spans
          various domains, allowing me to tackle a broad spectrum of projects
          with precision and creativity. Furthermore, I bring to the table a
          deep understanding of Machine Learning, having successfully designed
          and implemented cutting-edge ML solutions that have delivered tangible
          results. My passion for technology, problem-solving, and continuous
          learning fuels my commitment to delivering robust, efficient, and
          innovative software solutions.
        </p>
      </div>
    </>
  );
}
