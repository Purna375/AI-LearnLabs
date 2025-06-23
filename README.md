# AI-LearnLabs 🚀

An intelligent learning management system powered by AI that enables automated course creation, personalized learning experiences, and comprehensive progress tracking.

## ✨ Features

### 🤖 AI-Powered Course Generation
- **Intelligent Content Creation**: Generate comprehensive courses using advanced AI algorithms
- **Topic-Based Learning Paths**: Create structured learning modules based on specific topics
- **Automated Curriculum Design**: AI suggests optimal course structures and progression

### 📚 Course Management
- **Interactive Course Builder**: Drag-and-drop interface for course creation and editing
- **Chapter Organization**: Structured content organization with chapters and sections
- **Progress Tracking**: Real-time learning progress monitoring and analytics

### 🎯 Personalized Learning
- **Adaptive Learning Paths**: AI adjusts content difficulty based on learner performance
- **Custom Course Creation**: Users can create tailored courses for specific needs
- **Interactive Assessments**: Built-in quizzes and evaluation tools

### 📊 Analytics & Insights
- **Learning Analytics**: Comprehensive reports on learning progress and outcomes
- **Performance Metrics**: Track completion rates, engagement, and knowledge retention
- **Data-Driven Insights**: AI-powered recommendations for course improvements

## 🛠️ Tech Stack

- **Frontend**: React.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (Neon Drizzle ORM)
- **AI/ML**: Gemini API
- **Authentication**: JWT, clerk Auth

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Neon Drizzle ORM PostgreSQL database
- Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Purna375/AI-LearnLabs.git
   cd AI-LearnLabs
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   npm install
   
   # Install frontend dependencies
   cd client
   npm install
   cd ..
   ```

3. **Environment Setup**
   ```bash
   # Copy environment variables
   cp .env
   ```
   
   Configure your `.env` file:
   ```env
   # Database
   DATABASE_URL=mongodb_url
   
   # AI Services
   GEMINI_API_KEY=your_gemini_api_key
   
   # Authentication
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=7d
   
   # Server
   PORT=5000
   NODE_ENV=development
   ```

4. **Database Setup**
   ```bash
   # Run database migrations (optional)
   npm run migrate
   
   # Seed initial data (optional)
   npm run seed
   ```

5. **Start the application**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm run build
   npm start
   ```

Visit `http://localhost:3000` to access the application.

## 📖 Usage

### Creating Your First AI Course

1. **Navigate to Course Creator**: Click on "Create Course" from the dashboard
2. **Enter Course Details**: Provide topic, target audience, and learning objectives
3. **AI Generation**: Let AI generate course structure and content
4. **Review & Customize**: Edit generated content to match your requirements
5. **Publish**: Make your course available to learners

### Managing Courses

- **Dashboard Overview**: View all your courses and their performance metrics
- **Content Editor**: Rich text editor with multimedia support
- **Student Management**: Track enrollments and progress
- **Analytics**: Monitor engagement and completion rates


### Development Guidelines

- Follow the existing code style and conventions
- Write comprehensive tests for new features
- Update documentation for any API changes
- Ensure all tests pass before submitting PR


## 📚 API Documentation

API documentation is available at `/api/docs` when running the development server, or view the [complete API documentation](docs/API.md).

### Key Endpoints

- `POST /api/courses` - Create a new course
- `GET /api/courses` - Retrieve user courses
- `POST /api/ai/generate` - Generate course content with AI
- `GET /api/analytics/:courseId` - Get course analytics


## 🔧 Configuration


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Purna375**
- GitHub: [@Purna375](https://github.com/Purna375)
- LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/purnachandrashekar/)

## 🙏 Acknowledgments

- Gemini for providing powerful AI capabilities
- The open-source community for amazing tools and libraries
- Contributors who helped improve this project

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/Purna375/AI-LearnLabs/issues) page
2. Create a new issue with detailed information

## 🗺️ Roadmap

- [ ] **Phase 1**: Enhanced AI content generation
- [ ] **Phase 2**: Mobile application development
- [ ] **Phase 3**: Advanced analytics and reporting
- [ ] **Phase 4**: Integration with external learning platforms
- [ ] **Phase 5**: Multi-language support

---

⭐ **Star this repository if you found it helpful!**

[![GitHub stars](https://img.shields.io/github/stars/Purna375/AI-LearnLabs.svg?style=social&label=Star)](https://github.com/Purna375/AI-LearnLabs)
[![GitHub forks](https://img.shields.io/github/forks/Purna375/AI-LearnLabs.svg?style=social&label=Fork)](https://github.com/Purna375/AI-LearnLabs/fork)
