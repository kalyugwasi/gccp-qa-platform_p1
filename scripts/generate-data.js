const fs = require('fs');
const path = require('path');

function parseQuizData() {
  const filePath = path.join(process.cwd(), "attached_assets", "Arcade_lesson_quiz_answer_quicklab.txt");
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  const questions = [];
  let currentId = 1;
  let currentQuestion = null;
  let currentAnswers = [];
  let currentCategory = 'GCCP';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line === '') continue;

    const isQuestionStart = line.includes('?') || 
                         (line.toLowerCase().includes('select') && 
                          line.toLowerCase().includes('answer'));

    if (isQuestionStart) {
      if (currentQuestion && currentAnswers.length > 0) {
        questions.push({
          id: currentId++,
          question: currentQuestion,
          answers: currentAnswers,
          category: currentCategory,
        });
      }

      currentQuestion = line;
      currentAnswers = [];

      if (i + 1 < lines.length) {
        const nextLine = lines[i + 1].trim();
        if (nextLine.toLowerCase().includes('select') && 
            nextLine.toLowerCase().includes('answer')) {
          currentQuestion += ' ' + nextLine;
          i++;
        }
      }
    } else if (line.startsWith('- ') && currentQuestion) {
      currentAnswers.push(line.substring(2));
    }
  }

  if (currentQuestion && currentAnswers.length > 0) {
    questions.push({
      id: currentId++,
      question: currentQuestion,
      answers: currentAnswers,
      category: currentCategory,
    });
  }

  return questions;
}

// Ensure the output directory exists
const outputDir = path.join(process.cwd(), 'client', 'public', 'data');
fs.mkdirSync(outputDir, { recursive: true });

// Generate and write the questions.json file
const questions = parseQuizData();
fs.writeFileSync(
  path.join(outputDir, 'questions.json'),
  JSON.stringify({ questions }, null, 2)
);

console.log(`Generated ${questions.length} questions in questions.json`);
