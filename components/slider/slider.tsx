import SlideReveal from "./slide-reveal"

export default function Slider() {
  const imgURL = [
    { link: "#", url: "/500.jpg" },
    { link: "#", url: "/900.jpg" },
    { link: "#", url: "/200-1.jpg" },
  ]
  return <SlideReveal imgURL={imgURL} />
}
