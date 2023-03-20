import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

function ThisComponentWillError() {
  throw Error("SomeError");
}

function App() {
  return (
    <main>
      <StandardErrorBoundary>
        <ThisComponentWillError />
      </StandardErrorBoundary>
    </main>
  );
}

function ErrorFallback({ error, resetErrorBoundary }) {
  useEffect(() => {
    resetErrorBoundary();
  }, ["CONSTANT"]);

  return (
    <div>
      <p>Something went wrong:</p>
      <pre>{error.toString()}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function StandardErrorBoundary({ children }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
}

export default App;
