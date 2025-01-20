import Image from "next/image";

const Panel4 = () => {
    return (
            <div className="painel4">
                <div className="text">
                    <h1>Find us in your backyard</h1>                    
                </div>
                <div className="gridMarcas">
                    <div className="imageCube"><Image src="/images/publix.png" alt="Publix" width={125} height={125} className="marcas"></Image></div>
                    <div className="imageCube"><Image src="/images/wegmans.png" alt="Wegmans" width={125} height={125} className="marcas"></Image></div>
                    <div className="imageCube"><Image src="/images/walmart.png" alt="Walmart" width={125} height={125} className="marcas"></Image></div>
                    <div className="imageCube"><Image src="/images/albertsons.png" alt="Albertsons" width={125} height={125} className="marcas"></Image></div>
                    <div className="imageCube"><Image src="/images/kroger.png" alt="Kroger" width={125} height={125} className="marcas"></Image></div>
                    <div className="imageCube"><Image src="/images/costco.png" alt="Costco" width={125} height={125} className="marcas"></Image></div>
                </div>
            </div>
    );
}

export default Panel4;