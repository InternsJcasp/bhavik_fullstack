// src/app/layout/Footer.jsx

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center text-xs sm:text-sm py-3">
      <p>
        &copy; {new Date().getFullYear()} Employee Portal. All rights reserved.
      </p>
    </footer>
  );
}
