# EcoLearn Backend API

A comprehensive backend API for the EcoLearn platform - a gamified environmental education system that encourages students to learn about sustainability through interactive lessons, challenges, and community engagement.

## 🌱 Features

### Core Functionality
- **User Authentication & Management**: Secure JWT-based authentication with user profiles
- **Learning Progress Tracking**: XP system, level progression, and learning path visualization
- **Lesson Management**: Interactive lessons with YouTube video integration
- **Challenge System**: Daily, weekly, and monthly environmental challenges
- **Achievement System**: Unlockable achievements based on learning progress
- **Community Features**: Join communities, share posts, and collaborate
- **Notification System**: Real-time notifications for achievements, lessons, and community updates

### Technical Features
- **RESTful API**: Well-structured API endpoints with proper HTTP methods
- **Database Integration**: MongoDB with Mongoose ODM
- **Security**: Helmet, CORS, rate limiting, input sanitization, and XSS protection
- **Validation**: Comprehensive input validation using express-validator
- **Error Handling**: Centralized error handling with custom error types
- **TypeScript**: Full TypeScript support for type safety
- **Documentation**: Comprehensive API documentation

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/ecolearn
   JWT_SECRET=your-super-secret-jwt-key-here
   JWT_EXPIRE=7d
   FRONTEND_URL=http://localhost:5173
   # ... other environment variables
   ```

4. **Start MongoDB**
   ```bash
   # Using Docker
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   
   # Or start your local MongoDB service
   ```

5. **Seed the database** (optional)
   ```bash
   npm run seed
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:5000`

## 📚 API Endpoints

### Authentication (`/api/auth`)
- `POST /register` - Register a new user
- `POST /login` - User login
- `GET /me` - Get current user profile
- `PUT /profile` - Update user profile
- `PUT /change-password` - Change password
- `DELETE /account` - Delete user account

### Lessons (`/api/lessons`)
- `GET /` - Get all lessons (with pagination and filters)
- `GET /:id` - Get single lesson
- `GET /:id/progress` - Get lesson with user progress
- `POST /:id/start` - Start a lesson
- `PUT /:id/progress` - Update lesson progress
- `POST /:id/complete` - Complete a lesson
- `GET /stats/learning` - Get user learning statistics
- `GET /recommended/lessons` - Get recommended lessons

### Challenges (`/api/challenges`)
- `GET /` - Get all challenges
- `GET /active` - Get active challenges
- `GET /type/:type` - Get challenges by type
- `GET /:id` - Get single challenge
- `POST /:id/join` - Join a challenge
- `POST /:id/leave` - Leave a challenge
- `GET /my-challenges` - Get user's challenges
- `GET /:id/leaderboard` - Get challenge leaderboard

### Achievements (`/api/achievements`)
- `GET /` - Get all achievements
- `GET /my-achievements` - Get user's achievements
- `GET /progress` - Get achievement progress
- `GET /rarity/:rarity` - Get achievements by rarity
- `POST /check` - Check for new achievements
- `GET /stats` - Get achievement statistics

### Notifications (`/api/notifications`)
- `GET /` - Get user notifications
- `GET /unread-count` - Get unread notification count
- `PUT /:id/read` - Mark notification as read
- `PUT /read-all` - Mark all notifications as read
- `DELETE /:id` - Delete notification
- `GET /type/:type` - Get notifications by type

### Communities (`/api/communities`)
- `GET /` - Get all communities
- `GET /my-communities` - Get user's communities
- `POST /` - Create a community
- `POST /:id/join` - Join a community
- `POST /:id/leave` - Leave a community
- `GET /:id/posts` - Get community posts
- `POST /:id/posts` - Create community post

## 🗄️ Database Models

### User
- Profile information, level, XP, streak, badges
- Authentication and preferences

### Lesson
- Lesson content, difficulty, XP rewards
- Video integration and prerequisites

### UserProgress
- Tracks user progress through lessons
- Completion status and time spent

### Challenge
- Environmental challenges with tasks
- Participation tracking and rewards

### Achievement
- Unlockable achievements with requirements
- Progress tracking and rewards

### Notification
- User notifications for various events
- Read status and categorization

### Community
- Community information and membership
- Admin roles and rules

### CommunityPost
- Community posts with likes and comments
- Content moderation and engagement

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application
- `npm start` - Start production server
- `npm run seed` - Seed the database with initial data
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

### Project Structure
```
backend/
├── src/
│   ├── config/          # Database and app configuration
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Custom middleware
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── scripts/         # Database seeding scripts
│   ├── types/           # TypeScript type definitions
│   └── server.ts        # Main server file
├── dist/                # Compiled JavaScript
├── package.json
├── tsconfig.json
└── README.md
```

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt for password security
- **Rate Limiting**: Prevent API abuse
- **Input Sanitization**: Protection against NoSQL injection
- **XSS Protection**: Cross-site scripting prevention
- **CORS Configuration**: Controlled cross-origin requests
- **Helmet**: Security headers

## 🌍 Environmental Focus

The API is designed specifically for environmental education with:
- **Gamified Learning**: XP system and achievements
- **Progress Tracking**: Visual learning paths
- **Community Engagement**: Environmental communities
- **Challenge System**: Real-world environmental challenges
- **Video Integration**: YouTube educational content

## 📊 Monitoring & Logging

- **Morgan**: HTTP request logging
- **Error Tracking**: Comprehensive error handling
- **Health Checks**: API health monitoring
- **Performance**: Compression and optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the API documentation

---

**EcoLearn Backend** - Empowering environmental education through technology! 🌱
