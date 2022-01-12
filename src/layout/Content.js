import { Container } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import routes from "../routes"
import { PrivateRoute, PublicRoute } from "../utils/CustomRoutes"

const Content = () => {
    return (
        <Routes>
            {routes.map(({ id, htmlId, path, exact, Element, isPrivate }) => (
                <Route key={id} path={path} exact={exact} element={(
                    isPrivate
                        ? <PrivateRoute component={(
                            <Container maxWidth="xxl" component="main" id={htmlId}>
                                <Element />
                            </Container>
                        )} />
                        : <PublicRoute component={(
                            <Container maxWidth="xxl" component="main" id={htmlId}>
                                <Element />
                            </Container>
                        )} />
                )} />
            ))}
        </Routes>
    )
}

export default Content
