# AI-LearnLabs

**AI-LearnLabs** is an intelligent learning management system (LMS) powered by AI that enables automated course creation, personalized learning experiences, and comprehensive progress tracking.

---

## ✨ Features

### 🤖 AI-Powered Course Generation
- **Intelligent Content Creation**: Generate comprehensive course material using advanced AI algorithms.
- **Topic-Based Learning Paths**: Automatically structure content into modules based on topics.
- **Automated Curriculum Design**: Get AI-suggested optimal course flows and learning progression.

### 📚 Course Management
- **Interactive Course Builder**: Drag-and-drop interface for creating and editing course modules.
- **Chapter Organization**: Easily manage structured chapters and sections.
- **Progress Tracking**: Real-time monitoring of learner progress and completion.

### 🎯 Personalized Learning
- **Adaptive Learning Paths**: Dynamically adjust content difficulty based on user performance.
- **Custom Course Creation**: Create and deliver courses tailored to specific learner needs.
- **Interactive Assessments**: Built-in quizzes, evaluation forms, and feedback tools.

### 📊 Analytics & Insights
- **Learning Analytics**: Detailed reports on individual and cohort progress.
- **Performance Metrics**: Track engagement, retention, and completion rates.
- **AI-Driven Insights**: Receive intelligent suggestions for improving course delivery.

---

## 🛠️ Tech Stack

| Layer         | Technologies                                  |
|--------------|-----------------------------------------------|
| **Frontend**  | React.js, TypeScript, Tailwind CSS            |
| **Backend**   | Node.js, Express.js                           |
| **Database**  | PostgreSQL (via Neon + Drizzle ORM)           |
| **AI/ML**     | Gemini API                                    |
| **Auth**      | Clerk                                         |
| **Optional**  | Firebase (Services), YouTube API (Integration)|

---

## 🚀 Getting Started

### ✅ Prerequisites
Ensure you have the following installed:
- Node.js (v18+)
- npm or yarn
- PostgreSQL database (Neon recommended)
- Gemini API key
- Clerk API keys
- Firebase API key (if used)
- YouTube API key (if used)

---

### 🔧 Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Purna375/AI-LearnLabs.git
   cd AI-LearnLabs
Install Dependencies

bash
Always show details

Copy
# Backend dependencies
npm install

# Frontend dependencies
```bash
cd client
npm install
cd ..
```
Environment Configuration
Create a .env.local file in the root directory with the following:

## Clerk Auth
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_public_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

## AI Services
```bash
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
```

## Database
```bash
NEXT_PUBLIC_DB_CONNECTION_STRING=your_db_connection_string
```

## External APIs
```bash
NEXT_PUBLIC_FIREBASE_APIKEY=your_firebase_api_key
NEXT_PUBLIC_YOUTUBE_APIKEY=your_youtube_api_key
```

## App Host
```bash
NEXT_PUBLIC_HOSTT_NAME=http://localhost:3000/
```
## Database Setup

# Run database migrations (if available)
```bash
npm run migrate

# Seed initial data (optional)
npm run seed
```
## Run the Application
# Development
```bash
npm run dev
```
# Production
```bash
npm run build
npm start
```
Visit http://localhost:3000 to get started!


## 📖 Usage
### 📘 Creating Your First AI Course
Navigate to Create Course on the dashboard.

Enter course details: topic, audience, and objectives.

Use AI to auto-generate the course structure.

Review and customize content using the course editor.

Publish the course for learners.

### 📋 Managing Courses
View performance metrics in the Dashboard.

Use the Content Editor to update course material.

Track student enrollments and engagement.

Analyze course performance and learning outcomes.

## 📚 API Documentation
API documentation is available at /api/docs in development mode.

### 🔑 Key Endpoints
| Method	| Endpoint	         | Description                        |
|--------|--------------------|------------------------------------|
| POST	| /api/courses	      | Create a new course                |
| GET	   | /api/courses	      | Retrieve all user courses          |
| POST	| /api/ai/generate	| Generate course content using AI   |
| GET	   | /api/analytics/:id	| Get course analytics               |


### 🧪 Development Guidelines
Follow the existing code style and structure.

Add tests for all new features.

Document any API/interface changes.

Ensure all tests pass before submitting a PR.

### 📄 License
Licensed under the MIT License.

### 👨‍💻 Author
Giduthuri Purna Chandrashekar

GitHub: @Purna375

LinkedIn: (https://www.linkedin.com/in/purnachandrashekar/)

### 🙏 Acknowledgments
Gemini API for enabling powerful AI capabilities.

The open-source community for tools and libraries.

All contributors who have improved this project.

### 📞 Support
Check the Issues page.

Open a new issue with details and reproduction steps.

## 🗺️ Roadmap
 Phase 1: Enhanced AI content generation

 Phase 2: Mobile application development

 Phase 3: Advanced analytics and reporting

 Phase 4: Integration with external learning platforms

 Phase 5: Multi-language support

⭐ Star this repository if you found it useful and inspiring!
