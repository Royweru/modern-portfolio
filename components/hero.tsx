import { Spotlight } from "./ui/Spotlight"

export const Hero = () => {
  return (
    <div className=' pb-20 pt-36'>
        <div>
          <Spotlight className=" -top-40 -left-10 md:-left-32 md:-top-20 h-screen" />
          <Spotlight className=" top-10 left-full h-[80vh] w-[50vw] " fill="purple"/>
          <Spotlight className=" top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
          </div>
    </div>
  )
}
