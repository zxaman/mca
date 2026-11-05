import { Component } from 'react';

// Catches any render-time error so the app never shows a blank white screen.
// Instead the user gets a readable Hinglish message, the error text and a reload button.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    // Keep it in the console for debugging (Vercel/browser logs).
    console.error('App crashed:', error, info && info.componentStack);
  }

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;

    const message = String((error && error.message) || error || 'Unknown error');
    return (
      <div className="crash-screen" role="alert">
        <div className="crash-card">
          <h1>Kuch galat ho gaya</h1>
          <p>
            App render karte waqt ek error aaya. Page blank dikhne ke bajaye yahan error dikh raha hai —
            neeche message padho aur page reload karo.
          </p>
          <pre className="crash-error">{message}</pre>
          <div className="crash-actions">
            <button type="button" onClick={() => window.location.reload()}>
              Page reload karo
            </button>
            <button
              type="button"
              onClick={() => {
                window.location.hash = '#/';
                this.setState({ error: null });
              }}
            >
              Home par jao
            </button>
          </div>
        </div>
      </div>
    );
  }
}
