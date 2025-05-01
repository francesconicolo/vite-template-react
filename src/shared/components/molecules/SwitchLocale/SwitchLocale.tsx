import { Button } from '@shadcn/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@shadcn/components/ui/dropdown-menu';

import { useTranslation } from 'react-i18next';
import i18n, { supportedLanguages } from '../../../../config/i18n';
import Flag from 'react-world-flags';

export default function SwitchLocale() {
  const { t } = useTranslation();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="size-10 p-0">
          <img
            src="/icons/language-icon.svg"
            alt="switcher"
            className="size-11 dark:invert"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-20">
        <DropdownMenuLabel className="text-center">
          {t('lang-switch.title')}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {supportedLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => i18n.changeLanguage(lang)}
          >
            <Flag code={lang === 'en' ? 'gb' : lang} width={30}></Flag>
            {t(`lang-switch.${lang}`)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
