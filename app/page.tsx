import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="m-12 border-5 border-black text-center">
        <div className="flex items-center justify-center">
          <Image
            src="/cat_portfolio.jpg"
            alt="profile"
            width={140}
            height={80}
          />
        </div>
        <p className="text-3xl">
          <b>Sanjana Ammanagi</b>
        </p>
        <Link href="https://www.linkedin.com/in/sanjana-ammanagi/">
          <p className="inline-block m-4 text-blue-500">LinkedIn</p>
        </Link>
        <Link href="https://leetcode.com/Sanjana250503/">
          <p className="inline-block m-4 text-blue-500">LeetCode</p>
        </Link>
        <p className="text-red-400">
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
