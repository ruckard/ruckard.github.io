
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

  // SignalType
  var zigSignalType = document.getElementById("zigSignalType").value;

  // OrderType
  var zigOrderType = document.getElementById("zigOrderType").value;

  // LimitPrice
  var zigEnableLimitPrice = document.getElementById("zigEnableLimitPrice").checked;
  if (zigEnableLimitPrice) {
    zigLimitPrice = document.getElementById("zigLimitPrice").value;
  } else {
    zigLimitPrice = "";
  }

  // BuyStopPrice
  var zigEnableBuyStopPrice = document.getElementById("zigEnableBuyStopPrice").checked;
  if (zigEnableBuyStopPrice) {
    zigBuyStopPrice = document.getElementById("zigBuyStopPrice").value;
  } else {
    zigBuyStopPrice = "";
  }

  // TakeProfit
  var zigEnableTakeProfit = document.getElementById("zigEnableTakeProfit").checked;
  if (zigEnableTakeProfit) {
    if (zigSide === 'long') {
      zigTakeProfit = document.getElementById("zigTakeProfit").value;
    } else {
      zigTakeProfit = "-" + document.getElementById("zigTakeProfit").value;
    }
  } else {
    zigTakeProfit = "";
  }
  // StopLoss
  var zigEnableStopLoss = document.getElementById("zigEnableStopLoss").checked;
  if (zigEnableStopLoss) {
    if (zigSide === 'long') {
      zigStopLoss = "-" + document.getElementById("zigStopLoss").value;
    } else {
      zigStopLoss = document.getElementById("zigStopLoss").value;
    }
  } else {
    zigStopLoss = "";
  }
  // Trailing Stop Percentage
  var zigEnableTrailingPercentage = document.getElementById("zigEnableTrailingPercentage").checked;
  if (zigEnableTrailingPercentage) {
    if (zigSide === 'long') {
      zigTrailingPercentageTrigger = document.getElementById("zigTrailingPercentageTrigger").value;
      zigTrailingPercentageDistance = "-" + document.getElementById("zigTrailingPercentageDistance").value;
    } else {
      zigTrailingPercentageTrigger = "-" + document.getElementById("zigTrailingPercentageTrigger").value;
      zigTrailingPercentageDistance = document.getElementById("zigTrailingPercentageDistance").value;
    }
  } else {
    zigTrailingPercentageTrigger = "";
    if (!(zigEnableTrailingPrice)) {
      zigTrailingPercentageDistance = "";
    }
  }
  // Trailing Stop Price
  var zigEnableTrailingPrice = document.getElementById("zigEnableTrailingPrice").checked;
  if (zigEnableTrailingPrice) {
    if (zigSide === 'long') {
      zigTrailingPriceTrigger = document.getElementById("zigTrailingPriceTrigger").value;
      zigTrailingPercentageDistance = "-" + document.getElementById("zigTrailingPriceDistance").value;
    } else {
      zigTrailingPriceTrigger = "-" + document.getElementById("zigTrailingPriceTrigger").value;
      zigTrailingPercentageDistance = document.getElementById("zigTrailingPriceDistance").value;
    }
  } else {
    zigTrailingPriceTrigger = "";
    if (!(zigEnableTrailingPercentage)) {
      zigTrailingPercentageDistance = "";
    }
  }

  suggestedWebhookSignal.innerHTML = zigExchange + zigExchangeType + zigSide + zigLeverage + zigSignalType + zigOrderType + zigLimitPrice + zigBuyStopPrice + zigTakeProfit + zigStopLoss + zigTrailingPercentageTrigger + zigTrailingPriceTrigger + zigTrailingPercentageDistance;
  suggestedEmailSignal.innerHTML = zigExchange + zigExchangeType + zigSide + zigLeverage + zigSignalType + zigOrderType + zigLimitPrice + zigBuyStopPrice + zigTakeProfit + zigStopLoss + zigTrailingPercentageTrigger + zigTrailingPriceTrigger + zigTrailingPercentageDistance;
  suggestedGetSignal.innerHTML = zigExchange + zigExchangeType + zigSide + zigLeverage + zigSignalType + zigOrderType + zigLimitPrice + zigBuyStopPrice + zigTakeProfit + zigStopLoss + zigTrailingPercentageTrigger + zigTrailingPriceTrigger + zigTrailingPercentageDistance;
  suggestedTVWebhookSignal.innerHTML = zigExchange + zigExchangeType + zigSide + zigLeverage + zigSignalType + zigOrderType + zigLimitPrice + zigBuyStopPrice + zigTakeProfit + zigStopLoss + zigTrailingPercentageTrigger + zigTrailingPriceTrigger + zigTrailingPercentageDistance;
  suggestedTVEmailSignal.innerHTML = zigExchange + zigExchangeType + zigSide + zigLeverage + zigSignalType + zigOrderType + zigLimitPrice + zigBuyStopPrice + zigTakeProfit + zigStopLoss + zigTrailingPercentageTrigger + zigTrailingPriceTrigger + zigTrailingPercentageDistance;

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

  var profitSharingSignalTypes = ["entry","exit","stop","start","disableMarket","enableMarket","panicSell", "update", "cancelEntry","reverse"];
  var copyTraderSignalTypes = ["entry","exit","stop","start","disableMarket","enableMarket","panicSell", "update","cancelEntry","reverse"];
  var signalProviderSignalTypes = ["entry","exit","reEntry","stop","start","disableMarket","enableMarket","panicSell", "update","cancelEntry","reverse"];

  if (zigProviderType === 'profitsharing') {
      usedSignalTypes = profitSharingSignalTypes;
  }
  if (zigProviderType === 'copytrader') {
      usedSignalTypes = copyTraderSignalTypes;
  }
  if (zigProviderType === 'signalprovider') {
      usedSignalTypes = signalProviderSignalTypes;
  }

  var zigSignalType = document.getElementById("zigSignalType");
  zigSignalType.innerHTML = "";

  for(var i = 0; i < usedSignalTypes.length; i++) {
      var opt = usedSignalTypes[i];

      var el = document.createElement("option");
      el.value = opt;
      if (el.value === "entry") {
          el.text = "Entry";
      }
      if (el.value === "exit") {
          el.text = "Exit";
      }
      if (el.value === "reEntry") {
          el.text = "Re entry";
      }
      if (el.value === "start") {
          el.text = "Start";
      }
      if (el.value === "stop") {
          el.text = "Stop";
      }
      if (el.value === "disableMarket") {
          el.text = "Disable Market";
      }
      if (el.value === "enableMarket") {
          el.text = "Enable Market";
      }
      if (el.value === "panicSell") {
          el.text = "Panic Sell";
      }
      if (el.value === "update") {
          el.text = "Update";
      }
      if (el.value === "cancelEntry") {
          el.text = "Cancel entry";
      }
      if (el.value === "reverse") {
          el.text = "Reverse entry";
      }

      zigSignalType.add(el);
  }
  zigSignalTypeChange(); // Force signal type change to be taken into account

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

function zigSignalTypeChange() {
  var zigSignalType = document.getElementById("zigSignalType").value;
  if (!((zigSignalType === 'entry') || (zigSignalType === 'update'))) {
    document.getElementById("zigEnableTakeProfit").checked = false;
    document.getElementById("zigEnableStopLoss").checked = false;
    document.getElementById("zigEnableTrailingPercentage").checked = false;
    document.getElementById("zigEnableTrailingPrice").checked = false;
  }
  var zigProviderType = document.getElementById("zigProviderType").value;

  if (!(zigProviderType === 'signalprovider')) {
      document.getElementById("zigEnableTrailingPrice").checked = false;
  }
  updateInfo();
}

function zigEnableTakeProfitChange() {
  zigSignalTypeChange(); // So that it's disabled when it should not be enabled.
  updateInfo();
}

function zigTakeProfitChange() {
  updateInfo();
}

function zigEnableStopLossChange() {
  zigSignalTypeChange(); // So that it's disabled when it should not be enabled.
  updateInfo();
}

function zigStopLossChange() {
  updateInfo();
}

function zigEnableTrailingPercentageChange() {
  document.getElementById("zigEnableTrailingPrice").checked = false;
  zigSignalTypeChange(); // So that it's disabled when it should not be enabled.
  updateInfo();
}

function zigTrailingPercentageTriggerChange() {
  updateInfo();
}

function zigTrailingPercentageDistanceChange() {
  updateInfo();
}

function zigEnableTrailingPriceChange() {
  document.getElementById("zigEnableTrailingPercentage").checked = false;
  zigSignalTypeChange(); // So that it's disabled when it should not be enabled.
  updateInfo();
}

function zigTrailingPriceTriggerChange() {
  updateInfo();
}

function zigTrailingPriceDistanceChange() {
  updateInfo();
}

function zigOrderTypeChange() {
  var zigOrderType = document.getElementById("zigOrderType").value;
  if ((zigOrderType === 'market') || (zigSignalType === 'limit')) {
    document.getElementById("zigEnableBuyStopPrice").checked = false;
  }
  if (zigOrderType === 'market') {
    document.getElementById("zigEnableLimitPrice").checked = false;
  }
  if (zigOrderType === 'limit') {
    document.getElementById("zigEnableLimitPrice").checked = true;
    document.getElementById("zigEnableBuyStopPrice").checked = false;
  }
  if (zigOrderType === 'stop-limit') {
    document.getElementById("zigEnableLimitPrice").checked = true;
    document.getElementById("zigEnableBuyStopPrice").checked = true;
  }
  updateInfo();
}

function zigEnableLimitPriceChange() {
  updateInfo();
  zigOrderTypeChange(); // So that it's disabled when it should not be enabled.
}

function zigLimitPriceChange() {
  updateInfo();
}

function zigEnableBuyStopPriceChange() {
  updateInfo();
  zigOrderTypeChange(); // So that it's disabled when it should not be enabled.
}

function zigBuyStopPriceChange() {
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
  var zigOrderType = document.getElementById("zigOrderType").value;


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
  // Signal type
  var zigSignalType = document.getElementById("zigSignalType").value;
  if (zigSignalType === 'reEntry') {
      tip1 = 'reEntry signals are only allowed in Signal Providers.';
      tip2 = 'ReEntry (or DCA) signals identify previously opened positions (with the signalId parameter) and enlarge their positions size. ';
      tip3 = '(reEntry) The new amount is based on the user configuration. And the option of Accept DCA/ReBuys Signals option needs to be checked by the user in the provider s options.';
      tip4 = '(reEntry) The new buy order is sent to the exchange and will be a buy limit order; if no price is specified in the signal, the current price will be used as the limit price.';

      addLi(tips, tip1);
      addLi(tips, tip2);
      addLi(tips, tip3);
      addLi(tips, tip4);

  }
  if (zigSignalType === 'stop') {
      tip1 = '(stop) Stop signals will disable your provider from accepting any new entry signal. All other signals are accepted (reEntry, exit...).';

      addLi(tips, tip1);
  }
  if (zigSignalType === 'start') {
      tip1 = '(start) Start signals will resume accepting signals for a previously stopped provider.';

      addLi(tips, tip1);
  }
  if (zigSignalType === 'disableMarket') {
      tip1 = '(disableMarket) DisableMarket signals will make your provider not accept any new buy signal for the given market. All other signals are accepted (reBuy, sell). It works like the stop signals, but for a specific market.';

      addLi(tips, tip1);
  }
  if (zigSignalType === 'enableMarket') {
      tip1 = '(enableMarket) EnableMarket signals will resume accepting signals for a previously disabled provider in the given market.';

      addLi(tips, tip1);
  }
  if (zigSignalType === 'panicSell') {
      tip1 = '(panicSell) PanicSell signals are used to sell everything at the current market price. You can filter by quote or base if you want to delimit it a little bit.';

      addLi(tips, tip1);
  }
  if ((zigSignalType === 'panicSell') && (zigProviderType === 'signalprovider')) {
      tip1 = '(panicSell) To accept panicSell signals, the user has to have the following option checked in the provider s option: Accept panic sell signals from this provider.';

      addLi(tips, tip1);
  }
  if (zigSignalType === 'update') {
      tip1 = '(update) Update signals allow you to update open positions.';

      addLi(tips, tip1);
  }
  if ((zigSignalType === 'update') && (zigProviderType === 'signalprovider')) {
      tip1 = '(update) To accept update signals, the user has to have the following option checked in the provider s option: Accept Updates from Signals?.';

      addLi(tips, tip1);
  }
  if (zigSignalType === 'cancelEntry') {
      tip1 = '(cancelEntry) cancelEntry type will remove an entry signal that has not been filled yet. ';

      addLi(tips, tip1);
  }
  if (zigSignalType === 'cancelEntry') {
      tip1 = '(cancelEntry) For example, if your entry was using a limit order, it will be removed from the exchange.';

      addLi(tips, tip1);
  }
  if (zigSignalType === 'reverse') {
      tip1 = '(reverse) The signal works as an exit and an entry signal.';

      addLi(tips, tip1);
  }
  if ((zigSignalType === 'entry') && (zigSide === 'long')) {
      tip1 = '(entry) entry is the updated named for this signal. Obsolete documentation called it: "buy"';

      addLi(tips, tip1);
  }
  if ((zigSignalType === 'exit') && (zigSide === 'long')) {
      tip1 = '(exit) exit is the updated named for this signal. Obsolete documentation called it: "sell"';

      addLi(tips, tip1);
  }
  if ((zigSignalType === 'entry') && (zigSide === 'long')) {
      tip1 = '(entry) Entry signal type when being in long mode means: To buy or to enter a long position';

      addLi(tips, tip1);
  }
  if ((zigSignalType === 'entry') && (zigSide === 'short')) {
      tip1 = '(entry) Entry signal type when being in short mode means: To sell or to enter a short position';

      addLi(tips, tip1);
  }
  if ((zigSignalType === 'exit') && (zigSide === 'long')) {
      tip1 = '(exit) Exit signal type when being in long mode means: To sell or to exit a long position';

      addLi(tips, tip1);
  }
  if ((zigSignalType === 'exit') && (zigSide === 'short')) {
      tip1 = '(exit) Exit signal type when being in short mode means: To buy or to exit a short position';

      addLi(tips, tip1);
  }
  // Enable Take Profit
  var zigEnableTakeProfit = document.getElementById("zigEnableTakeProfit").checked;
  if ((zigEnableTakeProfit) && (zigSide === 'short')) {
      tip1 = '(takeProfit) When being in short mode the take profit is set with a minus sign (-).';

      addLi(tips, tip1);
  }
  if ((zigEnableTakeProfit) && (zigSide === 'long')) {
      tip1 = '(takeProfit) When being in long mode the take profit is set without the minus sign ( ).';

      addLi(tips, tip1);
  }
  // Enable Stop Loss
  var zigEnableStopLoss = document.getElementById("zigEnableStopLoss").checked;
  if ((zigEnableStopLoss) && (zigSide === 'long')) {
      tip1 = '(stopLoss) When being in long mode the stop loss is set with a minus sign (-).';
      addLi(tips, tip1);
  }
  if ((zigEnableStopLoss) && (zigSide === 'short')) {
      tip1 = '(stopLoss) When being in short the mode the stop loss is set without the minus sign ( ).';
      addLi(tips, tip1);
  }
  // Enable Trailing Stop Percentage
  var zigEnableTrailingPercentage = document.getElementById("zigEnableTrailingPercentage").checked;
  if ((zigEnableTrailingPercentage) && (zigSide === 'short')) {
      tip1 = '(trailingStopTriggerPercentage) When being in short mode the trigger is set with a minus sign (-).';

      addLi(tips, tip1);
      tip1 = '(trailingStopTriggerDistance) When being in short mode the distance is set without the minus sign ( ).';

      addLi(tips, tip1);
  }
  if ((zigEnableTrailingPercentage) && (zigSide === 'long')) {
      tip1 = '(trailingStopTriggerPercentage) When being in long mode the trigger is set without the minus sign ( ).';

      addLi(tips, tip1);
      tip1 = '(trailingStopTriggerDistance) When being in long mode the distance is set with a minus sign (-).';

      addLi(tips, tip1);
  }
  // Enable Trailing Stop Price
  var zigEnableTrailingPrice = document.getElementById("zigEnableTrailingPrice").checked;
  if ((zigEnableTrailingPrice) && (zigSide === 'short')) {
      tip1 = '(trailingStopTriggerDistance) When being in short mode the distance is set without the minus sign ( ).';

      addLi(tips, tip1);
  }
  if ((zigEnableTrailingPrice) && (zigSide === 'long')) {
      tip1 = '(trailingStopTriggerDistance) When being in long mode the distance is set with a minus sign (-).';

      addLi(tips, tip1);
  }
  if (zigEnableTrailingPrice) {
      tip1 = '(trailingStopTriggerPrice) If you don\'t send it, the one from the user\'s settings for this provider will be used..';

      addLi(tips, tip1);
  }
  if ((zigOrderType === 'market') && (zigProviderType === 'signalprovider')) {
      tip1 = '(orderType=market) To accept market buy orders, the user has to check the option: Allow buy market order (your price deviation won\'t have effect)';

      addLi(tips, tip1);
  }
}

function updateInfo() {
  setSuggestedSignal();
  updateTips();
}
