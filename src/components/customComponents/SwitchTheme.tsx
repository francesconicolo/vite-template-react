import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '../hooks/theme-provider';
import { Moon, Sun } from 'lucide-react';

export function SwitchTheme() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="theme">
        <Sun className="size-4 text-foreground" />
      </Label>
      <Switch
        id="theme"
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        className="mr-2 "
      />
      <Label htmlFor="theme">
        <Moon className="size-4 text-foreground" />
      </Label>
    </div>
  );
}
