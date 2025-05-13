export default function Title({title,desc}){
    return (
      <div className="flex flex-col text-center gap-4">
        <h1 className="font-bold text-2xl break-words text-neutral px-5">
          {title}
        </h1>
        <p className="font-light break-words text-neutral-300 px-6">{desc}</p>
      </div>
    );

}