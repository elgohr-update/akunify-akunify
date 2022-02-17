import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(' ')
}

interface IItems {
  title: string
  content: string
}

interface AccordionProps {
  data: IItems[]
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  return (
    <div className="mx-auto max-w-4xl divide-y-2 divide-gray-200">
      <dl className="space-y-6 divide-y divide-gray-200">
        {data.map((item) => (
          <Disclosure as="div" key={item.title} className="pt-6">
            {({ open }) => (
              <>
                <dt className="text-lg">
                  <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                    <span className="font-medium text-gray-900">
                      {item.title}
                    </span>
                    <span className="ml-6 h-7 flex items-center">
                      <ChevronDownIcon
                        className={classNames(
                          open ? '-rotate-180' : 'rotate-0',
                          'h-6 w-6 transform'
                        )}
                        aria-hidden="true"
                      />
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </div>
  )
}

export default Accordion
