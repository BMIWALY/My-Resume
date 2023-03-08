import portfolio from "../data/portfolio"


function Portfolio() {

    return (
        <div className='portfolio-section'>
            <h1>Portfolio</h1>
            <div className="portfolio-list">
            {portfolio.map((item, index) => {
                return (
                    <div className="portfolio-box" key={index}>
                        <div className="portfolio-icon "> <img className="portfolio-img" src={item.img}/></div>

                    </div>
                )
            })}
            </div>

        </div>
    )
}


export default Portfolio