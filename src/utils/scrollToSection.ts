type Props = {
  sectionName: string
}

export const scrollToSection = (sectionName: string) => {
  return document
    .getElementById(sectionName)
    ?.scrollIntoView({ behavior: "smooth" })
}
