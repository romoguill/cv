import { PropsWithChildren } from 'react';
import ExperienceSection from '../components/Main/ExperienceSection';
import Header from '../components/Main/Header';
import MainContainer from '../components/Main/MainContainer';
import Sidebar from '../components/Sidebar/Sidebar';

function Page1({ children }: PropsWithChildren) {
  return (
    <>
      <Sidebar />
      <MainContainer>
        <Header />
        <ExperienceSection />
      </MainContainer>
    </>
  );
}

export default Page1;
