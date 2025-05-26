import { RegisterFormData } from "../interface";

export default function Ticket({ formData }: { formData: RegisterFormData |null}) {
  let previewImage = null;
  if (formData && formData.image) {
    previewImage = URL.createObjectURL(formData.image);
  }
  return (
    <>
      <div className="relative flex w-full">
        <img src="assets/images/pattern-ticket.svg" alt="" width={375} />
        <div className="flex flex-col justify-between absolute top-1/2 left-0 -translate-x-0 -translate-y-1/2 p-4 h-full ">
          <div className="flex flex-col gap-1">
            <img src="assets/images/logo-full.svg" alt="logo" width={180} />
            <p className="text-neutral-500 pl-10 text-[14px]">
              Jan 31, 2025 / Austin, TX
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <img
              src={previewImage ? previewImage : ""}
              alt="registed image"
              width={40}
              height={40}
              className="rounded-md"
            />
            <div className="flex flex-col ">
              <h6 className="text-neutral">{formData?.fullName}</h6>
              <div className="flex gap-1">
                <img
                  src="assets/images/icon-github.svg"
                  alt="github icon"
                  width={20}
                  className="rounded-md"
                />
                <p className="text-neutral-500">{formData?.username}</p>
              </div>
            </div>
          </div>
        </div>
        <p className="absolute right-0 text-neutral-500 rotate-90 text-xl top-[40%]">
          #01609
        </p>
      </div>
    </>
  );
}
