import Image from "next/image";

const Panel3 = () => {
    return (
        <div className="panel3">
            <div className="panel3Text">
                <div>
                    <h2>Introducing Moola Simple</h2>
                    <p>It's as simple as this: no gums, no oils, no fillers. Just organic goodness.</p>
                </div>
                <div>
                    <button className="btnShop">Shop now</button>
                </div>
            </div>
            <div >
                <Image src="/images/background2.jpg" alt="Moola Simple" width={3800} height={1800} className="moolaSimple"></Image>
            </div>
        </div>
    );
}
export default Panel3;