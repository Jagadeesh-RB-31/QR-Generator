import React, { useState } from "react";
import "./QRGEN.css";

function QRGEN() {
    const [img, setImg] = useState("");
    const [data, setData] = useState("");
    const size = "150";

    const generateQR = () => {
        if (!data) {
            alert("Please provide data for the QR code.");
            return;
        }

        const qrData = encodeURIComponent(data);
        const qrURL = `https://api.qrserver.com/v1/create-qr-code/?data=${qrData}&size=${size}x${size}`;

        setImg(qrURL);


        setData("");
    };

    const downloadQR = () => {
        if (!img) {
            alert("Please generate a QR code first.");
            return;
        }

        const link = document.createElement("a");
        link.href = img;
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <div className="body">

            <h2>QR - GENERATOR</h2>

            <div className="qr-image">
                {img && <img src={img} alt="QR Code" />}
            </div>
            <div className="data">
                <label>Data for QR Code</label>
                <input
                    type="text"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    placeholder="Enter Website Link Here"
                />
                <br />
                <br />
                <button className="btn btn-warning" onClick={generateQR} >
                    Generate QR Code
                </button>
                <button className="btn btn-success" onClick={downloadQR}>
                    Download QR Code
                </button>
            </div>

        </div>
    );
}

export default QRGEN;
