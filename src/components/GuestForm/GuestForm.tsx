import classNames from "classnames"
import axios from "axios"

import "./GuestForm.css"
import { ChangeEvent, FormEvent, useState } from "react"

const GuestForm = () => {
  const defaultFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    companyName: "",
  }

  const [formData, setFormData] = useState<any>({})
  const [error, setError] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    setFormData({ ...formData, [target.name]: target.value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() // prevents the submit button from refreshing the page
    setIsLoading(true)
    axios
      .post("/submit", formData)
      .then((res) => {
        console.log(res)
        setIsSubmitted(true)
        setError(null)
        setIsLoading(false)
        setFormData(defaultFormData)
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
        setError(err)
      })
  }

  return (
    <form
      className={classNames("contact-form flex flex-col bg-blue")}
      onSubmit={(e) => handleSubmit(e)}
    >
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          maxLength={40}
          name="firstName"
          size={20}
          type="text"
          required={true}
          value={formData.firstName}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          maxLength={40}
          name="lastName"
          size={20}
          type="text"
          required={true}
          value={formData.lastName}
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
        <label htmlFor="phone">Phone Number</label>
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
      <div>
        <label htmlFor="companyName">Company Name</label>
        <input
          id="companyName"
          maxLength={40}
          name="companyName"
          size={20}
          type="text"
          required={true}
          value={formData.companyName}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button type="submit" name="submit" className="w-auto">
        {isLoading ? "Loading" : "Submit"}
        {/* Submit */}
      </button>
      {error && <div>Submitted Failed</div>}
      {isSubmitted && <div>Submitted successfully!</div>}
    </form>
  )
}

export default GuestForm
