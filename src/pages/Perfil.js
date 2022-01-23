import { AppBar, Button, Container, Tab, Tabs, Typography } from "@mui/material"
import { useState } from "react";
import Pagina from "../layout/Pagina"
import { TableSwatchWhite } from "../swatches/TableSwatch"


const TabPanel = ({children,value,index}) => {
    return (
        <>
        {value === index && (children)}
        </>
    )
}

const Perfil = () => {

    const [value, setValue] = useState(0);

    const handleChange = (e, value) => {
        setValue(value)
    }

    return (
        <Pagina title="Perfil">
            {/* <DividedPage>
                <PageCard>
                    <img src="" alt="" />
                    <PageCardInfo>
                        <Typography variant="h5">Nombre</Typography>
                        <Typography variant="h5">Apellido</Typography>
                    </PageCardInfo>
                </PageCard>
                <PageContent>
                    <p>Test</p>
                </PageContent>
            </DividedPage> */}
            <div id="perfil-card">
                <div id="user-card">
                    <div id="user-card-avatar">
                        <img src="https://avatars0.githubusercontent.com/u/527097?s=460&u=f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d8f9f8b8d&v=4" alt="Avatar" />
                    </div>
                    <div id="user-card-info">
                        <p>Nombre</p>
                        <p>0x0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f</p>
                    </div>
                </div>
            </div>
            <div id="perfil-content">
                <Typography variant="h5" color="secondary">Nombre del Usuario</Typography>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label={<Button variant='contained' color={value===0?"primary":"secondary"}>Balance</Button>}/>
                    <Tab label={<Button variant='contained' color={value===1?"primary":"secondary"}>Token a la venta</Button>}/>
                    <Tab label={<Button variant='contained' color={value===2?"primary":"secondary"}>Withdraw</Button>}/>
                    <Tab label={<Button variant='contained' color={value===3?"primary":"secondary"}>Editar</Button>}/>
                </Tabs>
                <TabPanel value={value} index={0}>
                    <AppBar position="relative" className="noShadowHeader">
                        <Container maxWidth="xxl">
                            <Typography>Header Primario</Typography>
                        </Container>
                    </AppBar>
                    <TableSwatchWhite />
                </TabPanel>
            </div>
        </Pagina>
    )
}

export default Perfil
