interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

function SidebarSection({ title, children }: SidebarSectionProps) {
  return (
    <article className='text-slate-100'>
      <h3 className='text-xl uppercase font-semibold mb-2'>{title}</h3>
      <hr className='h-[2px] w-ful bg-gradient-to-r from-slate-100/90 to-slate-100/0 border-none rounded-lg' />
      {children}
    </article>
  );
}

export default SidebarSection;
