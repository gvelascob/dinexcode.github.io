# Independent accounts : buyer side of the network

## Basic dnxapp-buyer account creation and activation flow  

 1. User downloads the webapp client.  
 2. Creates account: username, password, rippleAddress, rippleSecret  
 3. User information is registered at dnxapp-blobvault  
 4. Simultaneously an account is created at dnxapp-gatewayd where:  
 
  - User record:  
          {'name':'rippleAddress@dnxColdWallet.domain','password':'blobvault-password', address: rippleAddress}  
  - Ripple Address record:  
          { managed: false, address: 'rippleAddress', type: independent}  
  - External account record  ([with webfinger protocol support](https://github.com/ripple/gatewayd/pull/508)):    
          { address: rippleAddress, user_id: user.id, type: acct, data:{banks: [{bank_name:'', account_number:'', account_name:'', account_id:''}]}}
          
 5. User activates account: posts a deposit of an external asset into dinex account. a record is created on rippleaddress.data that indicates the deposit details.  
 6. Gateway validates deposit and issues a ripple transaction from xrp-funding wallet to the userś ripple address for 25 XRP. Generates invoice for the transaction and updates user status to active.  
 7. Client gets notification of account activation and trustline is automatically granted.  
 8. When the trustline is granted, dnx-hot sends the DNX transaction to the user's rippleAddress.


## Basic dnxapp-buyer payment flow  
 1. Client inputs destination name, federation query is made and available currencies are updated. Only federation queries are allowed on the send page of buyer client app.
 2. Payment is made.
 
## Federation variables  

The cold wallet to whch issue trust and get connect:  
      
      dnxColdWallet