import React from 'react'
import '../Style.css'

const Card = (props) => {
    return (
        <div>
            <div class="card-container">
                <img class="card-img-top" src={props.image} alt="" />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.text}</p>
                    <div className="card-payment">
                        <div>
                            <img src={props.icon} style={{ float: 'left', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight:'20px'}} alt="icon" />
                                <div className="card-text-annual-plan">
                                    <p style={{ fontWeight: '900', color:'hsl(223, 47%, 23%)', margin:'0'}}>Annual Plan</p>
                                    <p style={{ fontWeight: '500', color:'hsl(224, 23%, 55%)',  marginTop:'8px'}}>{props.fee}</p>
                                </div>
                        </div>
                        <a href="#" className="card-link">{props.link}</a>
                    </div>
                    <button className="btn-payment" style={{ width: '350px' }}>Proceed to Payment</button>
                    <button className="btn-cancel">Cancel Order</button>
                </div>
            </div>
        </div>
    )
}

export default Card
