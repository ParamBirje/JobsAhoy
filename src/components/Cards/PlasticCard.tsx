
export default function PlasticCard({css, children}: {css?: string, children: React.ReactNode}) {
  return (
    <div className={`${css} border border-white border-opacity-10 py-10 flex flex-col justify-center items-center gap-3 rounded-3xl text-center bg-gradient-to-br from-slate-800 via-primary-light to-primary-light`}>
      {children}
    </div>
  );
}
