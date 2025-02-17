2. Install dependencies:
```bash
npm install
```

3. Add the quiz data:
- Place your GCCP quiz data file in the `attached_assets` folder
- Name it `Arcade_lesson_quiz_answer_quicklab.txt`
- The file should follow the format:
  ```
  Question text?
  - Answer 1
  - Answer 2
  [empty line]
  Next question?
  - Answer
  ```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Project Structure

```
├── client/                # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions and configurations
│   │   └── pages/        # Page components
├── server/               # Backend Express application
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data storage implementation
├── shared/              # Shared types and schemas
└── attached_assets/     # GCCP Q&A data
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Deployment

### GitHub Setup

1. Create a new repository on GitHub:
   - Go to github.com and sign in
   - Click "New repository"
   - Name it "gccp-qa-platform"
   - Don't initialize with README (we already have one)

2. Initialize git and push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/gccp-qa-platform.git
git push -u origin main
```

## Deployment to GitHub Pages

1. First, build and deploy your site:
   ```bash
   # Make the deployment script executable
   chmod +x deploy.sh

   # Update the repository URL in deploy.sh
   # Replace 'yourusername' with your GitHub username

   # Run the deployment script
   ./deploy.sh