import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export default function AuthPage() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main style={{ padding: "1rem", textAlign: "center" }}>
          <h2>Welcome, {user.username}!</h2>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
