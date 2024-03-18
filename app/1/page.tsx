import { PropsWithChildren } from 'react';
import Sidebar from '../components/Sidebar';

function Page1({ children }: PropsWithChildren) {
  return (
    <>
      <Sidebar />
    </>
  );
}

export default Page1;
