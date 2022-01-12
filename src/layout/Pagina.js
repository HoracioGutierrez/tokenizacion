import { Fragment } from "react"

const Pagina = ({ children = [], title = "Default Title" }) => {
    return (
        <Fragment>
            <header className="page-header">
                <h2>{title}</h2>
            </header>
            <section className="page-section">
                {children}
            </section>
        </Fragment>
    )
}

export default Pagina
