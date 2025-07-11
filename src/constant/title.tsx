export const TITLE_FORM = {
  TITLE: "Your Journey to Coding Conf 2025 Starts Here!",
  DESC: "Secure your spot at next year's biggest coding confernce.",
};

export const TITLE_TICKET = {
  TITLE: (RegistedName: string) => (
    <h1 className="font-bold text-2xl break-words px-5 md:text-3xl md:px-14 xl:px-32 xl:text-4xl">
      <span className="">
        <span className="text-neutral">Congrats,</span>
        <span
          className="inline-block bg-gradient-to-br from-orange-500 to-neutral bg-clip-text text-transparent
        "
       style={{color: "transparent"}}  >
          {RegistedName}!
        </span>{" "}
      </span>
      <br />
      <span>Your Ticket is Ready.</span>
    </h1>
  ),
  DESC: (email: string) => (
    <span>
      We've emailed your ticket to
      <br />
      <span className="text-orange-500">{email}</span> and will send updates in
      the run up to the event.
    </span>
  ),
};
