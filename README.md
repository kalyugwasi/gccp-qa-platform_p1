├── client/                # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   │   ├── ui/      # Base UI components
│   │   │   └── ...      # Feature components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility functions
│   │   └── pages/       # Page components
├── server/               # Backend Express application
│   ├── api/             # API route handlers
│   ├── utils/           # Server utilities
│   └── storage/         # Data storage implementation
├── shared/              # Shared types and schemas
└── data/               # GCCP Q&A data
```

## Setup & Development

1. Install dependencies:
```bash
npm install
```

2. Add the quiz data:
- Place your GCCP quiz data file in the `data` folder
- Name it `Arcade_lesson_quiz_answer_quicklab.txt`
- Format:
  ```
  Question text?
  - Answer 1
  - Answer 2
  [empty line]
  Next question?
  - Answer
  ```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Deployment

The application is deployed on GitHub Pages and can be accessed at:
https://kalyugwasi.github.io/gccp-qa-platform/

### Deploying Updates

1. Make sure you have the latest code:
```bash
git pull origin main
```

2. Run the deployment script:
```bash
chmod +x deploy.sh
./deploy.sh