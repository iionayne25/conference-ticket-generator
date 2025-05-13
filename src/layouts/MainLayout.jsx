import Header from "../components/Header";
import Title from "../components/Title";
import { TITLE_FORM } from "../constant/title";
import FormLayout from "./FormLayout";

export default function MainLayout({ children }) {
  return (
    <div className="relative flex min-h-screen bg-mobile-bg bg-cover bg-no-repeat bg-multi-overlay">
      <div className="flex flex-col gap-6 items-center pt-5 px-5 z-[1]">
        <Header />
        <Title title={TITLE_FORM.TITLE} desc={TITLE_FORM.DESC} />
        <div className="pt-1 w-full">
          <FormLayout />
        </div>
      </div>
    </div>
  );
}
