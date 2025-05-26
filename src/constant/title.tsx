export const TITLE_FORM = {
  TITLE: "Your Journey to Coding Conf 2025 Starts Here!",
  DESC: "Secure your spot at next year's biggest coding confernce.",
};

export const TITLE_TICKET = {
  TITLE: (RegistedName: string) => (
    <span>
      Congrats,{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F37362] to-neutral-500">
        {RegistedName}
      </span>{" "}
      your ticket is ready.
    </span>
  ),
  DESC: (email: string) => (
    <span>
      We've emailed your ticket to{" "}
      <span className="text-orange-500">{email}</span> and will send updates
      leading up to the event.
    </span>
  ),
};
