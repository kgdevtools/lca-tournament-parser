// src/components/tournament/TournamentResults.tsx
'use client';
import { CheckCircle, Download } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ParsedTournament } from '@/types/tournament';

interface TournamentResultsProps {
  data: ParsedTournament;
  onDownload: () => void;
}

export const TournamentResults = ({ data, onDownload }: TournamentResultsProps) => (
  <div className="space-y-4">
    <Card className="border-green-200 bg-green-50">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-green-700">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Parsing Successful!</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onDownload}
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download JSON
          </Button>
        </div>
      </CardContent>
    </Card>
    {/* Add other results sections here */}
  </div>
);
