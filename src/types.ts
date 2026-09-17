export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface CurriculumDay {
  dayNumber: number;
  label: string;
  title: string;
  isLive?: boolean;
  description: string;
}

export interface IncludedItem {
  id: string;
  label: string;
  description: string;
}
