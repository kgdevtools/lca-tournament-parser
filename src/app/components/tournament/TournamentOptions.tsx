// src/components/tournament/TournamentOptions.tsx
'use client';
import { TournamentOptionsProps } from './types';

export const TournamentOptions = ({ options, setOptions }: TournamentOptionsProps) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-md">
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={options.strictMode}
        onChange={(e) => setOptions({ ...options, strictMode: e.target.checked })}
      />
      <span className="text-sm">Strict Mode</span>
    </label>
    {/* Add other options fields here */}
  </div>
);
