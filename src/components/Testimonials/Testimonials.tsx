import image1 from "../../assets/images/testimonials/author1.png"
import image2 from "../../assets/images/testimonials/author2.png"
import image3 from "../../assets/images/testimonials/author3.png"
import ImageSlider from "../ImageSlider/ImageSlider"

const Testimonials = () => {
  const slides = [
    {
      imgUrl: image1,
      script: `“Achieving a goal is often an incredible feeling. Once you've conquered something, it's natural to want to keep moving forward. Career Bliss has inspired me to become greater and found my own peace!”`,
      author: "Christine Richer",
      position: "CEO",
      company: "Acme Co.",
    },
    {
      imgUrl: image2,
      script: `“I'm so grateful to Career Bliss. I had been feeling really lost in my career after my company's downsizing last year and thought I would never find a job that I liked and was satisfied with. But thanks to them, I was able to get a perfect position that was exactly what I wanted! And it all happened in a very short time! It's been an absolute blessing for me.”`,
      author: "James Berk",
      position: "Software Engineer",
      company: "WeCode",
    },
    {
      imgUrl: image3,
      script: `“Career Bliss has been one of the best decisions I have made in my professional life. I wasn't sure what career path I wanted to take, so I came across Career Bliss and decided to give it a try. It was amazing! They helped me find my passion in life and gave me all the information on how to get there.”`,
      author: "Diane",
      position: "Project Manager",
      company: "Solution Tech",
    },
  ]

  return (
    <div className="min-h-[700px] bg-[#FFF8FC] flex items-center justify-center">
      <ImageSlider slides={slides} />
    </div>
  )
}

export default Testimonials
