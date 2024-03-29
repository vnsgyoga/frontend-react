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
      const resetIsClicked = setTimeout(() => {
        setIsClicked(false)
      }, 1200)

      return () => clearTimeout(resetIsClicked)
    }
  }, [isClicked])

  return (
    <div className="w-[600px] md:w-[700px] lg:w-[1000px] relative">
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
          className="w-20 h-20 md:w-26 md:h-26 lg:w-34 lg:h-34 object-cover rounded-full"
        />
        <p className="max-w-[280px] sm:max-w-xs md:max-w-lg lg:max-w-xl text-center pt-8 md:pt-10 lg:pt-12 pb-5 lg:pb-7 text-regular md:text-h3 px-3 sm:px-0">
          {slides[currentIndex].script}
        </p>
        <p className="font-secondary text-regular-sm md:text-h5 text-center">
          {slides[currentIndex].author} - {slides[currentIndex].position} at{" "}
          {slides[currentIndex].company}
        </p>
      </div>
      <button
        onClick={handlePrevious}
        disabled={isClicked}
        className="absolute top-1/2 left-0 bg-white w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center cursor-pointer border-none hover:bg-[#F4F4F4] duration-200"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        disabled={isClicked}
        className="absolute top-1/2 right-0 bg-white w-8 h-8 md:w-12 md:h-12  rounded-full flex items-center justify-center cursor-pointer border-none hover:bg-[#F4F4F4] duration-200"
      >
        ❯
      </button>
    </div>
  )
}

export default ImageSlider
