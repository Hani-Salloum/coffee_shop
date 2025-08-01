import SectionHeading from '@/components/reusable/SectionHeading'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

interface Props {
  data: {
    location: string
    phone: string
    email: string
    map_url: string
  }
}

function ContactInfo({ data }: Props) {
  const { location, email, phone, map_url } = data
  return (
    <section className="py-24 px-5">
        <SectionHeading title='Visit Our Cozy Spot' className='mb-12' align='center' />
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 space-y-8 flex flex-col justify-center text-primary/80">
              <div className="flex items-start gap-4">
                <MapPin className="w-7 h-7 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl text-primary">Our Location</h3>
                  <p>{ location }</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-7 h-7 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl text-primary">Give Us a Call</h3>
                  <p>{ phone }</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-7 h-7 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl text-primary">Email Us</h3>
                  <p>{ email }</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-secondary/30">
              <iframe
                src={map_url}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Coffee Shop Location"
              ></iframe>
            </div>
          </div>
        </section>
  )
}

export default ContactInfo