import { PropsWithChildren } from 'react';
import ExperienceSection from '../../components/Main/ExperienceSection';
import Header from '../../components/Main/Header';
import MainContainer from '../../components/Main/MainContainer';
import Sidebar from '../../components/Sidebar/Sidebar1';
import { experiences2Eng, experiences2Esp } from '../../utils/experiences';
import PageCounter from '../../components/PageCounter';
import Sidebar2 from '../../components/Sidebar/Sidebar2';

const PAGE = 2;

function Page2({
  children,
  params: { lang },
}: PropsWithChildren & { params: { lang: 'en' | 'es' } }) {
  return (
    <>
      <Sidebar2 page={PAGE} lang={lang} />
      <MainContainer>
        <ExperienceSection
          page={PAGE}
          experiences={lang === 'en' ? experiences2Eng : experiences2Esp}
          lang={lang}
        />
        <PageCounter page={PAGE} />
      </MainContainer>
    </>
  );
}

export default Page2;
