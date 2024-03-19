import { PropsWithChildren } from 'react';
import ExperienceSection from '../components/Main/ExperienceSection';
import Header from '../components/Main/Header';
import MainContainer from '../components/Main/MainContainer';
import Sidebar from '../components/Sidebar/Sidebar1';
import { experiences2 } from '../utils/experiences';
import PageCounter from '../components/PageCounter';
import Sidebar2 from '../components/Sidebar/Sidebar2';

const PAGE = 2;

function Page2({ children }: PropsWithChildren) {
  return (
    <>
      <Sidebar2 page={PAGE} />
      <MainContainer>
        <ExperienceSection page={PAGE} experiences={experiences2} />
        <PageCounter page={PAGE} />
      </MainContainer>
    </>
  );
}

export default Page2;
