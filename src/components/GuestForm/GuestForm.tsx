import classNames from "classnames"

import "./GuestForm.css"

const GuestForm = () => {
  const submitLeadToSFDC = async () => {
    const requestOptions: any = {
      method: "POST",
      // mode: "no-cors",
    }

    const oid = (document.getElementById("oid") as HTMLInputElement).value
    const retUrl = (document.getElementById("retURL") as HTMLInputElement).value
    const firstName = (
      document.getElementById("first_name") as HTMLInputElement
    ).value
    const lastName = (document.getElementById("last_name") as HTMLInputElement)
      .value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const company = (document.getElementById("company") as HTMLInputElement)
      .value
    const title = (document.getElementById("title") as HTMLInputElement).value
    const city = (document.getElementById("city") as HTMLInputElement).value
    const state = (document.getElementById("state") as HTMLInputElement).value
    const country = (document.getElementById("city") as HTMLInputElement).value

    fetch(
      `https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&oid=${oid}&retURL=${retUrl}&first_name=${firstName}&last_name=${lastName}&company=${company}&title=${title}&email=${email}&city=${city}&state=${state}&country=${country}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error))
  }

  return (
    <form
      // action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
      // method="POST"
      className={classNames("contact-form flex flex-col bg-blue")}
    >
      <input type="hidden" name="oid" value="00D5i000007Ew61" />
      <input type="hidden" name="retURL" value="http://localhost:3000" />

      <div>
        <label htmlFor="first_name">First Name</label>
        <input
          id="first_name"
          maxLength={40}
          name="first_name"
          size={20}
          type="text"
          required={true}
        />
      </div>
      <div>
        <label htmlFor="last_name">Last Name</label>
        <input
          id="last_name"
          maxLength={80}
          name="last_name"
          size={20}
          type="text"
          required={true}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          maxLength={80}
          name="email"
          size={20}
          type="text"
          required={true}
        />
      </div>
      <div>
        <label htmlFor="company">Company</label>
        <input
          id="company"
          maxLength={40}
          name="company"
          size={20}
          type="text"
          required={true}
        />
      </div>

      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          maxLength={40}
          name="title"
          size={20}
          type="text"
          required={true}
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
        />
      </div>
      <div>
        <label htmlFor="state">State/Province</label>
        <input
          id="state"
          maxLength={20}
          name="state"
          size={20}
          type="text"
          required={true}
        />
      </div>

      <div>
        <label htmlFor="country">Country</label>
        <input
          id="country"
          maxLength={40}
          name="country"
          size={20}
          type="text"
          required={true}
        />
      </div>
      <button
        type="submit"
        name="submit"
        className="w-auto"
        onClick={() => submitLeadToSFDC()}
      >
        Submit
      </button>
    </form>
  )
}

export default GuestForm
