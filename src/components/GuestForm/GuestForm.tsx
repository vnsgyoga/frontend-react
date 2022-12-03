import classNames from "classnames"
import axios from "axios"

import "./GuestForm.css"
import { ChangeEvent, FormEvent, useState } from "react"

const GuestForm = () => {
  const defaultFormData = {
    name: "",
    email: "",
    phone: "",
    city: "",
  }

  const [formData, setFormData] = useState(defaultFormData)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    setFormData({ ...formData, [target.name]: target.value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() // prevents the submit button from refreshing the page
    axios
      .post("/submit", {
        formData,
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    setFormData(defaultFormData)
  }

  return (
    <form
      className={classNames("contact-form flex flex-col bg-blue")}
      onSubmit={(e) => handleSubmit(e)}
    >
      <div>
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          maxLength={40}
          name="name"
          size={20}
          type="text"
          required={true}
          value={formData.name}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="email">Your Email</label>
        <input
          id="email"
          maxLength={80}
          name="email"
          size={20}
          type="email"
          required={true}
          value={formData.email}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          id="city"
          maxLength={40}
          name="city"
          size={20}
          type="text"
          required={true}
          value={formData.city}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="state">Phone Number</label>
        <input
          id="phone"
          maxLength={20}
          name="phone"
          size={20}
          type="tel"
          required={true}
          value={formData.phone}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button type="submit" name="submit" className="w-auto">
        Submit
      </button>
    </form>
  )
}

export default GuestForm
