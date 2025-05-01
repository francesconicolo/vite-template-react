import { TypographyH3 } from '@shadcn/components/Typography';
import { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

export const TemplateBasePage: FC<PropsWithChildren> = ({ children }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="h-10 w-full bg-foreground text-center absolute top-0 left-0">
        <TypographyH3 className="text-background">
          {t('title-layout')}
        </TypographyH3>
      </div>
      {children}
    </>
  );
};
