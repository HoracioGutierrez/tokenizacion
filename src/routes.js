import Landing from "./pages/Landing"
import Proyectos from "./pages/Proyectos"
import Swatches from "./pages/Swatches"
import Marketplace from "./pages/Marketplace"
import Perfil from "./pages/Perfil"

const routes = [
    {
        id : 1,
        htmlId : "page-landing",
        path : "/",
        exact : true,
        Element : Landing,
        isPrivate : false
    },
    {
        id : 2,
        htmlId : "swatches",
        path : "/swatches",
        exact : true,
        Element : Swatches,
        isPrivate : false
    },
    {
        id : 3,
        htmlId : "proyectos",
        path : "/proyectos",
        exact : true,
        Element : Proyectos,
        isPrivate : false
    },
    {
        id : 4,
        htmlId : "marketplace",
        path : "/marketplace",
        exact : true,
        Element : Marketplace,
        isPrivate : false
    },
    {
        id : 5,
        htmlId : "perfil",
        path : "/perfil",
        exact : true,
        Element : Perfil,
        isPrivate : true
    }
]

export default routes