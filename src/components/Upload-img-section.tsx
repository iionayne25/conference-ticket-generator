import { DragEventHandler, useRef, useState } from "react";
import { MAX_SIZE_BYTES } from "../constant/img";
import { IMG_UPLOAD_ERROR_MSG } from "../constant/error";
type Props = {
  image: File | null;
  setImage: (file: File) => void;
  requiredError?: string;
  clearError?: () => void;
};
export default function UploadImgSection({
  image,
  setImage,
  requiredError,
  clearError
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: any) => {
    const file = e.target?.files?.[0];

    if (file?.size > MAX_SIZE_BYTES) {
      setError(IMG_UPLOAD_ERROR_MSG);
      return;
    }
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
    if (file) {
      setImage(file);
      setError(null)
    }
    if (clearError) clearError();
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setError(null);
    const file = e.dataTransfer.files?.[0];

    if (file?.size > MAX_SIZE_BYTES) {
      setError(IMG_UPLOAD_ERROR_MSG);
      return;
    }
    const imageUrl = URL.createObjectURL(file);
    if (file) {
      setPreview(imageUrl);
      setError(null);
    }
    if (clearError) clearError();
  };

  const handleRemoveImage = (e: any) => {
    setPreview(null);
    setError(requiredError ?? null)
    if (clearError) clearError();
  };

  return (
    <div
      className="w-full flex flex-col gap-2"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <h6 className="text-lg text-neutral">Upload Avatar</h6>
      <div
        tabIndex={0}
        className="w-full flex flex-col gap-3 justify-center items-center border border-neutral-500 border-dashed rounded-xl bg-neutral/10 
      text-neutral-300 py-7  focus:outline focus:outline-neutral-500 focus:outline-offset-2 "
      >
        <input
          type="file"
          accept=".png, .jpg"
          className="hidden"
          id="file-upload"
          ref={inputRef}
          onChange={handleFileChange}
        />

        {preview ? (
          <>
            <img
              src={preview}
              alt="Preview"
              className="max-h-20 max-w-20 rounded-lg border border-neutral-300"
            />
            <div className="flex gap-2">
              <button
                onClick={handleRemoveImage}
                className="bg-neutral/10 text-neutral p-1 px-2 rounded-lg hover:text-undeline"
              >
                Remove image
              </button>
              <button
                onClick={() => inputRef.current?.click()}
                className="bg-neutral/10 text-neutral p-1 px-2 rounded-lg hover:underline"
              >
                Change Image
              </button>
            </div>
          </>
        ) : (
          <>
            <label
              htmlFor="file-upload"
              className="flex bg-neutral/20 rounded-xl p-2 cursor-pointer "
            >
              <img
                src="/assets/images/icon-upload.svg"
                alt="upload-icon"
                width={30}
              />
            </label>
            <p className="text-neutral-500">Drag and drop or click to upload</p>
          </>
        )}
      </div>
      <div className="flex gap-2">
        <img
          src={
            error
              ? "assets/images/icon-info-orange.svg"
              : "assets/images/icon-info.svg"
          }
          alt="info-icon"
          width={15}
        />

        {error ? (
          <p className="text-[11px] text-orange-700">{error}</p>
        ) : (
          <p className="text-[11px] text-neutral-500">
            Upload your photo (JPG or PNG, max size: 500KB).
          </p>
        )}
      </div>

      {requiredError && (
        <div className="error-text">
          <img
            src="assets/images/icon-info-orange.svg"
            alt="info icon"
            width={15}
          />
          {requiredError}
        </div>
      )}
    </div>
  );
}
