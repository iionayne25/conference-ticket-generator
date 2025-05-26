import { ReactNode, useState } from "react";
import Header from "../components/Header";
import Title from "../components/Title";

import Form from "../components/Form";
import { RegisterFormData } from "../interface";
import Ticket from "../components/Ticket";
import { TITLE_FORM, TITLE_TICKET } from "../constant/title";

type Props = {
  children: ReactNode;
};

export default function MainLayout() {
  const [submitted, setSubmitted] = useState(false);
  const [titleContent, setTitleContent] = useState<{
    title: React.ReactNode;
    desc: React.ReactNode;
  }>({
    title: TITLE_FORM.TITLE,
    desc: TITLE_FORM.DESC,
  });
  const [formData, setFormData] = useState<RegisterFormData>();

  const handleFormSubmit = (data: RegisterFormData) => {
    setTitleContent({
      title: TITLE_TICKET.TITLE(data.fullName),
      desc: TITLE_TICKET.DESC(data.email),
    });
    setFormData(data);
    setSubmitted(true);
  };

  return (
    <div className="relative  h-screen bg-mobile-bg bg-cover bg-center bg-no-repeat bg-multi-overlay">
      <div className="flex flex-col gap-6 justify-center items-center px-5 z-[1] overflow-y-auto py-5">
        <Header />
        <Title title={titleContent?.title} desc={titleContent?.desc} />
        <div className="pt-1 w-full " >
          {submitted ? (
            <Ticket formData={formData ?? null} />
          ) : (
            <Form onSubmitSuccess={handleFormSubmit} />
          )}
        </div>
      </div>
    </div>
  );
}
