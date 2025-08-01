//@ts-nocheck

import { getContactUsPageData } from "@/actions/contact-us";
import { getAllFaqs } from "@/actions/faq";
import ContactForm from "@/sections/contact-us/ContactForm";
import ContactInfo from "@/sections/contact-us/ContactInfo";
import OpeningHours from "@/sections/contact-us/OpeningHours";
import FaqSection from "@/sections/global/FaqSection";
import { Fragment } from "react";

const getData = async () => {
  const data = (await getContactUsPageData()).data
  const faqs = (await getAllFaqs()).data

  return {
    data,
    faqs
  }
}

export default async function ContactUs() {
  const {faqs, data} = await getData()

  const { location, phone, email, map_url, title, description, our_hours } = data

  return (
    <Fragment>
      <ContactInfo data={{ location, phone, email, map_url }} />
      <OpeningHours data={{ title, description, our_hours }} />
      <ContactForm />
      <FaqSection data={faqs} />
    </Fragment>
  );
}
