'use client'

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Achievement {
  id: number;
  title: string;
  linkedInPostUrl: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Bulkpe's API",
    linkedInPostUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7229053706892140544',
    description: "I’m excited to share how our web application simplifies API integration with Bulkpe by enabling real-time testing of APIs, effortless code generation in over 40 programming languages, and seamless integration into any codebase, all while showcasing our commitment to enhancing the developer experience; special thanks to Sathish Ramasami for his invaluable support throughout this journey!",
  },
  {
    id: 2,
    title: 'Keyboard Shortcuts for BulkPe',
    linkedInPostUrl: 'https://www.youtube.com/embed/nOUPGFeymGg?autoplay=1&mute=1&si=1pjjtEI2wNu4c6cn',
    description: 'As a developer at Bulkpe, I’m excited to showcase how our innovative keyboard shortcuts can streamline every task, putting the power of efficiency right at your fingertips. These shortcuts are designed to enhance productivity, allowing users to navigate and execute commands quickly, reducing time spent on repetitive tasks.',
  },
  {
    id: 3,
    title: '30-Day Challenge: MCA Data Download Feature!',
    linkedInPostUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7206267300151259136',
    description: 'On Day 30 of our 30-Day Challenge, we proudly launch the MCA Filing Download feature, providing businesses effortless access to compliance documents via the Bulkpe web app, facilitating vendor due diligence, streamlining compliance, and saving time with just a few clicks; this feature enhances efficiency and supports better decision-making, ensuring businesses meet their regulatory obligations—special thanks to Sathya Narayanan, Harish Karthick, Jai Venkatesh, Shreya Rani, Sathish Ramasami, Aakash S., Arun Surya, Rashim Raseeth Ali, and Dilip Seenivasan for their amazing teamwork!',
  },
];

interface AchievementCardProps {
  title: string;
  linkedInPostUrl: string;
  description: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ title, linkedInPostUrl, description }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={cardRef}
      className="bg-[#1C1C1C] rounded-lg overflow-hidden shadow-lg flex flex-col mb-8 last:mb-0"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative pb-[56.25%] h-0 overflow-hidden">
        <iframe
          src={linkedInPostUrl}
          frameBorder="0"
          allowFullScreen
          title={title}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

const MyAchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-12 md:py-20 bg-black">
      <div className="mx-auto px-[12%]">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Achievements
        </motion.h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              title={achievement.title}
              linkedInPostUrl={achievement.linkedInPostUrl}
              description={achievement.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyAchievementsSection;


// 'use client'

// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';

// interface Achievement {
//   id: number;
//   title: string;
//   linkedInPostUrl: string;
//   description: string;
// }

// const achievements: Achievement[] = [
//   {
//     id: 1,
//     title: "Bulkpe's API",
//     linkedInPostUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7229053706892140544',
//     description: "I’m excited to share how our web application simplifies API integration with Bulkpe by enabling real-time testing of APIs, effortless code generation in over 40 programming languages, and seamless integration into any codebase, all while showcasing our commitment to enhancing the developer experience; special thanks to Sathish Ramasami for his invaluable support throughout this journey!",
//   },

//   {
//     id: 2,
//     title: 'Keyboard Shortcuts for BulkPe',
//     linkedInPostUrl: 'https://www.youtube.com/embed/nOUPGFeymGg?autoplay=1&mute=1&si=1pjjtEI2wNu4c6cn',
//     description: 'As a developer at Bulkpe, I’m excited to showcase how our innovative keyboard shortcuts can streamline every task, putting the power of efficiency right at your fingertips. These shortcuts are designed to enhance productivity, allowing users to navigate and execute commands quickly, reducing time spent on repetitive tasks.',
// },
// {
//     id: 3,
//     title: '30-Day Challenge: MCA Data Download Feature! ',
//     linkedInPostUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7206267300151259136',
//     description: 'On Day 30 of our 30-Day Challenge, we proudly launch the MCA Filing Download feature, providing businesses effortless access to compliance documents via the Bulkpe web app, facilitating vendor due diligence, streamlining compliance, and saving time with just a few clicks; this feature enhances efficiency and supports better decision-making, ensuring businesses meet their regulatory obligations—special thanks to Sathya Narayanan, Harish Karthick, Jai Venkatesh, Shreya Rani, Sathish Ramasami, Aakash S., Arun Surya, Rashim Raseeth Ali, and Dilip Seenivasan for their amazing teamwork!.',
// },


// ];

// interface AchievementCardProps {
//   title: string;
//   linkedInPostUrl: string;
//   description: string;
// }

// const AchievementCard: React.FC<AchievementCardProps> = ({ title, linkedInPostUrl, description }) => {
//   const cardRef = useRef(null);
//   const isInView = useInView(cardRef, { once: true, margin: '-100px' });

//   return (
//     <motion.div
//       ref={cardRef}
//       className="bg-[#1C1C1C] rounded-lg overflow-hidden shadow-lg flex flex-col mb-0 last:mb-0"
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="relative pb-[56.25%] h-0 overflow-hidden">
//         <iframe
//           src={linkedInPostUrl}
//           frameBorder="0"
//           allowFullScreen
//           title={title}
//           className="absolute top-0 left-0 w-full h-full"
//         />
//       </div>
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
//         <p className="text-sm text-gray-400">{description}</p>
//       </div>
//     </motion.div>
//   );
// };

// const MyAchievementsSection: React.FC = () => {
//   return (
//     <section id="achievements" className="py-12 md:py-20 bg-black">
//       <div className="mx-auto px-[6%]">
//         <motion.h2
//           className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center text-white"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           My Achievements
//         </motion.h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
//           {achievements.map((achievement) => (
//             <AchievementCard
//               key={achievement.id}
//               title={achievement.title}
//               linkedInPostUrl={achievement.linkedInPostUrl}
//               description={achievement.description}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MyAchievementsSection;