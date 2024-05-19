// Checkout.js

import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/checkout.css'


function Checkout() {

    const location = useLocation();
    console.log(location);
    const items = location.state;
    // console.log(items);





    const [billingDetails, setBillingDetails] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        zipCode: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBillingDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        // Here you can pass billingDetails to your backend endpoint for billing
        console.log('Billing Details:', billingDetails);
    };


    return (
        <div>
            <h2 className='hedding-billing'>Checkout</h2>
            <p className='subhedding-billing'>Here you can checkout your items!</p>
            <div className='checkout-main'>
            <ul className='items'>
                {items.map((item) => (
                    <li key={item.id}>
                        <div>
                            <img src={item.image} alt={item.title} width={40} />
                            <h5>{item.title}</h5>
                            <h6>${item.price}.00</h6>
                            <p>{item.qut}</p>
                        </div>
                    </li>
                ))}
            </ul>

            <div className='billing-data'>
                {/* {add here to billing details adding inputs and button} */}
                <form className='form-billing' onSubmit={handleSubmit}>
                        <label className='inputs-billing'>
                            <p>Full Name:</p>
                            <input required type="text" name="fullName" value={billingDetails.fullName} onChange={handleInputChange} />
                        </label>
                        <label className='inputs-billing'>
                            <p>Email:</p>
                            <input required type="email" name="email" value={billingDetails.email} onChange={handleInputChange} />
                        </label>
                        <label className='inputs-billing'>
                            <p>Address:</p>
                            <input required type="text" name="address" value={billingDetails.address} onChange={handleInputChange} />
                        </label>
                        <label className='inputs-billing'>
                            <p>City:</p>
                            <input required type="text" name="city" value={billingDetails.city} onChange={handleInputChange} />
                        </label>
                        <label className='inputs-billing'>
                            <p>Zip Code:</p>
                            <input required type="number" name="zipCode" value={billingDetails.zipCode} onChange={handleInputChange} />
                        </label>
                        <div className='billing-btn'>
                            <button type="submit">Submit</button>
                        </div>
                        
                    </form>
            </div>
            </div>
        </div>
    );
}

export default Checkout;
