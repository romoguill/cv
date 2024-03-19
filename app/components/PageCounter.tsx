function PageCounter({ page }: { page: number }) {
  return <div className='absolute bottom-4 right-4 text-sm'>{page} / 2</div>;
}

export default PageCounter;
