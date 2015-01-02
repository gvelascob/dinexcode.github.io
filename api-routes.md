# Available api routes:

## GET

GET /ripple.txt : serve ripple.txt file

GET /manifest.json : serve DNX manifest file

GET public/inbound : serve inbound deposit instructions

GET public/user/:username : show user data   

    {user: {name, federation_tag, federation_name, active, data, status:'success'}}

GET public/external_accounts/:username : get the registered user's external account id  (to be deprecated)

    {account: 'id', status : "success"}

GET public/pending/:username : get pending deposits for the registered user   

    {status:'success', pending:{amount, data}}

GET public/bridge/type/destination/domain : get the federation tag for destination@domain  

    {federation_json: {"currencies":[{"currency":"DNX","issuer":"coldwallet"}],"dt":response.federation_tag,"domain":"domain","destination_tag":response.federation_tag,"type":"federation_record","destination_address":"user-seller-rippleAddress","destination":req.body.destination}, "status":"success"};

## POST  

POST /public/signup {username,password,rippleAddress, data} : register user with DNX   

      For sellers data must contain:  
        data.federation_name  
        data.user_data : {to be defined per use case}  
        data.ripple_address: {"balances":[{"value":0,"currency":"","counterparty": "", "month_balance":0}]}

      For buyers data field must be null

POST public/deposit {username, password, amount, currency, data:{deposit_origin:''} : record the deposit of an asset on the DNX account  

    {deposit: {external_account_id, currency, amount, deposit: true, status: 'queued', data}}
