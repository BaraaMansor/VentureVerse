type VoteButtonProps = {
  ideaId: string;
  currentVotes: number;
  onVote?: (ideaId: string) => void;
};

export default function VoteButton({
  ideaId,
  currentVotes,
  onVote,
}: VoteButtonProps) {
  const handleClick = () => {
    if (onVote) {
      onVote(ideaId);
    } else {
      console.log("Vote registered for idea:", ideaId);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center gap-1 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
    >
      <span className="text-xl">▲</span>
      <span className="font-semibold text-sm">{currentVotes}</span>
    </button>
  );
}
