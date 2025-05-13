export default function Form(){
    return (
      <>
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-3">
            <h6 className="text-neutral">Full Name</h6>
            <input
              type="text"
              className="bg-neutral-500/20 border border-neutral-500 rounded-xl h-12"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-neutral">Email Address</h6>
            <input
              type="email"
              placeholder="example@email.com"
              className="px-3 bg-neutral-500/20 border border-neutral-500 rounded-xl h-12"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="text-neutral">GitHub UserName</h6>
            <input
              type="text"
              placeholder="@yourusername"
              className="px-3 bg-neutral-500/20 border border-neutral-500 rounded-xl h-12"
            />
          </div>
          <button className="bg-orange-500 text-neutral-900 font-bold h-11 rounded-lg cursor-pointer">Generate My Ticket</button>
        </div>
      </>
    ); 
}