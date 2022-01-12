import Pagina from "../layout/Pagina"

const Perfil = () => {
    return (
        <Pagina title="Perfil">
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
                Aca esta la tabla con tabs
            </div>
        </Pagina>
    )
}

export default Perfil
