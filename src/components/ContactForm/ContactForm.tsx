import classNames from "classnames"
import axios from "axios"

import "./ContactForm.css"
import { ChangeEvent, FormEvent, useState } from "react"
import Icon from "../Icon/Icon"

const ContactForm = () => {
  const defaultFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    companyName: "",
  }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    companyName: "",
  })
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
      .finally(() => {
        setTimeout(() => {
          setError(null)
        }, 4000)
      })
  }

  return (
    <form
      className={classNames("contact-form")}
      onSubmit={(e) => handleSubmit(e)}
    >
      <p className="text-5xl font-bold my-10">
        Love to hear from you,
        <br />
        Get in touch 👋
      </p>
      <div className="contact-form__fields">
        <div className="contact-form__form-group">
          <label htmlFor="firstName" className="font-bold">
            First Name
          </label>
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
        <div className="contact-form__form-group">
          <label htmlFor="lastName" className="font-bold">
            Last Name
          </label>
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
        <div className="contact-form__form-group">
          <label htmlFor="email" className="font-bold">
            Your Email
          </label>
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
        <div className="contact-form__form-group">
          <label htmlFor="phone" className="font-bold">
            Phone Number
          </label>
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
        <div className="contact-form__form-group">
          <label htmlFor="city" className="font-bold">
            City
          </label>
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
        <div className="contact-form__form-group">
          <label htmlFor="companyName" className="font-bold">
            Company Name
          </label>
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
        <button type="submit" name="submit" className="contact-form__btn">
          {isLoading ? "Loading" : "Send"}
          <Icon
            name={isLoading ? "three-dots" : "arrow-up-right"}
            className="stroke-current"
            currentColor={true}
            size={20}
          />
        </button>
      </div>

      {error && <div>Submitted failed, please try again.</div>}
      {isSubmitted && <div>Submitted successfully!</div>}
    </form>
  )
}

export default ContactForm
