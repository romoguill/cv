import { PropsWithChildren } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';

function Page1({ children }: PropsWithChildren) {
  return (
    <>
      <Sidebar />
    </>
  );
}

export default Page1;
