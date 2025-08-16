// src/app/page.tsx
import TournamentParser from "@/components/tournament/TournamentParser";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Chess Tournament Parser
        </h1>
        <p className="text-gray-600">
          Parse chess tournament results and extract structured data for
          analysis and storage.
        </p>
      </div>

      <TournamentParser
        onParseComplete={(data) => {
          console.log("Parsing completed:", data);
          // Here you could send data to Supabase or handle further processing
        }}
      />
    </main>
  );
}
