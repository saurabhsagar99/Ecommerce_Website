import React from 'react';

const Paymentsuccess = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 mx-auto text-center">
                    <h1 className="display-4">Payment Successful!</h1>
                    <p className="lead">Thank you for your purchase. Your payment has been processed successfully.</p>
                    <a href="/" className="btn btn-primary mt-3">Go to Home</a>
                </div>
            </div>
        </div>
    );
};

export default Paymentsuccess;