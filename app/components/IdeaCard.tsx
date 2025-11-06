"use client";

type IdeaCardProps = {
  id: string;
  title: string;
  description: string;
  votes: number;
};

export default function IdeaCard({
  id,
  title,
  description,
  votes,
}: IdeaCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <div className="flex flex-col items-center gap-1 min-w-[60px]">
          <button
            className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors text-sm font-medium"
            onClick={() => console.log("Vote clicked for idea:", id)}
          >
            ▲ Upvote
          </button>
          <span className="text-gray-700 font-semibold">{votes}</span>
        </div>
      </div>
    </div>
  );
}
