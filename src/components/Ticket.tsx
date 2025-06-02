import { RegisterFormData } from "../interface";

export default function Ticket({
  formData,
}: {
  formData: RegisterFormData | null;
}) {
  let previewImage = null;
  if (formData && formData.image) {
    previewImage = URL.createObjectURL(formData.image);
  }
  return (
    <>
      <div className="relative flex justify-center">
        <div className="flex flex-col absolute top-1/2 -translate-x-0 md:py-6">
          <img
            src="assets/images/pattern-ticket.svg"
            alt=""
            width={380}
            className=""
          />

          <div className="flex flex-col gap-1 min-w-0 absolute top-4 md:top-10 left-4">
            <img
              src="assets/images/logo-full.svg"
              alt="logo"
              width={160}
              className="md:hidden"
            />
            <img
              src="assets/images/logo-full.svg"
              alt="logo"
              width={180}
              className="hidden md:block"
            />
            <p className="text-neutral-500 pl-9 text-[12px] md:pl-9 ">
              Jan 31, 2025 / Austin, TX
            </p>
          </div>
          <div className="flex gap-4 items-center absolute bottom-4 md:bottom-10  left-4">
            <img
              src={previewImage ? previewImage : ""}
              alt="registed image"
              width={40}
              height={40}
              className="rounded-md md:hidden"
            />
            <img
              src={previewImage ? previewImage : ""}
              alt="registed image"
              width={50}
              height={50}
              className="rounded-md hidden md:block"
            />
            <div className="flex flex-col justify-center">
              <h6 className="text-neutral text-sm">{formData?.fullName}</h6>
              <div className="flex gap-1">
                <img
                  src="assets/images/icon-github.svg"
                  alt="github icon"
                  width={20}
                  className="rounded-md"
                />
                <p className="text-neutral-500 text-xs self-center">
                  {formData?.username}
                </p>
              </div>
            </div>
          </div>
          <p className="absolute -right-1 top-[70px] text-neutral-500 rotate-90 text-lg md:right-2 md:top-24">
            #01609
          </p>
        </div>
      </div>
    </>
  );
}
