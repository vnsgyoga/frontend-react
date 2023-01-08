import classNames from "classnames"
import { useEffect, useState } from "react"
import "./ImageSlider.css"

type Slide = {
  imgUrl: string
  script: string
  author: string
  position: string
  company: string
}

type Props = { slides: Slide[] }

const ImageSlider = ({ slides }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const handlePrevious = (e: React.MouseEvent<any>) => {
    e.stopPropagation()
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setIsClicked(true)
  }

  const handleNext = (e: React.MouseEvent<any>) => {
    e.stopPropagation()
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setIsClicked(true)
  }

  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        setIsClicked(false)
      }, 1200)
    }
  }, [isClicked])

  return (
    <div className="w-[1000px] h-[400px] relative">
      <div
        className={classNames(
          "w-full h-full flex flex-col items-center justify-center",
          {
            slides__animation: isClicked,
          }
        )}
      >
        <img
          src={slides[currentIndex].imgUrl}
          alt=""
          className="w-24 h-24 object-cover rounded-full"
        />
        <p className="max-w-xl text-center pt-12 pb-6 font-secondary text-h3 tracking-wide">
          {slides[currentIndex].script}
        </p>
        <p className="font-secondary text-h5 tracking-wide">
          {slides[currentIndex].author} - {slides[currentIndex].position} at{" "}
          {slides[currentIndex].company}
        </p>
      </div>
      <button
        onClick={handlePrevious}
        disabled={isClicked}
        className="absolute top-1/2 left-0 bg-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer border-none hover:bg-[#F4F4F4] duration-200"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        disabled={isClicked}
        className="absolute top-1/2 right-0 bg-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer border-none hover:bg-[#F4F4F4] duration-200"
      >
        ❯
      </button>
    </div>
  )
}

export default ImageSlider
