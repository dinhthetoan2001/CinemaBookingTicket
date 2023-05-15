import React from 'react';
import './qrcode.scss';
import QRCode from 'qrcode.react';

function QrCode() {
  return (
    <div className="centered-container">
      <ul>
        <QRCode
          id="qrcode"
          value="https://viblo.asia/u/tranchien"
          size={550}
          level={'H'}
          includeMargin={true}
        />
        <h2 className="centered-text larger-text">Đây là mã QR của bạn</h2>
        <h2 className="centered-text larger-text">Chúc bạn xem phim vui vẻ</h2>
      </ul>
    </div>
  );
}

export default QrCode;