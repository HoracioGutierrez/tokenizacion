import Landing from "./pages/Landing"
import Swatches from "./pages/Swatches"

const routes = [
    {
        id : 1,
        htmlId : "page-landing",
        path : "/",
        exact : true,
        Element : Landing,
        private : false
    },
    {
        id : 2,
        htmlId : "swatches",
        path : "/swatches",
        exact : true,
        Element : () => <Swatches />,
        private : false
    }
]

export default routes