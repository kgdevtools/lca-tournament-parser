// src/components/tournament/ParseTournament.tsx
'use client';
import { useState, useCallback } from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTournamentParser } from '@/hooks/useTournamentParser';
import { TournamentInput } from './TournamentInput';
import { TournamentOptions } from './TournamentOptions';
import { TournamentResults } from './TournamentResults';
import { TournamentParserProps } from './types';

export const ParseTournament = ({ onParseComplete }: TournamentParserProps) => {
  const [inputText, setInputText] = useState('');
  const [parserOptions, setParserOptions] = useState(/*...*/);
  const { data, loading, error, parseText, reset } = useTournamentParser();

  // Move all handler functions here

  return (
    <div className="space-y-6">
      <TournamentInput
        inputText={inputText}
        onFileUpload={handleFileUpload}
        onTextChange={setInputText}
      />
      
      <TournamentOptions
        options={parserOptions}
        setOptions={setParserOptions}
      />
      
      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button onClick={handleParse} disabled={loading || !inputText.trim()}>
          {loading ? 'Parsing...' : 'Parse Tournament'}
        </Button>
        <Button variant="outline" onClick={handleReset} disabled={loading}>
          Reset
        </Button>
      </div>
      
      {error && (/* Error display */)}
      {data && <TournamentResults data={data} onDownload={handleDownloadJSON} />}
    </div>
  );
};
