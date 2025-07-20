import Button from '@/components/reusable/Button'
import SectionHeading from '@/components/reusable/SectionHeading'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function ContactForm() {
  return (
    <section className="bg-secondary py-24 px-5">
          <SectionHeading title='Send Us a Message' align='center' className='mb-12' />
          <form className="space-y-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {" "}
              {/* Grid layout for inputs */}
              <div>
                <label htmlFor="form-name" className="block text-lg font-medium text-primary mb-2">
                  Your Name
                </label>
                <Input
                  id="form-name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-secondary/50 rounded-lg px-4 py-3 bg-white text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="form-phone" className="block text-lg font-medium text-primary mb-2">
                  Phone Number
                </label>
                <Input
                  id="form-phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full border border-secondary/50 rounded-lg px-4 py-3 bg-white text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
                />
              </div>
              <div className="md:col-span-2">
                {" "}
                {/* Email spans both columns */}
                <label htmlFor="form-email" className="block text-lg font-medium text-primary mb-2">
                  Email Address
                </label>
                <Input
                  id="form-email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-secondary/50 rounded-lg px-4 py-3 bg-white text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="form-message" className="block text-lg font-medium text-primary mb-2">
                Your Message
              </label>
              <Textarea
                id="form-message"
                placeholder="Tell us how we can help..."
                rows={10}
                className="w-full border border-secondary/50 rounded-lg px-4 py-3 bg-white text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors resize-y"
              />
            </div>
            <div className='flex justify-end'>
              <Button text='Submit Inquiry' />
            </div>
            {/* <Button
              type="submit"
              className="w-full bg-primary hover:bg-black text-white px-8 py-4 rounded-full text-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              Submit Inquiry
            </Button> */}
          </form>
        </section>
  )
}

export default ContactForm