export const ERROR_FORM_MSG = (fieldName: string) => {
  return (
    <span className="flex items-center gap-2 text-sm text-orange-700 text-[11px]">
      <img
        src="assets/images/icon-info-orange.svg"
        alt="info icon"
        width={15}
        className="text-orange-700 stroke-orange-700 fill-orange-700"
      />
      Please enter a valid {fieldName === 'email' ? `${fieldName} address`: fieldName }.
    </span>
  );
};

export const REQUIRED_ERROR_MSG = (field: string) => `${field} is required.`;

export const EMAIL_ERROR_MSG = "Please enter a valid email address.";
export const GITHUB_USERNAME_ERROR_MSG = "Please enter a valid github username.";

export const IMG_UPLOAD_ERROR_MSG =
  "File too large. Please upload a photo under 500KB.";
