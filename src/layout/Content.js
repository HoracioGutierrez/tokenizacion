import { Container } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import routes from "../routes"

const Content = () => {
    return (
        <Routes>
            {routes.map(({ id, htmlId, path, exact, Element }) => (
                <Route key={id} path={path} exact={exact} element={(
                    <Container maxWidth="xxl" component="main" id={htmlId}>
                        <Element />
                    </Container>
                )} />
            ))}
        </Routes>
    )
}

export default Content
