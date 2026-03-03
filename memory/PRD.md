# Sereni - AI Sentiment Analysis Chatbot for Suicide Prevention

## Original Problem Statement
Build a full-stack web application called Sereni, an AI-powered sentiment analysis chatbot for suicide prevention and emotional support.

## User Personas
1. **Help Seekers**: Individuals experiencing emotional distress seeking a safe space to express feelings
2. **Mental Health Awareness Users**: People interested in learning about emotional support resources
3. **Academic Researchers**: Students/researchers studying mental health support systems

## Core Requirements (Static)
- Real-time AI chat with emotionally intelligent responses
- Sentiment analysis and suicide risk detection
- Crisis protocol with regional helpline information
- 5-4-3-2-1 grounding exercise feature
- Chat history management
- JWT authentication
- Academic project disclaimer

## Tech Stack
- **Frontend**: React, Tailwind CSS, Shadcn UI
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **AI**: OpenAI GPT-4o-mini via Emergent LLM Key

## What's Been Implemented (Jan 2026)
1. ✅ User authentication (register/login with JWT)
2. ✅ AI chat with GPT-4o-mini integration
3. ✅ Sentiment analysis with risk level detection (normal, distress, moderate, high)
4. ✅ Dynamic system prompts based on risk level
5. ✅ Crisis panel with India helplines (iCall, Vandrevala, AASRA)
6. ✅ 5-4-3-2-1 grounding exercise modal with step progression
7. ✅ Chat history sidebar with CRUD operations
8. ✅ Responsive design (desktop & mobile)
9. ✅ Beautiful therapeutic UI (sage green, dusty pink, lavender)
10. ✅ Academic project disclaimer

## API Endpoints
- POST /api/auth/register - Create account
- POST /api/auth/login - User login
- GET /api/auth/me - Get current user
- POST /api/chat - Send message, get AI response
- GET /api/conversations - List user conversations
- GET /api/conversations/{id}/messages - Get conversation messages
- DELETE /api/conversations/{id} - Delete conversation
- POST /api/grounding/log - Log grounding exercise completion

## Prioritized Backlog

### P0 (Critical) - Completed
- [x] JWT Authentication
- [x] AI Chat Integration
- [x] Risk Detection
- [x] Crisis Protocol

### P1 (High Priority) - Future
- [ ] Voice input support
- [ ] Multi-language support
- [ ] Export chat history as PDF
- [ ] Email notifications for crisis alerts

### P2 (Medium Priority) - Future
- [ ] Mood tracking dashboard
- [ ] Custom grounding exercises
- [ ] Therapist referral integration
- [ ] Mobile app (React Native)

### P3 (Low Priority) - Future
- [ ] Social sharing (anonymous)
- [ ] Community support forums
- [ ] Meditation audio integration

## Next Tasks
1. Add voice input for accessibility
2. Implement mood tracking analytics
3. Add more regional helplines
4. Create admin dashboard for monitoring
