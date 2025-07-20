import SectionHeading from '@/components/reusable/SectionHeading'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

function ContactInfo() {
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0199999999996!2d144.9630576!3d-37.814107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b9782e2c05%3A0x5045675218ce7e0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1678888888888!5m2!1sen!2sau"

  return (
    <section className="py-24 px-5">
        <SectionHeading title='Visit Our Cozy Spot' className='mb-12' align='center' />
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 space-y-8 flex flex-col justify-center text-primary/80">
              <div className="flex items-start gap-4">
                <MapPin className="w-7 h-7 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl text-primary">Our Location</h3>
                  <p>123 Coffee Lane, Brew City, CA 90210</p>
                  <p>United States</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-7 h-7 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl text-primary">Give Us a Call</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-7 h-7 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl text-primary">Email Us</h3>
                  <p>info@thekoffeeroom.com</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-secondary/30">
              <iframe
                src={googleMapsEmbedUrl}
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