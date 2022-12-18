import NotFoundImg from "../assets/images//page-not-found.svg"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className="404-page flex flex-col justify-center items-center">
      <h1 className="my-10">Page not found</h1>
      <img src={NotFoundImg} alt="404 page" className="w-full max-w-md my-5" />
      <p className="my-5">This URL does not exist, please try again.</p>
      <Link
        to="/"
        className="bg-orange p-3 text-white font-bold rounded-md hover:shadow-md"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default NotFoundPage
