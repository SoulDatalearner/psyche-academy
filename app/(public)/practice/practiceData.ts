export interface Paragraph {
  label?: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  type: 'input' | 'button-select' | 'radio';
  options?: string[];
}

export interface ReadingTest {
  title: string;
  passageTitle: string;
  passageParagraphs: Paragraph[];
  instructionPart1: string;
  questionsPart1: Question[];
  instructionPart2?: string;
  questionsPart2?: Question[];
  instructionPart3?: string;
  questionsPart3?: Question[];
  answerKey: { [key: string]: string };
}

export const ieltsReadingTests: { [key: string]: ReadingTest } = {
  R1: {
    title: "Reading Section 1",
    passageTitle: "The Science of Hyperphantasia",
    passageParagraphs: [
      { label: "A", text: "Hyperphantasia is the condition of having extremely vivid mental imagery. It is the architectural opposite of aphantasia." },
      { label: "B", text: "His team, based at the University of Exeter, coined the term to describe individuals who experience near-perfect mental simulations." },
      { label: "C", text: `How we imagine is clearly very subjective - one person's vivid scene could be another's blur.` },
      { label: "D", text: `An internal eye which we inspect from time to time, it's a variability of human experience.` }
    ],
    instructionPart1: "Answer the questions below with NO MORE THAN THREE WORDS from the passage.",
    questionsPart1: [
      { id: "q1", text: "What term describes highly vivid mental imagery?", type: "input" },
      { id: "q2", text: "Which university led the mental simulation study?", type: "input" }
    ],
    instructionPart2: "Complete the sentences below. Choose [input] or fill in the blanks.",
    questionsPart2: [
      { id: "q3", text: "Hyperphantasia serves as the clear [input] of aphantasia.", type: "input" }
    ],
    answerKey: {
      q1: "hyperphantasia",
      q2: "university of exeter",
      q3: "opposite"
    }
  }
};