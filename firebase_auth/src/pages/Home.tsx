export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: '#1976d2' }}>Welcome to Firebase Auth App</h1>
      <p>
        <a href="/login" style={{ marginRight: '10px', textDecoration: 'none', color: '#388e3c' }}>Login</a>
        or
        <a href="/signup" style={{ marginLeft: '10px', textDecoration: 'none', color: '#d32f2f' }}>Signup</a>
      </p>
    </div>
  )
}
