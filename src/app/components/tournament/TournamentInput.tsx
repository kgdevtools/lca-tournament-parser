// src/components/tournament/TournamentInput.tsx
'use client';
import { Upload, FileText } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { TournamentInputProps } from './types';

export const TournamentInput = ({
  inputText,
  onFileUpload,
  onTextChange
}: TournamentInputProps) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <FileText className="w-5 h-5" />
        Tournament Data Input
      </CardTitle>
      <CardDescription>
        Upload a tournament file or paste the tournament data directly
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="flex items-center gap-4">
        <input
          type="file"
          accept=".txt,.csv"
          onChange={onFileUpload}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
        >
          <Upload className="w-4 h-4" />
          Upload File
        </label>
        <span className="text-sm text-gray-500">
          Supports .txt and .csv files (max 10MB)
        </span>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">
          Or paste tournament data:
        </label>
        <Textarea
          value={inputText}
          onChange={(e) => onTextChange(e.target.value)}
          placeholder="Paste tournament data here..."
          className="min-h-[200px] font-mono text-sm"
        />
      </div>
    </CardContent>
  </Card>
);
