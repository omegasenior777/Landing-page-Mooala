import Image from "next/image";

const Panel2 = () => {
    return (
        <div className="ourProducts">
            <div className="subTitulo">
                <h2>Our Products</h2>
            </div>
            <div className="produtos">
                <div>
                    <button><Image src="/images/simple.png" alt="Simple" width={160} height={160} className="milk"></Image><label>Simple</label></button>
                </div>
                <div>
                    <button><Image src="/images/almondMilk.png" alt="Almondmilk" width={160} height={160} className="milk"></Image><label>Almondmilk</label></button>
                </div>
                <div>
                    <button><Image src="/images/bananaMilk.png" alt="Bananamilk" width={160} height={160} className="milk"></Image><label>Bananamilk</label></button>
                </div>
                <div>
                    <button><Image src="/images/oatMilk.png" alt="Oatmilk" width={160} height={160} className="milk"></Image><label>Oatmilk</label></button>
                </div>
                <div>
                    <button><Image src="/images/baristaOat.png" alt="Barista" width={160} height={160} className="milk"></Image><label>Barista</label></button>
                </div>
                <div>
                    <button><Image src="/images/serve.png" alt="Single Serve" width={160} height={160} className="milk"></Image><label>Single Serve</label></button>
                </div>
            </div>
        </div>
    );
}

export default Panel2;