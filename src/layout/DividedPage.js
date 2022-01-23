const DividedPage = ({children}) => {
    return (
        <div className="divided-page">
            {children}
        </div>
    )
}

const PageCard = ({children}) => {
    return (
        <section id="page-card-section">
            <div id="page-card">
                <div id="page-card-avatar">
                    {children}
                </div>
            </div>
        </section>
    )
}

const PageContent = ({children}) => {
    return (
        <section id="page-content-section">
            {children}
        </section>
    )
}

export default DividedPage
