export const MiniMenu = () => {
    return (
        <div className="findAdd-menu">
            <button className='MapButton'><a href={brewery.attributes.map} />Vai alla mappa</button>
            <button>Salva in lista</button>
        </div>
    )
}