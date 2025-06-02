import React, { JSX, ReactNode, useState } from "react";
import {
  EMAIL_ERROR_MSG,
  ERROR_FORM_MSG,
  GITHUB_USERNAME_ERROR_MSG,
  REQUIRED_ERROR_MSG,
} from "../constant/error";
import UploadImgSection from "./Upload-img-section";
import { useForm, Controller } from "react-hook-form";
import { RegisterFormData } from "../interface";

export default function Form({
  onSubmitSuccess,
}: {
  onSubmitSuccess: (data: any) => void;
}) {
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors },
    clearErrors,
  } = useForm<RegisterFormData>();
  const [image, setImage] = useState<File | null>(null);

  const onSubmit = (data: RegisterFormData) => {
    data.image = image;
    console.log("data", data);

    if (isValid) {
      onSubmitSuccess(data);
    }
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 w-full ">
          <Controller
            name="image"
            control={control}
            rules={{ required: REQUIRED_ERROR_MSG("avatar image") }}
            render={({ field, fieldState }) => (
              <>
                <UploadImgSection
                  image={image}
                  setImage={(file) => {
                    setImage(file);
                    field.onChange(file);
                    clearErrors("image");
                  }}
                  requiredError={fieldState?.error?.message}
                  clearError={() => clearErrors("image")}
                />
              </>
            )}
          />
          <div className="flex flex-col gap-3">
            <h6 className="text-neutral w-full">Full Name</h6>
            <input
              type="text"
              className="input-box"
              {...register("fullName", {
                required: REQUIRED_ERROR_MSG("full name"),
              })}
            />
            {errors.fullName && (
              <span className="error-text">
                <img
                  src="assets/images/icon-info-orange.svg"
                  alt="info icon"
                  width={15}
                />
                {errors.fullName.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-neutral">Email Address</h6>
            <input
              type="email"
              placeholder="example@email.com"
              className="input-box"
              {...register("email", {
                required: REQUIRED_ERROR_MSG("email"),
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: EMAIL_ERROR_MSG,
                },
              })}
            />
            {errors.email && (
              <span className="error-text">
                <img
                  src="assets/images/icon-info-orange.svg"
                  alt="info icon"
                  width={15}
                />
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-neutral">GitHub UserName</h6>
            <input
              type="text"
              placeholder="@yourusername"
              className="input-box"
              {...register("username", {
                required: REQUIRED_ERROR_MSG("github username"),
                pattern: {
                  value: /^@/,
                  message: GITHUB_USERNAME_ERROR_MSG,
                },
              })}
            />
            {errors.username && (
              <span className="error-text">
                <img
                  src="assets/images/icon-info-orange.svg"
                  alt="info icon"
                  width={15}
                />
                {errors.username.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className=" bg-orange-500 text-neutral-900 text-lg font-extrabold h-12 rounded-lg cursor-pointer
            hover:bg-orange-700 hover:shadow-md active:outline active:outline-neutral-300 active:outline-offset-2 "
          >
            Generate My Ticket
          </button>
        </div>
      </form>
    </>
  );
}
