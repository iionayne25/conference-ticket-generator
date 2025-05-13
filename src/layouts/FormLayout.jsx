import Form from "../components/Form";
import UploadImgSection from "../components/Upload-img-section";

export default function FormLayout() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <UploadImgSection />
        <Form />
      </div>
    </>
  );
}
