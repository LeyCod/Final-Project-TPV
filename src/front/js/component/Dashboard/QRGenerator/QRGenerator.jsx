import React from "react";
import QRCode from 'qrcode'

/* Este componente se cargará en la card de cada mesa y recibirá por props la url completa a la que deberá apuntar el qr y el id de mesa */
/* Aquí faltaría además subir el archivo a cloudinary y actualizar el back de la mesa con la url recibida */

export const QRGenerator = () => {
    const generateQR = async (url) => {
        try {            
            const qr = await QRCode.toDataURL(url, { errorCorrectionLevel: "H", width: "250", height: "250" });
            console.log(qr);
        }
        catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <button
                type="button"
                className="btn btn-sm btn-secondary"
                onClick={() => generateQR("https://github.com/")}
            >
                Generar QR
            </button>
        </div>
    );
};