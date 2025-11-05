import IdeaCard from "./IdeaCard";

type Idea = {
  id: string;
  title: string;
  description: string;
  votes: number;
};

type IdeaListProps = {
  ideas: Idea[];
};

export default function IdeaList({ ideas }: IdeaListProps) {
  if (ideas.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>No ideas yet. Be the first to submit one!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {ideas.map((idea) => (
        <IdeaCard
          key={idea.id}
          id={idea.id}
          title={idea.title}
          description={idea.description}
          votes={idea.votes}
        />
      ))}
    </div>
  );
}
