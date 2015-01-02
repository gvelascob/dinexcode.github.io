# Hosted accounts: seller side of the network  

Seller accounts are federated address of a main federationRippleAddress. Sellers are identified by their username@federationRippleAddress.domain. When making the payment to the federated destination only accepted currecnies are showed. And buyers can only make payments to the federation on which they have funds.  

Fon companies managing multiple sales points (taxis, restaurants and others) this is the ideal solution. Each sales point is tag on their main account, and therefore they can manage easily the payment flows to each sales point. For individual sellers (such as an independent taxi driver) they will be treated as a tag on the dnxFederationRippleAddres.


## Basic dnxapp-seller account creation and activation flow  
 1. User downloads the webapp client.  
 2. Creates account: username, password, rippleAddress, rippleSecret  
 3. User information is registered at dnxapp-blobvault  
 4. Simultaneously an account is created at dnxapp-gatewayd where   
    - User record:  
            {'name':'rippleAddress@dnxFederationColdWallet.domain','password':'blobvault-password', 'federation_tag': hash(name), 'federation_name': dnxFederationName, active: false, data: {user_data}}  
    - Ripple Address record:  
            1. { managed: true, address: 'dnxFederationColdWallet', type: hosted, tag: hash(name), data: {ripple_address:{"balances":[{"value":0,"currency":"","dnxFederationColdWallet": "", "month_balance":0}]}}}   
            2. { managed: true, address: 'rippleAddress', type: independent}   
            
    - External account record ([with webfinger protocol support](https://github.com/ripple/gatewayd/pull/508)):  
            { address: rippleAddress, user_id: user.id, type: acct, data: {banks:[{bank_name:'', account_number:'', account_name:'', account_id:''}]}}
 5. Activates account: KYC information, bank account and service legislation compliance check. (make an initial activation payment~ 25 xrp?) kyc_data is stored at the user table.
 6. Gateway validates account (user.active: true) and makes it available at federation endpoint.


## Basic dnxapp-seller selling flow
 1. Provides service
 2. Communicates amount and username to buyer
 3. Seller-client listens to dnxFederationColdWallet transactions for payments to his destination tag and updates seller UI with the new amount.
 4. Gatewayd checks dnxFederationColdWallet address for payments to a destination tag and updates data.balances.value on seller's ripple address table.  
 
## Withdrawal process  

  Every 24 hours all hosted accounts are emptied and the money received at each tag is deposited. A payment is made from dnxFederationColdWallet to dnxColdWallet to reset balances. The seller UI also shows the monthly total received.


## Federation variables  

These are set on the config.js file in the client app:  

  - The main cold wallet where seller accounts are tags  
        dnxFederationColdWallet

  - The name of the federation for federated (hosted) accounts:   
        dnxFederationName
  
