# Firebase Google Authentication Example

This project demonstrates how to implement Google Authentication in a React application using Firebase.

## Features

- Sign in with Google using Firebase Authentication
- Redirect to profile page after successful login
- Error handling for authentication failures
- Links for sign up and password reset

## Prerequisites

- Node.js and npm installed
- A Firebase project ([Create one here](https://console.firebase.google.com/))

## Setup

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd <your-project-folder>
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Firebase**

   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project or use an existing one.
   - In the project settings, add a new web app and copy the Firebase config.
   - Replace the config in `src/firebaseConfig.ts` with your own.

4. **Enable Google Authentication**

   - In the Firebase Console, go to **Build > Authentication > Sign-in method**.
   - Enable **Google** as a sign-in provider.

5. **Run the app**

   ```bash
   npm run dev
   ```

## File Structure

- `src/firebaseConfig.ts` – Firebase initialization and provider setup
- `src/pages/Login.tsx` – Login page with Google sign-in logic

## Usage

- Open [http://localhost:5173](http://localhost:5173) in your browser.
- Click **Continue with Google** to sign in.
- On successful login, you will be redirected to the profile page.

## Troubleshooting

- **auth/operation-not-allowed**: Make sure you have enabled the Google sign-in provider in your Firebase Console.
- Check the browser console for detailed error messages.

## License

This project is for educational purposes.