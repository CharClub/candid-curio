export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-16 bg-other-bg-0">
      <img
        src="/images/default-avatar.png"
        alt="Not Found"
        className="w-32 h-32 mb-6 opacity-80"
      />
      <h1 className="text-5xl font-bold text-primary mb-2">404</h1>
      <h2 className="text-2xl font-semibold mb-4 text-gray-300">Page Not Found</h2>
      <p className="mb-8 text-gray-400">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition"
      >
        Go Home
      </a>
    </div>
  );
}
