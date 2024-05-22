import { PropsWithChildren } from 'react';
import ExperienceSection from '../../components/Main/ExperienceSection';
import Header from '../../components/Main/Header';
import MainContainer from '../../components/Main/MainContainer';
import Sidebar from '../../components/Sidebar/Sidebar1';
import { experiences1Eng, experiences1Esp } from '../../utils/experiences';
import PageCounter from '../../components/PageCounter';

const PAGE = 1;
function Page1({
  children,
  params: { lang },
}: PropsWithChildren & { params: { lang: 'en' | 'es' } }) {
  return (
    <>
      <Sidebar page={PAGE} lang={lang} />
      <MainContainer>
        <Header page={PAGE} lang={lang} />
        <ExperienceSection
          page={PAGE}
          experiences={lang === 'en' ? experiences1Eng : experiences1Esp}
          lang={lang}
        />
        <PageCounter page={PAGE} />
      </MainContainer>
    </>
  );
}

export default Page1;
