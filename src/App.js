import React, { Component } from 'react';
import close from "./cancel.svg";
import alert from "./alert.svg";
import downarrow from "./downarrow.svg";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      openDropdown: false,
      flag: true,
      name: '',
      payoutCurrency: [
        { "value": "BTC", "label": "Bitcoin" },
        { "value": "XRP", "label": "Ripple" },
        { "value": "USDT", "label": "Tether" },
        { "value": "LTC", "label": "Litecoin" },
        { "value": "EOS", "label": "EOS" },
        { "value": "ADA", "label": "Cardano" },
        { "value": "XLM", "label": "Lumen" },
        { "value": "TRX", "label": "Tronix" },
        { "value": "ETC", "label": "Ethereum Classic" },
        { "value": "NEO", "label": "NEO" },
        { "value": "XEM", "label": "NewEconomyMovement" },
        { "value": "ZEC", "label": "ZCash" },
        { "value": "VET", "label": "VeChainThor" },
        { "value": "DOGE", "label": "Dogecoin" },
        { "value": "QTUM", "label": "Qtum" },
        { "value": "BTG", "label": "Bitcoin Gold" },
        { "value": "ICX", "label": "ICON" },
        { "value": "LSK", "label": "Lisk" },
        { "value": "XST", "label": "StealthCoin" },
        { "value": "SC", "label": "Siacoin" },
        { "value": "WAVES", "label": "Waves" },
        { "value": "OMG", "label": "OmiseGO" },
        { "value": "STRAT", "label": "Stratis" },
        { "value": "DGB", "label": "Digibyte" },
        { "value": "WTC", "label": "WaltonChain" },
        { "value": "ZEN", "label": "ZenCash" },
        { "value": "ARK", "label": "Ark" },
        { "value": "RDD", "label": "ReddCoin" },
        { "value": "BTS", "label": "BitShares" },
        { "value": "STEEM", "label": "STEEM" },
        { "value": "STORJ", "label": "STORJ" },
        { "value": "SALT", "label": "SALT" },
        { "value": "GNT", "label": "Golem" },
        { "value": "NXT", "label": "NXT" },
        { "value": "CVC", "label": "Civic" },
        { "value": "NAV", "label": "NAVCoin" },
        { "value": "ZCL", "label": "Zclassic" },
        { "value": "BRX", "label": "Breakout Stake" },
        { "value": "BCH", "label": "Bitcoin Cash" }
      ]
    }
  }

  setDropdown = () => {
    this.setState({
      openDropdown: !this.state.openDropdown
    })
  }

  setName = () => {
    this.setState({
      name: 'coin direct'
    })
  }

  closeErrorContainer = () =>{ 
    this.setState({
      flag: false
    })
  }

  render() {

    const { openDropdown, payoutCurrency, flag} = this.state;

    return (
      <div className="App">
        { flag &&
          <div className="error-panel-container">
            <img className="error-image" src={alert} />
            <div className="error-message-container">
              <span className="error">Error:</span>
              <span className="error-message">Network Error</span>
            </div>  
            <span className="error-message-close" onClick={()=>this.closeErrorContainer()}><img src={close}/></span>
          </div>
        }
        <h1 className='page-heading'>Confirm payout</h1>
        <p className='subheading'>We don't share your financial details with the merchant.</p>

        <div className='payout-container'>
          <table className='payout-table'>
            <thead>
              <tr className='payout-table-heading-row'>
                <th className="payout-heading">Payout of</th>
                <th className="payout-value">4 ETH</th>
              </tr>
            </thead>
            <tbody>
              <tr className='payout-table-data-row'>
                <td className="payout-heading">Fee</td>
                <td className="payout-fee-value">0 ETH</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div>
          <table className="payout-receive-table">
            <thead>
              <tr className="payout-receive">
                <th className="payout-receive-title">You receive</th>
                <th className="payout-receive-value">0.1600961 BTC</th>
              </tr>
            </thead>
            <tbody>
              <tr className="payout-quote">
                <td className="payout-quote-title">Quote expires in</td>
                <td className="payout-quote-value">00:00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <p className="change-payout-currency" >Change payout currency</p>
          <div className='dropdown-container' onClick={() => this.setDropdown()}>
            <div className="dropdown-container-state">
              <span className="dropdown-box">Bitcoin</span>
              <div>
                <img className="dropdown-arrow" src={downarrow}/>  
              </div>
            </div>
            <div className="dropdown-content" style={{ display: openDropdown ? 'block' : openDropdown ? 'none' : 'none' }}>
              {
                payoutCurrency.map((value, index) => {
                  return (<div key={value.value}> {value.label}</div>)
                })
              }
            </div>
          </div>
        </div>

        <div className="next-btn">
          <button className="nextbutton">Next</button>
        </div>
        <div className="retrieve-rates">
          <div className="retrieve-rates-text">We are unable to retrieve rates at this time</div>
        </div><br />
        <div className="email-container">
          <div className="email">donald+partner@coindirect.com</div>
        </div>
        <div>
          <div className="logout">Logout</div>
        </div>
      </div>
    );
  }
}
export default App;
