
let suggestedSignal = document.getElementById('suggestedSignal');
let signalButton = document.getElementById('signalWizardButton');

updateInfo();

function setSuggestedSignal() {
  // Define variables
  var zigExchangeType="";
  // Exchange
  var zigExchange = document.getElementById("zigExchange").value;
  // Provider type
  var zigProviderType = document.getElementById("zigProviderType").value;

  if (zigProviderType === 'profitsharing') {
      zigUsePercent = true;
  }
  if (zigProviderType === 'copytrader') {
      zigUsePercent = true;
  }
  if (zigProviderType === 'signalprovider') {
      zigUsePercent = false;
  }
  // Exchange type
  var zigExchangeType = document.getElementById("zigExchangeType").value;

  // Side
  var zigSide = document.getElementById("zigSide").value;
  // Overwrite logic
  if (zigProviderType === 'profitsharing') {
      zigExchangeType = "futures";
  }
  
  suggestedSignal.innerHTML = zigExchange + zigExchangeType + zigExchange + zigSide;
}

function zigProviderTypeChange() {
  var zigProviderType = document.getElementById("zigProviderType").value;

  var profitSharingExchangeTypes = ["futures"];
  var copyTraderExchangeTypes = ["spot", "futures"]; 
  var signalProviderExchangeTypes = ["spot", "futures"]; 

  var profitSharingExchanges = ["zignaly"];
  var copyTraderExchanges = ["binance", "kucoin", "zignaly"]; 
  var signalProviderExchanges = ["binance", "kucoin", "zignaly"]; 

  if (zigProviderType === 'profitsharing') {
      usedExchangeTypes = profitSharingExchangeTypes;
      usedExchanges = profitSharingExchanges;
  }
  if (zigProviderType === 'copytrader') {
      usedExchangeTypes = copyTraderExchangeTypes;
      usedExchanges = copyTraderExchanges;
  }
  if (zigProviderType === 'signalprovider') {
      usedExchangeTypes = signalProviderExchangeTypes;
      usedExchanges = signalProviderExchanges;
  }

  var zigExchangeType = document.getElementById("zigExchangeType"); 
  zigExchangeType.innerHTML = "";

  for(var i = 0; i < usedExchangeTypes.length; i++) {
      var opt = usedExchangeTypes[i];

      var el = document.createElement("option");
      el.value = opt;
      if (el.value === "futures") {
          el.text = "Futures";
      }
      if (el.value === "spot") {
          el.text = "Spot";
      }

      zigExchangeType.add(el);
  }

  var zigExchange = document.getElementById("zigExchange"); 
  zigExchange.innerHTML = "";

  for(var i = 0; i < usedExchanges.length; i++) {
      var opt = usedExchanges[i];

      var el = document.createElement("option");
      el.value = opt;
      if (el.value === "binance") {
          el.text = "Binance";
      }
      if (el.value === "kucoin") {
          el.text = "Kucoin";
      }
      if (el.value === "zignaly") {
          el.text = "Zignaly";
      }

      zigExchange.add(el);
  }
  zigExchangeTypeChange(); // Force exchange type change to be taken into account

}

function zigExchangeTypeChange() {
  var zigExchangeType = document.getElementById("zigExchangeType").value;

  var spotExchangeTypeSides = ["long"];
  var futuresExchangeTypeSides = ["long", "short"];

  if (zigExchangeType === 'spot') {
      usedExchangeTypeSides = spotExchangeTypeSides;
  }
  if (zigExchangeType === 'futures') {
      usedExchangeTypeSides = futuresExchangeTypeSides;
  }

  var zigSide = document.getElementById("zigSide");
  zigSide.innerHTML = "";

  for(var i = 0; i < usedExchangeTypeSides.length; i++) {
      var opt = usedExchangeTypeSides[i];

      var el = document.createElement("option");
      el.value = opt;
      if (el.value === "long") {
          el.text = "Long";
      }
      if (el.value === "short") {
          el.text = "Short";
      }

      zigSide.add(el);
  }
  updateInfo();

}

function zigExchangeChange() {
  updateInfo();
}

function zigSideChange() {
  updateInfo();
}

function addLi(ulField, text) {
  var node = document.createElement("LI");
  var textNode = document.createTextNode(text);
  node.appendChild(textNode);
  ulField.appendChild(node);
}

function updateTips() {
  // TODO: the reEntry works for futures too, but it doesn't work for copy-trading

  tips = document.getElementById("tips");
  tips.innerHTML="";


  var zigProviderType = document.getElementById("zigProviderType").value;


  // Profit Sharing Provider
  if (zigProviderType === 'profitsharing') {
      tip1 = 'Profit Sharing providers can only use Zignaly Exchanges.'
      tip2 = 'As of November 2020 Profit Sharing providers can only operate in futures.'

      addLi(tips, tip1);
      addLi(tips, tip2);

  }
  if (zigProviderType === 'copytrader') {
      tip1 = 'Copy Trader providers can only use percentages when submiting their signals. That is why you cannot send an specific quote.'

      addLi(tips, tip1);
  }
  if (zigProviderType === 'signalprovider') {
      tip1 = 'Signal providers can only use quotes when submiting their signals. That is why you cannot send an specific percentage.'

      addLi(tips, tip1);

  }

  var zigExchange = document.getElementById("zigExchange").value;


  // Profit Sharing Provider
  if (zigExchange === 'zignaly') {
      tip1 = 'Zignaly Exchange is under the hood a binance account. If the final users want to divide their allocated money into different providers it is easier to do so when using Profit Sharing providers because one provider can go long and another provider can go short and there is not a problem in futures as it would happened with a Copy Trader provider.';

      addLi(tips, tip1);

  }
//   if (zigExchange === 'binance') {
//       tip1 = ''
//
//       addLi(tips, tip1);
//   }
//   if (zigExchange === 'kucoin') {
//       tip1 = ''
//
//       addLi(tips, tip1);
//   }

}

function updateInfo() {
  setSuggestedSignal();
  updateTips();
}
