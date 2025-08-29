# Integration Guide

This guide explains how to run both the frontend and backend locally, configure environment variables, handle CORS and authentication, and deploy the application.

## Quick Start

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Python 3.8+ (for Django backend)

### Local Development Setup

1. **Clone and setup environment variables**
   ```bash
   # Copy environment variables template
   cp .env.example .env
   # Edit .env with your preferred settings
   ```

2. **Frontend Setup (Vite + React)**
   ```bash
   cd Frontend
   npm install
   npm run dev
   ```
   Frontend will run on http://localhost:3000

3. **Backend Setup - Option A: Express.js (New)**
   ```bash
   cd backend
   npm install express cors
   node server.js
   ```
   Express backend will run on http://localhost:3001

4. **Backend Setup - Option B: Django (Existing)**
   ```bash
   cd Backend
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```
   Django backend will run on http://localhost:8000

## API Client Usage

The frontend includes an API client (`Frontend/src/api.js`) that can connect to either backend:

```javascript
import { getHello, getProfile } from './api';

// Simple API call
try {
  const hello = await getHello();
  console.log(hello.message);
} catch (error) {
  console.error('API error:', error.message);
}

// Authenticated API call
try {
  const profile = await getProfile('your-jwt-token');
  console.log('User:', profile.username);
} catch (error) {
  console.error('Auth error:', error.message);
}
```

## Environment Variables

### Frontend (.env in project root)
```bash
# For Vite (current setup)
VITE_API_URL=http://localhost:3001

# For Create React App (alternative)
REACT_APP_API_URL=http://localhost:3001
```

### Backend (.env in project root)
```bash
# Express server port
PORT=3001

# CORS configuration
FRONTEND_ORIGIN=http://localhost:3000
```

## CORS Configuration

### Express Backend (backend/server.js)
CORS is configured to allow requests from the frontend origin specified in `FRONTEND_ORIGIN` environment variable with credentials support.

### Django Backend (Backend/mozuma/settings.py)
CORS is already configured in the existing Django backend for localhost:3000 and production domains.

## Authentication

### Token-based Authentication
The API client supports Bearer token authentication:

```javascript
const profile = await getProfile(token);
```

### Cookie-based Authentication
The API client includes `credentials: 'include'` for session-based authentication.

## API Endpoints

### Express Backend
- `GET /api/hello` - Public hello endpoint
- `GET /api/profile` - Protected profile endpoint (requires Bearer token)
- `GET /health` - Health check endpoint

### Django Backend
- `POST /api/token/` - Login endpoint
- `POST /api/register/` - User registration
- `GET /api/bookings/` - Get bookings
- `POST /api/bookings/` - Create booking
- And more (see Backend/info.txt)

## Running Both Backends

You can run both backends simultaneously on different ports:
- Express backend: http://localhost:3001
- Django backend: http://localhost:8000

Update the frontend's `VITE_API_URL` to point to whichever backend you want to use.

## Production Deployment

### Frontend (Vercel)

1. **Build the frontend**
   ```bash
   cd Frontend
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

3. **Set environment variables in Vercel dashboard:**
   - `VITE_API_URL=https://your-backend-domain.com`

### Backend - Express (Heroku)

1. **Create package.json in backend directory**
   ```bash
   cd backend
   npm init -y
   npm install express cors
   ```

2. **Add start script to package.json:**
   ```json
   {
     "scripts": {
       "start": "node server.js"
     }
   }
   ```

3. **Deploy to Heroku**
   ```bash
   heroku create your-app-name
   git subtree push --prefix=backend heroku main
   ```

4. **Set environment variables in Heroku:**
   ```bash
   heroku config:set FRONTEND_ORIGIN=https://your-frontend.vercel.app
   heroku config:set NODE_ENV=production
   ```

### Backend - Django (Railway/Heroku)

The existing Django backend is already configured for deployment. See the existing configuration in `Backend/mozuma/settings.py`.

## Troubleshooting

### CORS Issues
- Ensure `FRONTEND_ORIGIN` matches your frontend URL exactly
- Check that both origins are properly configured
- Verify credentials are included in requests

### Environment Variables Not Loading
- Ensure `.env` file is in the correct location (project root)
- Restart development servers after changing environment variables
- Check that variable names match exactly (case-sensitive)

### API Connection Issues
- Verify backend is running on the correct port
- Check network requests in browser developer tools
- Ensure API URL in frontend matches backend URL

## Development Tips

1. **Use different ports** to avoid conflicts:
   - Frontend: 3000 (Vite default)
   - Express backend: 3001
   - Django backend: 8000

2. **API Client Auto-detection** - The API client automatically detects whether you're using Vite or Create React App and uses the appropriate environment variable.

3. **Error Handling** - The API client includes comprehensive error handling and will throw descriptive errors for debugging.

4. **Credentials Support** - Both cookie-based and token-based authentication are supported out of the box.