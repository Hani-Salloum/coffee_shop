import React from 'react'

interface Props {
  info_arr: Array<{
    image: string;
    text: string;
  }>
}

function FarmDescription({ info_arr }: Props) {
  return (
    <section className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <h2 className="text-4xl font-bold text-primary text-center mb-10">Our Official Production Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {info_arr.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center shadow-sm">
                  <img
                    src={step.image || "/placeholder.svg"}
                    alt={`Step ${index + 1} icon`}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Step {index + 1}</h3>
                  <p className="text-base text-primary/80 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
  )
}

export default FarmDescription