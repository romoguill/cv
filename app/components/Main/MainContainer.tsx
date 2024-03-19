import { PropsWithChildren } from 'react';

function MainContainer({ children }: PropsWithChildren) {
  return (
    <div className='px-6 py-8 flex flex-col gap-6 text-slate-900 relative'>
      {children}
    </div>
  );
}

export default MainContainer;
