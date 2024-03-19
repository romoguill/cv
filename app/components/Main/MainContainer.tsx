import { PropsWithChildren } from 'react';

function MainContainer({ children }: PropsWithChildren) {
  return <div className='px-7 py-10'>{children}</div>;
}

export default MainContainer;
