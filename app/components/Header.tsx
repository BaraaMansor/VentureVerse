import Link from "next/link";
import VentureVerseLogo from "./VentureVerseLogo";

type HeaderProps = {
  onSubmitClick?: () => void;
};

export default function Header({ onSubmitClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <VentureVerseLogo width={180} height={40} />
          </div>

          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Browse Ideas
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              About
            </Link>
            {onSubmitClick ? (
              <button
                onClick={onSubmitClick}
                className="bg-purple-600 text-white px-4 py-2 rounded-md font-medium hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Submit Idea
              </button>
            ) : (
              <a
                href="#submit"
                className="bg-purple-600 text-white px-4 py-2 rounded-md font-medium hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Submit Idea
              </a>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
