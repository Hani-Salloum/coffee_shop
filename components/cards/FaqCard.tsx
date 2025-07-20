import React from 'react'
import { Card, CardContent } from '../ui/card'
import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { MessageSquare } from 'lucide-react'

interface FaqCardProps {
  question: string
  answer: string
  value: number
}

function FaqCard({ question, answer, value }: FaqCardProps) {
  return (
    <Card className="p-0 bg-primary border-none shadow-lg rounded-3xl overflow-hidden">
      <CardContent className="p-0">
        <AccordionItem value={value.toString()} className="border-b border-primary/30 last:border-b-0">
          <AccordionTrigger className="p-6 text-left text-xl font-semibold text-third hover:no-underline data-[state=open]:bg-primary/10 transition-colors">
            <div className="flex items-center gap-4">
              <MessageSquare className="w-5 h-5 text-third" />
              {question}
            </div>
          </AccordionTrigger>
          {/* Adjusted padding: pr-6 for right padding, keeping pl-6 for left, py-4 for vertical */}
          <AccordionContent className="pl-6 pr-6 py-4 text-lg text-primary/80 bg-white">{answer}</AccordionContent>
        </AccordionItem>
      </CardContent>
    </Card>
  )
}

export default FaqCard