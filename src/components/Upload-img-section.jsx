import { useRef, useState } from "react";
import { MAX_SIZE_BYTES } from "../constant/img";
export default function UploadImgSection() {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    console.log("e", e);

    const file = e.target.files?.[0];

    if (file?.size > MAX_SIZE_BYTES) {
      setError("File too large. Please upload a photo under 500KB.");
      return;
    }
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    
 
    if (file?.size > MAX_SIZE_BYTES) {
      setError("File too large. Please upload a photo under 500KB.");
      return;
    }
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  const handleRemoveImage = (e) => {
    setPreview(null);
  };

  return (
    <div
      className="w-full flex flex-col gap-2"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <h6 className="text-lg text-neutral">Upload Avatar</h6>
      <div className="w-full flex flex-col gap-3 justify-center items-center border border-neutral-500 border-dashed rounded-xl bg-neutral/10 text-neutral-300 py-7">
        <input
          type="file"
          accept=".png, .jpg"
          max
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
              className="flex bg-neutral/20 rounded-xl p-2 cursor-pointer"
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
          src="/assets/images/icon-info.svg"
          className={`${error ? "text-orange-700" : "text-neutral"}`}
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
    </div>
  );
}
