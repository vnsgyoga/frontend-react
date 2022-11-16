import React from "react"

type Props = {}

const Orders = (props: Props) => {
  return (
    <div className="mt-8">
      <h1 className="text-gray-700 text-3xl font-bold pb-2 my-12 border-b border-gray-200">
        Testing @apply directive for className
      </h1>
      <main className="flex max-w-4xl">
        <div className="card">
          <div className="image bg-teal-200">This is imaginary image</div>
          <div className="m-4">
            <span className="font-bold text-gray-500">
              Grilled Chicken Salad
            </span>
            <span className="block text-gray-500 text-sm">Recipe by Unkle</span>
          </div>
          <div className="badge">
            <span>25 mins</span>
          </div>
        </div>
        <div className="card">
          <div className="image bg-yellow-200">This is imaginary image</div>
          <div className="m-4">
            <span className="font-bold text-gray-500">
              Grilled Chicken Salad
            </span>
            <span className="block text-gray-500 text-sm">Recipe by Unkle</span>
          </div>
          <div className="badge">
            <span>25 mins</span>
          </div>
        </div>
        <div className="card">
          <div className="image bg-blue-200">This is imaginary image</div>
          <div className="m-4">
            <span className="font-bold text-gray-500">
              Grilled Chicken Salad
            </span>
            <span className="block text-gray-500 text-sm">Recipe by Unkle</span>
          </div>
          <div className="badge">
            <span>25 mins</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Orders
