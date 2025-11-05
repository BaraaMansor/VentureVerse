import Header from "./components/Header";
import IdeaList from "./components/IdeaList";
import IdeaSubmissionForm from "./components/IdeaSubmissionForm";

// Sample mock data - replace with real API calls later
const mockIdeas = [
  {
    id: "1",
    title: "AI-Powered Meal Planning App",
    description:
      "An app that generates personalized meal plans based on dietary preferences, budget, and available ingredients. Uses AI to suggest recipes and creates shopping lists automatically.",
    votes: 42,
  },
  {
    id: "2",
    title: "Remote Team Wellness Platform",
    description:
      "A platform that helps remote teams stay healthy with virtual fitness challenges, mental health resources, and wellness tracking. Integrates with Slack and Teams.",
    votes: 28,
  },
  {
    id: "3",
    title: "Sustainable Fashion Marketplace",
    description:
      "A marketplace connecting consumers with sustainable fashion brands. Features carbon footprint tracking, ethical brand verification, and a clothing swap community.",
    votes: 35,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Discover & Share Startup Ideas
          </h1>
          <p className="text-gray-600">
            Browse innovative ideas from the community and vote on your
            favorites
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Trending Ideas
            </h2>
            <IdeaList ideas={mockIdeas} />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <IdeaSubmissionForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
