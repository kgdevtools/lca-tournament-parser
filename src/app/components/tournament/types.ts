// src/components/tournament/types.ts
import { ParsedTournament, ParserOptions } from '@/types/tournament';

export interface TournamentParserProps {
  onParseComplete?: (data: ParsedTournament) => void;
}

export interface TournamentInputProps {
  inputText: string;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onTextChange: (text: string) => void;
}

export interface TournamentOptionsProps {
  options: ParserOptions;
  setOptions: (options: ParserOptions) => void;
}

export interface TournamentResultsProps {
  data: ParsedTournament | null;
  onDownload: () => void;
  onReset: () => void;
}
