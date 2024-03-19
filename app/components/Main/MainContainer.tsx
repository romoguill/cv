import { PropsWithChildren } from 'react';

function MainContainer({ children }: PropsWithChildren) {
  return (
    <div className='px-7 py-10 flex flex-col gap-8 text-slate-900'>
      {children}
    </div>
  );
}

export default MainContainer;
