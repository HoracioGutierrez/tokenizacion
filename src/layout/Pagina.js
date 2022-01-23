import { Typography } from "@mui/material"
import { Fragment } from "react"

const Pagina = ({ children = [], title = "Default Title" }) => {
    return (
        <Fragment>
            <header className="page-header">
                <Typography variant="h4">{title}</Typography>
            </header>
            <section className="page-section">
                {children}
            </section>
        </Fragment>
    )
}

export default Pagina
