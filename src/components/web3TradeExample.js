// import { ChainId, TradeContext, UniswapPair } from 'simple-uniswap-sdk';
const { ChainId, FTradeContext, UniswapPair } = require ('@uniswap/sdk');
const Web3 = require ('web3');
//import Web3 from 'web3';

const web3TradeExample = async () => {
  const uniswapPair = new UniswapPair({
    // the contract address of the token you want to convert FROM
    fromTokenContractAddress: '0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b',
    // the contract address of the token you want to convert TO
    toTokenContractAddress: '0x1985365e9f78359a9B6AD760e32412f4a445E862',
    // the ethereum address of the user using this part of the dApp
    ethereumAddress: '0xB1E6079212888f0bE0cf55874B2EB9d7a5e02cD9',
    // you can pass in the provider url as well if you want
    // providerUrl: YOUR_PROVIDER_URL,
    // OR if you want to inject your own ethereum provider (no need for chainId if so)
    // ethereumProvider: YOUR_WEB3_ETHERS_OR_CUSTOM_ETHEREUM_PROVIDER,
    chainId: ChainId.RINKEBY,
  });

  // this example shows erc20 > erc20 but its a simple change for eth > erc20
  // or erc20 > eth example below by using `ETH.MAINNET().contractAddress`
  // which can be imported within `simple-uniswap-sdk`
  // aka > import { ETH } from 'simple-uniswap-sdk';

  //   ETH > ERC20
  // const uniswapPair = new UniswapPair({
  //   fromTokenContractAddress: ETH.MAINNET().contractAddress,
  //   toTokenContractAddress: '0x1985365e9f78359a9B6AD760e32412f4a445E862',
  //   ethereumAddress: '0xB1E6079212888f0bE0cf55874B2EB9d7a5e02cD9',
  //   chainId: ChainId.RINKEBY,
  // });

  //   ERC20 > ETH
  // const uniswapPair = new UniswapPair({
  //   fromTokenContractAddress: '0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b',
  //   toTokenContractAddress: ETH.MAINNET().contractAddress,,
  //   ethereumAddress: '0xB1E6079212888f0bE0cf55874B2EB9d7a5e02cD9',
  //   chainId: ChainId.RINKEBY,
  // });

  // now to create the factory you just do
  const uniswapPairFactory = await uniswapPair.createFactory();

  // the amount is the proper entered amount
  // so if they enter 10 pass in 10
  // it will work it all out for you
  // can also pass in a trade direction here if you want for the output
  const trade = await uniswapPairFactory.trade('10');

  // can also pass in a trade direction here, for example if you want the output
  // aka your doing ETH > AAVE but want to know how much you get for 5 AAVE.
  // const trade = await uniswapPairFactory.trade('10', TradeDirection.output);

  // can also pass in a trade direction here, for example if you want the output
  // aka your doing ETH > AAVE but want to know how much you get for 5 AAVE.
  // const trade = await uniswapPairFactory.trade('10', TradeDirection.output);

  // you should probably check this before they confirm the swap again
  // this is just so its simple to read
  if (!trade.fromBalance.hasEnough) {
    throw new Error('You do not have enough from balance to execute this swap');
  }

  // subscribe to quote changes this is just in example so your dont miss it
  /*trade.quoteChanged$.subscribe((value: TradeContext) => {
    // value will hold the same info as below but obviously with
    // the new trade info.
  });*/

  // obviously dont create your web3 instance everytime again and again!
  // this is just like this for ease of reading!
  const web3 = new Web3(uniswapPairFactory.providerUrl);

  // Please note when you do your trade if `approvalTransaction` is defined the user does not have enough allowance to perform this trade
  // aka the router can not move their erc20 tokens on their behalf of the user.
  // This will generate the transaction for the approval of moving tokens for the user.
  // This uses the max hex possible which means they will not have to do this again if they want to swap from the SAME from token again later.
  // If they have only approved moving on uniswap v2 and try to execute a v3 trade they would have to approve that but again once approved
  // the v3 router then they will not have to again for that version.
  // Please note the approval is per each erc20 token, so if they picked another from token after they swapped they would need to do this again.
  // You have to send and sign the transaction from within your dApp. Remember when they do not have enough allowance it will mean doing 2 transaction,
  // 1 to allow uniswap to move tokens on their behalf then the next one to actually execute the trade.
  // On `eth` > `erc20` the `approvalTransaction` will always be undefined as you only need to do this when moving `erc20 > eth` and `erc20 > erc20`.

  var YOUR_PRIVATE_KEY = "blank";

  if (trade.approvalTransaction) {
    const signedTransaction = await web3.eth.accounts.signTransaction(
      trade.approvalTransaction,
      YOUR_PRIVATE_KEY
    );

    if (!signedTransaction.rawTransaction) {
      throw new Error('Could not find tx');
    }

    web3.eth
      .sendSignedTransaction(signedTransaction.rawTransaction)
      .once('transactionHash', (transactionHash) => {
        console.log('approved txHash', transactionHash);
      })
      .once('receipt', async (receipt) => {
        console.log('approved receipt', receipt);
        await executeTrade(web3, trade);
      })
//      .on('error', async (error: any) => {
//        console.log(`ERROR ${error.message}`);
//      });
  } else {
    console.log(
      'already has approved uniswap to move tokens on your behalf or its eth > erc20 token swap'
    );
    await executeTrade(web3, trade);
  }
};

const executeTrade = async (Web3, TradeContext) => {
trade = TradeContext;
  var YOUR_PRIVATE_KEY = "blank";

  const signedTransaction = await web3.eth.accounts.signTransaction(
    trade.transaction,
    YOUR_PRIVATE_KEY
  );

  if (!signedTransaction.rawTransaction) {
    throw new Error('Could not find tx');
  }

  web3.eth
    .sendSignedTransaction(signedTransaction.rawTransaction)
    .once('transactionHash', (transactionHash) => {
      console.log('trade txHash', transactionHash);
    })
    .once('receipt', (receipt) => {
      console.log('trade receipt', receipt);
      // once done with trade aka they have sent it and you don't need it anymore call
      trade.destroy();
    });
//    .on('error', async (error) => {
//      console.log(`ERROR ${error.message}`);
//    });
};

web3TradeExample();