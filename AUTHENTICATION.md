# Authentication System

This document provides an overview of the authentication system implemented in the Siscora platform.

## Features

- **User Authentication**: Email/password based authentication using NextAuth.js
- **Protected Routes**: Middleware to protect routes that require authentication
- **User Roles**: Support for different user roles (e.g., USER, ADMIN)
- **Session Management**: JWT-based session management
- **API Routes**: Secure API routes for authentication and user management
- **UI Components**: Reusable authentication components (sign-in, sign-up, profile, etc.)

## Setup

1. **Environment Variables**

   Create a `.env.local` file in the root directory with the following variables:

   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/siscora?schema=public"

   # Authentication
   NEXTAUTH_SECRET=your-secret-key-here
   NEXTAUTH_URL=http://localhost:3000

   # OAuth Providers (optional)
   # GOOGLE_CLIENT_ID=
   # GOOGLE_CLIENT_SECRET=
   # GITHUB_CLIENT_ID=
   # GITHUB_CLIENT_SECRET=
   ```

2. **Database Setup**

   Run the following commands to set up the database:

   ```bash
   # Install dependencies
   npm install

   # Run database migrations
   npx prisma migrate dev --name init
   ```

## Authentication Flow

1. **Sign Up**
   - User enters email and password
   - System creates a new user account
   - User is redirected to the dashboard

2. **Sign In**
   - User enters email and password
   - System validates credentials
   - On success, creates a session and redirects to the dashboard

3. **Protected Routes**
   - Middleware checks for valid session
   - Unauthenticated users are redirected to the sign-in page
   - After sign-in, users are redirected back to the original page

## API Endpoints

- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/signin` - Authenticate a user
- `POST /api/auth/signout` - Sign out the current user
- `GET /api/auth/session` - Get the current session

## Components

- `AuthNav` - Navigation component with authentication state
- `SignInForm` - Sign-in form component
- `SignUpForm` - Sign-up form component
- `ProtectedRoute` - Higher-order component for protected routes

## Middleware

The authentication middleware (`middleware.ts`) handles route protection and role-based access control.

### Protected Routes

- `/dashboard` - User dashboard
- `/profile` - User profile
- `/settings` - Account settings
- `/admin` - Admin dashboard (requires ADMIN role)

## Testing

To test the authentication system:

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000/auth/signup to create a new account
3. Sign in with your credentials at http://localhost:3000/auth/signin
4. Access protected routes like /dashboard

## Security Considerations

- Passwords are hashed using bcrypt before storage
- Sessions are stored in HTTP-only cookies
- CSRF protection is enabled
- Rate limiting is implemented for authentication endpoints
- Secure headers are set for all responses

## Troubleshooting

### Common Issues

1. **Database Connection**
   - Ensure the database server is running
   - Verify the `DATABASE_URL` in `.env.local` is correct

2. **Authentication Failures**
   - Check the browser console for errors
   - Verify the `NEXTAUTH_SECRET` is set and consistent
   - Ensure cookies are enabled in the browser

3. **TypeScript Errors**
   - Run `npm install` to ensure all dependencies are installed
   - Check for type definitions with `npm install --save-dev @types/package-name`

## Deployment

When deploying to production:

1. Set `NEXTAUTH_URL` to your production domain
2. Use a strong, random `NEXTAUTH_SECRET`
3. Enable HTTPS
4. Set up a production database
5. Configure environment variables in your hosting platform

## License

This project is licensed under the MIT License.
