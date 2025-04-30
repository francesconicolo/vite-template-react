import { TypographyH3 } from '@/components/typography/TypographyH3';
import { useTranslation } from 'react-i18next';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();
  return (
    <>
      <div className="h-10 w-full bg-primary text-center absolute top-0 left-0">
        <TypographyH3>{t('title-layout')}</TypographyH3>
      </div>
      {children}
    </>
  );
}
