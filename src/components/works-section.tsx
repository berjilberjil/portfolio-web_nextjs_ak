"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const works = [
  {
    id: 1,
    title: "Blynk - Pay with Credit Card",
    shortDescription:
      "Use Credit Card for Paying Vendors - Instant Payments made simple at 1%",
    longDescription:
      "Pay Vendors with Your Credit Card – Now at 1% only Blynk (Formerly Bulkpe) makes business payments smarter! Now, pay your vendors and utility bills seamlessly using your credit card and get 1% off on every transactions.",
    imageUrl: "/images/blynk.png",
    projectLink:
      "https://play.google.com/store/apps/details?id=com.app.bulkpe&hl=en_IN",
  },
  {
    id: 2,
    title: "Bulkpe WebApp",
    shortDescription: "Simplifying collections and payments for your Business",
    longDescription:
      "End-to-end banking and payments suite for businesses to scale and grow.",
    imageUrl: "https://bulkpe.in/assets/three_phone.webp",
    projectLink: "https://app.bulkpe.in/",
  },
  {
    id: 3,
    title: "BillO - Pay Bills & Get Reward",
    shortDescription:
      "BillO karo. Cashback pao - Pay all your bills in 1 tap & earn lifetime cashback",
    longDescription:
      "Meet BillO - Where Bills Turn Into Rewards.Powered by Bulkpe, BillO is India’s first one-tap bulk bill payment app with guaranteed cashback for a lifetime. Automate your electricity, mobile, water, gas, and 25+ Bill Payment services - and get rewarded instantly every time.",
    imageUrl: "/images/billO.png",
    projectLink:
      "https://play.google.com/store/apps/details?id=com.bulkpe.billO&hl=en_IN",
  },

  {
    id: 4,
    title: "DPCC App & WebApp",
    shortDescription:
      "Learning made easy with DP live classes & quizzes at your fingertips!",
    longDescription:
      "Developed the front-end of DP Career Connect LMS app, integrating live classes, quizzes, and interactive learning tools into a seamless, intuitive platform. Focused on speed, clarity, and a dynamic learning experience.",
    imageUrl: "/images/dp-mockup.jpg",
    projectLink:
      "https://play.google.com/store/apps/details?id=com.app.dpcareerconnect&hl=en",
    additionalLink: "https://joindpcc.click", // Added additional link
  },
  {
    id: 5,
    title: "Bulkpe Card",
    shortDescription:
      "Load money, spend anywhere online, and save big with Bulkpe Cards!",
    longDescription:
      "Introducing Bulkpe Cards, the ultimate prepaid card that makes every online spend rewarding! Whether you're shopping, paying bills, or subscribing to your favorite services, Bulkpe Cards gives you the power to load money easily and earn assured cashback on every transaction.",
    imageUrl: "/images/bulkpecard.png",
    projectLink:
      "https://play.google.com/store/apps/details?id=com.bulkpe.card.app&hl=en_IN",
  },
  {
    id: 6,
    title: "Chennai Business Loan - Bulkpe",
    shortDescription:
      "10 lakhs Loans for Chennai Businesses. Quick approval. Easy EMIs. 100% digital.",
    longDescription:
      "Chennai Business Loan is a financial app from Bulkpe, built to empower micro and small business owners across Chennai. Whether you're a shopkeeper, trader, service provider, or small manufacturer - we make it easy for you to get the credit you need to grow.chenna",
    imageUrl: "/images/chennai-loan.png",
    projectLink:
      "https://play.google.com/store/apps/details?id=com.chennailoanapp&hl=en_IN",
  },
];

function WorkCard({ work, onClick }: { work: Project; onClick: () => void }) {
  return (
    <motion.div
      className="bg-[#1C1C1C] rounded-lg overflow-hidden cursor-pointer shadow-lg"
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
    >
      <Image
        src={work.imageUrl}
        alt={work.title}
        width={400}
        height={300}
        className="w-full h-60 object-cover"
      />
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg md:text-xl font-semibold text-white">
            {work.title}
          </h3>
          {work.icon && <div>{work.icon}</div>}
        </div>
        <p className="text-sm md:text-base text-gray-400">
          {work.shortDescription}
        </p>
        <a
          href={work.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-4 py-2 rounded-md text-sm font-bold hover:bg-gray-200 transition-colors duration-200 mt-2"
        >
          View Project
        </a>
        {work.additionalLink && (
          <a
            href={work.additionalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-4 py-2 rounded-md text-sm font-bold hover:bg-gray-200 transition-colors duration-200 mt-2 ml-2"
          >
            WebApp
          </a>
        )}
      </div>
    </motion.div>
  );
}

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  projectLink: string;
  additionalLink?: string; // Added optional additionalLink property
  icon?: JSX.Element;
}

function ProjectPopup({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: -50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: -50 }}
        className="bg-[#1C1C1C] rounded-lg p-6 md:p-8 max-w-2xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-gray-300 transition-colors"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-48 md:h-64 object-cover rounded-lg mb-4 md:mb-6"
        />
        <div className="flex items-center justify-between mb-2 md:mb-4">
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            {project.title}
          </h3>
          {project.icon && <div>{project.icon}</div>}
        </div>
        <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6">
          {project.longDescription}
        </p>
        <a
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-4 py-2 rounded-md text-sm font-bold hover:bg-gray-200 transition-colors duration-200"
        >
          View Project
        </a>
        {project.additionalLink && (
          <a
            href={project.additionalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-4 py-2 rounded-md text-sm font-bold hover:bg-gray-200 transition-colors duration-200 mt-2 ml-2"
          >
            WebApp̀
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}

export function WorksSectionComponent() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof works)[0] | null
  >(null);

  return (
    <section id="works" className="py-12 md:py-20 bg-black">
      <div className="mx-auto px-[12%]">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Works
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-8">
          {works.map((work) => (
            <WorkCard
              key={work.id}
              work={work}
              onClick={() => setSelectedProject(work)}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectPopup
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default WorksSectionComponent;
