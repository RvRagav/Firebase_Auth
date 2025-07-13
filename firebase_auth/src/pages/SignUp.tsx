import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('Sign-up successful! User:', user);
        } catch (error: any) {
            console.error('Sign-up failed:', error);
        }
    };
    return (
        <>
            <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>SignUp</div>
            <form onSubmit={handleSignUp} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", maxWidth: "300px", margin: "0 auto" }}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ padding: "0.5rem", width: "100%", borderRadius: "4px", border: "1px solid #ccc" }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ padding: "0.5rem", width: "100%", borderRadius: "4px", border: "1px solid #ccc" }}
                />
                <button
                    type="submit"
                    style={{
                        padding: "0.5rem 1rem",
                        backgroundColor: "#1976d2",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontWeight: "bold"
                    }}
                >
                    Sign Up
                </button>
                <p style={{ fontSize: "0.9rem" }}>
                    Already have an account? <a href="/login" style={{ color: "#1976d2", textDecoration: "underline" }}>Login</a>
                </p>
            </form>
        </>
    )
}

export default SignUp