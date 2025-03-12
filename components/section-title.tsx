interface SectionTitleProps {
  number: string;
  title: string;
}

export function SectionTitle({ number, title }: SectionTitleProps) {
  return (
    <h2 className="text-2xl font-bold mb-12 flex items-center gap-2">
      <span className="text-[#40F8D2]">{number}.</span>
      <span className="text-white">{title}</span>
      <div className="h-[1px] bg-[#233554] flex-grow ml-4" />
    </h2>
  );
}
