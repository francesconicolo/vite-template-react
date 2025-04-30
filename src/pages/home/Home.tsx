import { TypographyH1 } from '@/components/typography/TypographyH1';
import { SwitchTheme } from '../../components/customComponents/SwitchTheme';
import { AsyncQueryView } from '@/components/customComponents/AsyncQueryView';
import { useGetExampleRequest } from '@/api/api/api.queries';
import { TypographyH3 } from '@/components/typography/TypographyH3';

import { TypographyP } from '@/components/typography/TypographyP';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SwitchLocale from '@/components/customComponents/SwitchLocale';

function App() {
  const { t } = useTranslation();
  const [reveal, setReveal] = useState(false);
  const getExampleRequest = useGetExampleRequest();
  return (
    <div className="h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-foreground">
        <TypographyH1>{t('title-home')}</TypographyH1>
        <div className="flex items-center justify-center flex-wrap gap-14 py-5 px-6 my-5 border rounded-3xl">
          <div className="flex flex-col items-center justify-center">
            <img
              src="/[delete]/Vitejs-logo.svg"
              alt="Vite logo"
              className="h-24 w-24 "
            />
            <TypographyH3>Vite</TypographyH3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/[delete]/ts-logo-256.svg"
              alt="ts logo"
              className="h-24 w-24 "
            />
            <TypographyH3>Typescript</TypographyH3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/[delete]/react.svg"
              alt="react logo"
              className="h-24 w-24 "
            />
            <TypographyH3>React</TypographyH3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/[delete]/i18next-logo.svg"
              alt="i18next logo"
              className="h-24 w-24 "
            />
            <TypographyH3>i18next</TypographyH3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/[delete]/react-router.svg"
              alt="shadcn logo"
              className="h-24 w-24 p-0.5 bg-white rounded-2xl overflow-hidden"
            />

            <TypographyH3>React Router</TypographyH3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="size-24 bg-black rounded-2xl overflow-hidden">
              <img
                src="/[delete]/shadcn-logo.svg"
                alt="shadcn logo"
                className="h-24 w-24 "
                style={{ filter: 'invert(1)' }} // Inverts the colors of the SVG
              />
            </div>
            <TypographyH3>Shadcn/ui</TypographyH3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/[delete]/ESLint-logo.svg"
              alt="eslint logo"
              className="h-24 w-24 "
            />
            <TypographyH3>ESlint + Prettier</TypographyH3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/[delete]/tanstack.png"
              alt="tanstack logo"
              className="h-24 w-24 "
            />
            <TypographyH3>TanstackQuery</TypographyH3>
          </div>
        </div>
        <div className="flex gap-2">
          <SwitchTheme />
          <SwitchLocale></SwitchLocale>
        </div>
        <AsyncQueryView
          query={getExampleRequest}
          data={(data) => (
            <div className="pt-6 text-center">
              <TypographyH3>{data.setup}</TypographyH3>
              <TypographyP
                className={
                  'transition-all duration-400 ' +
                  (reveal
                    ? ' blur-none '
                    : ' blur-sm hover:scale-125 hover:cursor-pointer ')
                }
                onClick={() => setReveal(true)}
              >
                {data.punchline}
              </TypographyP>
            </div>
          )}
          loading={<TypographyH3>Loading...</TypographyH3>}
          error={(error) => (
            <TypographyH3>Error: {JSON.stringify(error)}</TypographyH3>
          )}
        />
      </div>
    </div>
  );
}

export default App;
