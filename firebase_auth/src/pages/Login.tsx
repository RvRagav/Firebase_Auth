
import { auth, provider } from '../firebaseConfig'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log('Login successful!');
            console.log('User:', user);
            console.log('Token:', token);
            navigate('/profile'); // Redirect to profile page after successful login
        } catch (error: any) {
            // Handle Errors here.
            console.error('Login failed:', error);
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage, email, credential);
        }
    }
    return (
        <>
            <div>Login</div>
            <button onClick={handleLogin}>Continue with Google</button>
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
            <p>Forgot your password? <a href="/reset-password">Reset Password</a></p>
        </>
    )
}
