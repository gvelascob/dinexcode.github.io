# Welcome to the dinex wiki!

In this wiki will explain how dinex services are structured.


## Motivation  

Dinex services are based on ripple transactions to maintain public evidence of the operations carried on the network. The initial design considers that the buyer side of the network will have an independent wallet, while the seller side of the network a hosted wallet. The network operates on service-defined cryptographic value units equal to one value unit of the operating country currency. In this case, 1 CLP.

## Building blocks  

The basic components of the dnxapp service are user clients [dnxapp-buyer](https://github.com/dinexcode/dnxapp-buyer) and [dnxapp-seller](https://github.com/dinexcode/dnxapp-seller), [dnxapp-gatewayd](https://github.com/dinexcode/dnxapp-gatewayd) and [dnxapp-blobvault](https://github.com/dinexcode/dnxapp-blobvault).   

### Data Model  

<a href='https://drive.google.com/file/d/0Bx6UFIRAyaQZZE5YcUlDeE9wS3M/view?usp=sharing' target="_blank">ER Diagram</a>  

### Wallet configuration  

<a href="https://drive.google.com/file/d/0Bx6UFIRAyaQZc205eUkwamlSUkk/view?usp=sharing" target="_blank">Wallet relations diagram</a>  


### Federation variables defined in config.js  

  seller client:  
      - dnxFederationColdWallet: the cold wallet address where seller accounts are destination tags.  
      - dnxFederationName: the name of the federation to be stored at the seller user table  
  
  buyer client:  
      - dnxColdWallet: the cold wallet address to which independent users trust