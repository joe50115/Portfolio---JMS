// Suspense fallback shown briefly while a lazy-loaded route chunk arrives.
function LoadingSpinner() {
  return (
    <div className="loading-spinner-wrap" role="status" aria-label="Loading">
      <span className="loading-spinner" />
    </div>
  );
}

export default LoadingSpinner;
