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
        isPrivate : false,
        isHeaderLink : false,
        linkOrder : 1,
        isHashLink : false,
        linkText : "Inicio",
        isRoute : true,
        privileges : ["admin", "user"]
    },
    {
        id : 2,
        htmlId : "swatches",
        path : "/swatches",
        exact : true,
        Element : Swatches,
        isPrivate : false,
        isHeaderLink : true,
        linkOrder : 6,
        isHashLink : false,
        linkText : "Swatches",
        isRoute : true,
        privileges : ["admin", "user"]
    },
    {
        id : 3,
        htmlId : "proyectos",
        path : "/proyectos",
        exact : true,
        Element : Proyectos,
        isPrivate : false,
        isHeaderLink : true,
        linkOrder : 3,
        isHashLink : false,
        linkText : "Proyectos",
        isRoute : true,
        privileges : ["admin", "user"]
    },
    {
        id : 4,
        htmlId : "marketplace",
        path : "/marketplace",
        exact : true,
        Element : Marketplace,
        isPrivate : false,
        isHeaderLink : true,
        linkOrder : 4,
        isHashLink : false,
        linkText : "Marketplace",
        isRoute : true,
        privileges : ["admin", "user"]
    },
    {
        id : 5,
        htmlId : "perfil",
        path : "/perfil",
        exact : true,
        Element : Perfil,
        isPrivate : true,
        isHeaderLink : true,
        linkOrder : 5,
        isHashLink : false,
        linkText : "Perfil",
        isRoute : true,
        privileges : ["admin", "user"]
    },
    {
        id : 6,
        htmlId : "que-es-tokenizacion",
        path : "/que-es-tokenizacion",
        hash : "/#que-es-tokenizacion",
        exact : true,
        Element : () => <h1>Que es la tokenización?</h1>,
        isPrivate : false,
        isHeaderLink : true,
        linkOrder : 1,
        isHashLink : true,
        linkText : "Que es la tokenización?",
        isRoute : false,
        privileges : ["admin", "user"]
    },
    {
        id : 7,
        htmlId : "beneficios",
        path : "/beneficios",
        hash : "/#beneficios",
        exact : true,
        Element : () => <h1>Beneficios</h1>,
        isPrivate : false,
        isHeaderLink : true,
        linkOrder : 2,
        isHashLink : true,
        linkText : "Beneficios",
        isRoute : false,
        privileges : ["admin", "user"]
    },
    {
        id : 8,
        htmlId : "tokenizar",
        path : "/tokenizar",
        hash : "/#tokenizar",
        exact : true,
        Element : () => <h1>Tokenizar</h1>,
        isPrivate : true,
        isHeaderLink : true,
        linkOrder : 7,
        isHashLink : false,
        linkText : "Tokenizar",
        isRoute : true,
        privileges : ["admin"]
    },
    {
        id : 9,
        htmlId : "dividendos",
        path : "/dividendos",
        hash : "/#dividendos",
        exact : true,
        Element : () => <h1>Dividendos</h1>,
        isPrivate : true,
        isHeaderLink : true,
        linkOrder : 8,
        isHashLink : false,
        linkText : "Repartir Dividendos",
        isRoute : true,
        privileges : ["admin"]
    }
]

export default routes