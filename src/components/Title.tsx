import { ReactNode } from "react";

export default function Title({
  title,
  desc,
}: {
  title: ReactNode;
  desc: ReactNode;
}) {
  return (
    <div className="flex flex-col text-center gap-4">
      <div className="font-bold text-2xl text-neutral break-words px-5 md:text-3xl md:px-32 xl:px-5xl:text-4xl">
        {title}
      </div>
      <p className="font-light break-words text-neutral-300 px-6 line-clamp-3 text-center md:px-36 xl:text-sm">
        {desc}
      </p>
    </div>
  );
}
