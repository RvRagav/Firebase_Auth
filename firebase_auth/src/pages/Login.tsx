
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
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60vh',
                color: "White",
                borderRadius: '16px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                padding: '40px 24px',
                maxWidth: '350px',
                margin: '40px auto'
            }}>
                <h2 style={{ marginBottom: '24px', color: 'white', fontWeight: 700 }}>Login</h2>
                <button
                    onClick={handleLogin}
                    style={{
                        background: '#4285F4',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '12px 24px',
                        fontSize: '16px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        marginBottom: '20px',
                        boxShadow: '0 2px 8px rgba(66,133,244,0.15)',
                        transition: 'background 0.2s'
                    }}
                    onMouseOver={e => (e.currentTarget.style.background = '#357ae8')}
                    onMouseOut={e => (e.currentTarget.style.background = '#4285F4')}
                >
                    Continue with Google
                </button>
                <p style={{ margin: '8px 0', color: 'white' }}>
                    Don't have an account?{' '}
                    <a href="/signup" style={{ color: '#4285F4', textDecoration: 'none', fontWeight: 500 }}>
                        Sign Up
                    </a>
                </p>
                <p style={{ margin: '8px 0', color: 'white' }}>
                    Forgot your password?{' '}
                    <a href="/reset-password" style={{ color: '#4285F4', textDecoration: 'none', fontWeight: 500 }}>
                        Reset Password
                    </a>
                </p>
            </div></>
    )
}
