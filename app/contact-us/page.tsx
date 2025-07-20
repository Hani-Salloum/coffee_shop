import ContactForm from "@/sections/contact-us/ContactForm";
import ContactInfo from "@/sections/contact-us/ContactInfo";
import OpeningHours from "@/sections/contact-us/OpeningHours";
import FaqSection from "@/sections/global/FaqSection";
import { Fragment } from "react";

export default function ContactUs() {
  return (
      <Fragment>
        <ContactInfo />
        <OpeningHours />
        <ContactForm />
      <FaqSection />
    </Fragment>
  );
}
