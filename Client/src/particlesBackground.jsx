import Particles from "react-particles-js"
import particleConfig from "./config/particles-config"


export default function particlesBackground(){
    return(
        <Particles params= {particleConfig}></Particles>
    )
}