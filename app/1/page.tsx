import { PropsWithChildren } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Main/Header';
import MainContainer from '../components/Main/MainContainer';

function Page1({ children }: PropsWithChildren) {
  return (
    <>
      <Sidebar />
      <MainContainer>
        <Header />
      </MainContainer>
    </>
  );
}

export default Page1;
