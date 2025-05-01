import { Label } from '@shadcn/components/ui/label';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '@shadcn/components/ui/switch';
import { useTheme } from 'src/shared/hooks/useTheme';

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
