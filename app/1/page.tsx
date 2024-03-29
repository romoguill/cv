import { PropsWithChildren } from 'react';
import ExperienceSection from '../components/Main/ExperienceSection';
import Header from '../components/Main/Header';
import MainContainer from '../components/Main/MainContainer';
import Sidebar from '../components/Sidebar/Sidebar1';
import { experiences1 } from '../utils/experiences';
import PageCounter from '../components/PageCounter';

const PAGE = 1;
function Page1({ children }: PropsWithChildren) {
  return (
    <>
      <Sidebar page={PAGE} />
      <MainContainer>
        <Header page={PAGE} />
        <ExperienceSection page={PAGE} experiences={experiences1} />
        <PageCounter page={PAGE} />
      </MainContainer>
    </>
  );
}

export default Page1;
