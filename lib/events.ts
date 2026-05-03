// lib/events.ts

export interface Event {
  id: string
  name: string
  category: string
  teamSize: string
  description: string
  lead: string
  contact: string[]
  prizePool: string
}

export const technicalEvents: Event[] = [
  {
    id: "robo-race",
    name: "ROBO RACE",
    category: "Technical",
    teamSize: "2–4",
    description:
      "A robot competes on a specially designed track filled with turns, obstacles, and speed challenges. The objective is to complete the track in the shortest possible time without violating track rules.",
    lead: "Hitesh K M",
    contact: ["8904902088"],
    prizePool: "₹30,000",
  },
  {
    id: "robo-soccer",
    name: "ROBO SOCCER",
    category: "Technical",
    teamSize: "2–4",
    description:
      "Teams control robots to score goals by pushing a ball into the opponent's goalpost within a fixed time. The event emphasizes teamwork, control, and real-time strategy.",
    lead: "Yashas P and Ubair",
    contact: ["9901793968", "6360541947"],
    prizePool: "₹30,000",
  },
  {
    id: "robo-sumo",
    name: "ROBO SUMO",
    category: "Technical",
    teamSize: "2–4",
    description:
      "Two robots compete by pushing against each other using traction and torque. The robot that pushes the opponent beyond a marked zone wins the match.",
    lead: "Paramesh H N",
    contact: ["9448176290"],
    prizePool: "₹20,000",
  },
  {
    id: "line-follower",
    name: "LINE FOLLOWER",
    category: "Technical",
    teamSize: "2–4",
    description:
      "An autonomous robotics competition where participants design and program a robot to detect and follow a specific path.",
    lead: "Chiranth",
    contact: ["9448176290"],
    prizePool: "₹20,000",
  },
  {
    id: "maze",
    name: "MAZE",
    category: "Technical",
    teamSize: "2–4",
    description:
      "A remotely controlled vehicle navigates a complex walled maze faster than opponents, utilizing Bluetooth/radio control, 4WD chassis, and obstacle-detection sensors.",
    lead: "Deeksha G Y and Manoj",
    contact: ["9353415303", "9035052726"],
    prizePool: "₹20,000",
  },
]

export const nonTechnicalEvents: Event[] = [
  {
    id: "rapid-brand-rumbling",
    name: "RAPID BRAND RUMBLING",
    category: "Non-Technical",
    teamSize: "2–4",
    description:
      "Teams build a complete brand identity from a given problem statement — designing logos, color palettes, UI/UX, and typography, and creating advertising content within a limited time.",
    lead: "Kishan S",
    contact: ["8296557523"],
    prizePool: "₹10,000",
  },
  {
    id: "shark-tank",
    name: "SHARK TANK",
    category: "Non-Technical",
    teamSize: "1–4",
    description:
      "Teams develop a startup idea, prepare a pitch deck, and present it to judges in a simulated startup funding environment evaluated on innovation, scalability, and execution.",
    lead: "Saroj",
    contact: ["8873250798"],
    prizePool: "₹10,000",
  },
  {
    id: "iq-wars",
    name: "IQ WARS 2.0",
    category: "Non-Technical",
    teamSize: "1–2",
    description:
      "Participants compete in rounds testing logical reasoning, problem-solving, and general knowledge through quizzes, puzzles, and rapid-fire questions under time constraints.",
    lead: "Kunal M K and Aishwarya S",
    contact: ["7795687774", "7411260022"],
    prizePool: "₹10,000",
  },
  {
    id: "water-rocket",
    name: "WATER ROCKET",
    category: "Non-Technical",
    teamSize: "2–4",
    description:
      "Participants design and launch water-powered rockets aiming for maximum range and target accuracy, applying aerodynamics, propulsion, and pressure mechanics.",
    lead: "P Harshit Rao",
    contact: ["9933806575"],
    prizePool: "₹10,000",
  },
]

export const hackathon = {
  id: "hacksprint-6",
  name: "HACKSPRINT 6.0",
  category: "Hackathon",
  teamSize: "3–4",
  duration: "24 Hours",
  description:
    "An intensive, multi-domain hackathon where student teams develop innovative solutions across cutting-edge fields. Participants submit and prototype original ideas for self-chosen problem statements, fostering technical creativity and practical engineering skills.",
  domains: [
    "Artificial Intelligence (AI)",
    "AgriTech / HealthTech",
    "Internet of Things (IoT)",
  ],
  lead: "Sonal H & Ashwin S",
  contact: ["9591787616", "8951728170"],
  prizePool: "₹60,000",
}
