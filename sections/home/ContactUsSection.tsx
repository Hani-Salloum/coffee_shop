import Button from '@/components/reusable/Button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone } from 'lucide-react'
import React from 'react'

function ContactUsSection() {
  return (
    <div className='bg-primary pt-0 max-md:px-5'>
      <div className="bg-gradient-to-b from-primary to-primary py-12 px-4 flex items-center justify-center">
        <Card className="p-0 w-full max-w-2xl mx-auto bg-third border-none shadow-lg rounded-3xl overflow-hidden">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="flex items-center justify-center mb-6">
              {/* <Mail className="w-10 h-10 text-[#493831]" /> */}
              <h1 className="text-4xl font-bold text-primary ml-4">Get in Touch</h1>
            </div>
            <p className="text-lg text-primary/80 mb-8 leading-relaxed">
              Have questions about our coffee, farms, or baristas? We'd love to hear from you! Reach out to us for any
              inquiries, feedback, or just to say hello.
            </p>
            <Button text='Contact Our Team' prependIcon='lucide:mail'  href='/contact-us' />
            <div className="mt-8 text-primary/70 text-sm">
              <p>Prefer to speak directly?</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <Phone className="w-6 h-6" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ContactUsSection