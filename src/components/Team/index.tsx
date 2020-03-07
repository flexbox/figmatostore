import React from 'react'

export default function Team() {
  const items = [
    {
      title: 'Made for designers',
      description:
        'Skip creating from scratch those boring UI Screenshot previews. Use Figma To Store to concentrate on content, not on pixel routine.'
    },
    {
      title: 'For developers',
      description:
        'this boilerplate allows you to learn or enhance design skills. Jump into the design process, where you only need to drag and drop screens.'
    },
    {
      title: 'App managers and owners',
      description:
        'this design system is ready to be published for team purposes and provides an opportunity to quickstart your release workflow immediately.'
    }
  ]

  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div className="bg-white overflow-hidden shadow rounded-lg" key={index}>
          <div className="px-4 py-5 sm:p-6">
            <h2 className="font-bold text-xl mb-2">{item.title}</h2>
            <p className="text-gray-700 text-base">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
