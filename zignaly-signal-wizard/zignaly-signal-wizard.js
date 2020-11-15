
let suggestedSignal = document.getElementById('suggestedSignal');
let signalButton = document.getElementById('signalWizardButton');

zigProviderTypeChange();

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

  // Leverage
  var zigLeverage = document.getElementById("zigLeverage").value;
  
  suggestedWebhookSignal.innerHTML = zigExchange + zigExchangeType + zigSide + zigLeverage;
  suggestedEmailSignal.innerHTML = zigExchange + zigExchangeType + zigSide + zigLeverage;
  suggestedGetSignal.innerHTML = zigExchange + zigExchangeType + zigSide + zigLeverage;
  suggestedTVWebhookSignal.innerHTML = zigExchange + zigExchangeType + zigSide + zigLeverage;
  suggestedTVEmailSignal.innerHTML = zigExchange + zigExchangeType + zigSide + zigLeverage;

}

function zigProviderTypeChange() {
  var zigProviderType = document.getElementById("zigProviderType").value;

  var profitSharingExchanges = ["zignaly"];
  var copyTraderExchanges = ["binance", "kucoin", "zignaly"]; 
  var signalProviderExchanges = ["binance", "kucoin", "zignaly"]; 

  if (zigProviderType === 'profitsharing') {
      usedExchanges = profitSharingExchanges;
  }
  if (zigProviderType === 'copytrader') {
      usedExchanges = copyTraderExchanges;
  }
  if (zigProviderType === 'signalprovider') {
      usedExchanges = signalProviderExchanges;
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
  zigExchangeChange(); // Force exchange type change to be taken into account

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

  var spotLeverages = ["1"];
  var futuresLeverages = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125"];

  if (zigExchangeType === 'spot') {
      usedLeverages = spotLeverages;
  }
  if (zigExchangeType === 'futures') {
      usedLeverages = futuresLeverages;
  }

  var zigLeverage = document.getElementById("zigLeverage");
  zigLeverage.innerHTML = "";

  for(var i = 0; i < usedLeverages.length; i++) {
      var opt = usedLeverages[i];

      var el = document.createElement("option");
      el.value = opt;
      el.text = el.value + 'x';

      zigLeverage.add(el);
  }

  updateInfo();

}

function zigExchangeChange() {

  var zigExchange = document.getElementById("zigExchange").value;

  var zignalyExchangeTypes = ["futures"];
  var binanceExchangeTypes = ["spot", "futures"];
  var kucoinExchangeTypes = ["spot", "futures"];

  if (zigExchange === 'zignaly') {
      usedExchangeTypes = zignalyExchangeTypes;
  }
  if (zigExchange === 'binance') {
      usedExchangeTypes = binanceExchangeTypes;
  }
  if (zigExchange === 'kucoin') {
      usedExchangeTypes = kucoinExchangeTypes;
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

  zigExchangeTypeChange(); // Force exchange type change to be taken into account

}

function zigSideChange() {
  updateInfo();
}

function zigLeverageChange() {
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


  // Exchange
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

  var zigSide = document.getElementById("zigSide").value;


  // Side
  if (zigSide === 'long') {
      tip1 = 'Long side can be used in both spot and futures exchanges.';

      addLi(tips, tip1);

  }
  if (zigSide === 'short') {
      tip1 = 'Short side can only be used in futures exchanges.';

      addLi(tips, tip1);

  }

}

function updateInfo() {
  setSuggestedSignal();
  updateTips();
}
