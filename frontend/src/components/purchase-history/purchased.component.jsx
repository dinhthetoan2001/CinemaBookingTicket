import React from 'react';
import './purchased.style.scss';
import QRCode from 'qrcode.react';

class PurchaseHistoryPage extends React.Component {
  handleDelete = (index) => {
    const purchaseHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
    purchaseHistory.splice(index, 1);
    localStorage.setItem('purchaseHistory', JSON.stringify(purchaseHistory));
    this.forceUpdate();
  };

  render() {
    const purchaseHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];

    return (
      <div className="purchase-history-container">
        <h2>Purchase History</h2>
        {purchaseHistory.map((paymentInfo, index) => (
          <div className="payment-info" key={index}>
            <p>Full Name: {paymentInfo.fullName}</p>
            <p>Username: {paymentInfo.username}</p>
            <p>City: {paymentInfo.city}</p>
            <p>State: {paymentInfo.state}</p>
            <p>Zip: {paymentInfo.zip}</p>
            <p>Name on Card: {paymentInfo.nameOnCard}</p>
            <p>Card Number: {paymentInfo.cardNumber}</p>
            <p>Expiration Month: {paymentInfo.expirationMonth}</p>
            <p>Expiration Year: {paymentInfo.expirationYear}</p>
            <p>CVV: {paymentInfo.cvv}</p>
            <p>Booking Details: {paymentInfo.bookingDetails}</p>
            <div className="qrcode-container">
              <QRCode value={paymentInfo.bookingDetails} size={200}/>
            </div>
            <button className="delete-button" onClick={() => this.handleDelete(index)}>Delete</button>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default PurchaseHistoryPage;
