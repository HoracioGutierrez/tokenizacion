import { DividedPage, PageCard, PageContent } from "../layout/DividedPage";
import Pagina from "../layout/Pagina"

const Perfil = () => {
    return (
        <Pagina title="Perfil">
            <DividedPage>
                <PageCard
                    imgUrl={"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}
                    firstText={"Test"}
                    secondText={"Test"}
                    edit={true}
                    buttonText={"Guardar Cambios"}
                    onChangeFirst={ value => console.log(value)}
                    onSubmitFirst={ value => console.log(value)}
                    onChangeSecond={ value => console.log(value) }
                    onSubmitSecond={ value => console.log(value) }
                    onSubmit={ value => console.log(value) }
                />
                <PageContent title="Divided Title">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestias mollitia consequatur atque doloremque soluta dolor debitis perspiciatis at officiis nam ipsam neque veritatis, officia amet alias, illum obcaecati eaque.</p>
                </PageContent>
            </DividedPage>
        </Pagina>
    )
}

export default Perfil
