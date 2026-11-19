export interface Campus {
  name: string;
  shortName: string;
  city: string;
  badgeColor: string;
  isMainBase?: boolean;
}

export interface Program {
  id: string;
  title: string;
  level: string;
  duration: string;
  badge: string;
  description: string;
  skills: string[];
  color: "yellow" | "blue" | "pink" | "green" | "purple" | "orange";
}

export interface ScheduleItem {
  day: string;
  time: string;
  title: string;
  type: string;
  location: string;
  badgeColor: "yellow" | "blue" | "pink" | "green";
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  campus: string;
  major: string;
  before: string;
  after: string;
  quote: string;
  tag: string;
  color: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "umum" | "latihan" | "keanggotaan";
}

export interface SpeechTopic {
  id: string;
  title: string;
  category: string;
  difficulty: "Pemula" | "Menengah" | "Tantangan";
  prompt: string;
  tips: string;
}

export interface FounderInfo {
  name: string;
  role: string;
  origin: string;
  foundedDate: string;
  quote: string;
  story: string[];
}

