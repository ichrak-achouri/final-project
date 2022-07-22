import React from 'react'
import '../style/payement.css'
const Payement = () => {
  return (
    <div >
        <img src='https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg' alt='background'/>
    <div id="container" >
  <div id="col1">
    <div id="card">
      <div id="front">
        <div id="type">
          <img id="bankid"/>
        </div>
        <span id="chip"></span>
        <span id="card_number">&#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; </span>
        <div id="date"><span id="date_value">MM / YYYY</span></div>
        <span id="fullname">FULL NAME</span>
      </div>
      <div id="back">
        <div id="magnetic"></div>
        <div id="bar"></div>
        <span id="seccode">&#x25CF;&#x25CF;&#x25CF;</span>
        <span id="chip"></span><span id="disclaimer">This card is property of Random Bank of Random corporation. <br/> If found please return to Random Bank of Random corporation - 21968 Paris, Verdi Street, 34 </span>
      </div>
    </div>
  </div>
  <div id="col2">
    <label>Card Number</label>
    <input id="number" type="text" ng-model="ncard" maxlength="19" onkeypress='return event.charCode >= 48 && event.charCode <= 57'/>
    <label>Cardholder name</label>
    <input id="inputname" type="text" placeholder=""/>
    <label>Expiry date</label>
    <input id="expire" type="text" placeholder="MM / YYYY"/>
    <label>Security Number</label>
    <input id="ccv" type="text" placeholder="CVC" maxlength="3" onkeypress='return event.charCode >= 48 && event.charCode <= 57'/>
    <button id="buy"><i id="material-icons">lock</i> Pay --.-- €</button>
  </div>
</div>
</div>
  )
}

export default Payement