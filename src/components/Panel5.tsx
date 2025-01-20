import Image from "next/image";

const Panel5 = () => {
    return (
        <div className="panel5">
            <div className="panel5Text">
                <div>
                    <h2>The Organic Difference</h2>
                    <p>"I can't wait to get my daily dose of pesticides" -no one ever.</p>
                    <p>Non-organic plantmilks could be filled with GMOs, toxic pesticides or synthetic ingredients. With Mooala, you can rest easy knowing our ingredients are ethically sourced, quality and our milks are always organic.</p>
                </div>
            </div>
            <div >
                <Image src="/images/organic.jpg" alt="Organic" width={600} height={300} className="organic"></Image>
            </div>
        </div>
    );
}
export default Panel5;