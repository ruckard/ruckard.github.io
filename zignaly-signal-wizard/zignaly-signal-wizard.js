
let suggestedSignal = document.getElementById('suggestedSignal');
let signalButton = document.getElementById('signalWizardButton');
let zignalyAPIURL = 'https://zignaly.com/api/signals.php';

zigProviderTypeChange(); // Force a valid init

function WebHookGen (attribute, value) {
    var webhookgen_return = "";
    if (value == "") {
        return ("");
    } else {
        webhookgen_return = '&nbsp;&nbsp;' + '"' + attribute + '":"' + value + '",<br>';
        return (webhookgen_return);
    }
}

function WebHookTVGen (attribute, value) {
    var webhooktvgen_return = "";
    if (value == "") {
        return ("");
    } else {
        webhooktvgen_return = '"' + attribute + '":"' + value + '",';
        return (webhooktvgen_return);
    }
}

function EmailGen (attribute, value) {
    var emailgen_return = "";
    if (value == "") {
        return ("");
    } else {
        emailgen_return = '&nbsp;&nbsp;' + attribute + '=' + value + '<br>';
        return (emailgen_return);
    }
}

function EmailTVGen (attribute, value) {
    var emailgen_return = "";
    if (value == "") {
        return ("");
    } else {
        emailgen_return = attribute + '=' + value + '||';
        return (emailgen_return);
    }
}

function GetGen (attribute, value) {
    var getgen_return = "";
    if (value == "") {
        return ("");
    } else {
        getgen_return = attribute + '=' + value + '&';
        return (getgen_return);
    }
}

function setSuggestedSignal() {
  // Define variables
  var zigExchangeType="";
  // Pair
  var zigPairQuote = document.getElementById("zigPairQuote").value;
  var zigPairBase = document.getElementById("zigPairBase").value;
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

  // Position Percentage
  var zigEnablePositionPercentage = document.getElementById("zigEnablePositionPercentage").checked;
  if (zigEnablePositionPercentage) {
    zigPositionPercentage = document.getElementById("zigPositionPercentage").value;
  } else {
    zigPositionPercentage = "";
  }
  // Position Size
  var zigEnablePositionSize = document.getElementById("zigEnablePositionSize").checked;
  if (zigEnablePositionSize) {
    zigPositionSize = document.getElementById("zigPositionSize").value;
  } else {
    zigPositionSize = "";
  }

  // TakeProfit
  var zigEnableTakeProfit = document.getElementById("zigEnableTakeProfit").checked;
  if (zigEnableTakeProfit) {
    if (zigSide === 'long') {
      zigTakeProfit = document.getElementById("zigTakeProfit").value;
    } else {
      zigTakeProfit = "-" + document.getElementById("zigTakeProfit").value;
    }
    zigTakeProfitPositionPercentage = document.getElementById("zigTakeProfitPositionPercentage").value;
  } else {
    zigTakeProfit = "";
    zigTakeProfitPositionPercentage = "";
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

  suggestedWebhookSignal.innerHTML = "{"
    + "<br>"
    + WebHookGen("pair", (zigPairQuote + zigPairBase))
    + WebHookGen("signalId", (zigSide + "-" + zigPairQuote + zigPairBase))
    + WebHookGen("exchange", zigExchange)
    + WebHookGen("exchangeAccountType", zigExchangeType)
    + WebHookGen("side", zigSide)
    + WebHookGen("leverage", zigLeverage)
    + WebHookGen("type", zigSignalType)
    + WebHookGen("orderType", zigOrderType)
    + WebHookGen("limitPrice", zigLimitPrice)
    + WebHookGen("buyStopPrice", zigBuyStopPrice)
    + WebHookGen("positionSize", zigPositionSize)
    + WebHookGen("positionSizePercentage", zigPositionPercentage)
    + WebHookGen("takeProfitAmountPercentage1", zigTakeProfitPositionPercentage)
    + WebHookGen("takeProfitPercentage1", zigTakeProfit)
    + WebHookGen("stopLossPercentage", zigStopLoss)
    + WebHookGen("trailingStopTriggerPercentage", zigTrailingPercentageTrigger)
    + WebHookGen("trailingStopTriggerPrice", zigTrailingPriceTrigger)
    + WebHookGen("trailingStopDistancePercentage", zigTrailingPercentageDistance)
    + '&nbsp;&nbsp;"key":"MYSECRETKEY"'
    + "<br>"
    + "}"
    ;

  suggestedEmailSignal.innerHTML = ""
    + EmailGen("pair", (zigPairQuote + zigPairBase))
    + EmailGen("signalId", (zigSide + "-" + zigPairQuote + zigPairBase))
    + EmailGen("exchange", zigExchange)
    + EmailGen("exchangeAccountType", zigExchangeType)
    + EmailGen("side", zigSide)
    + EmailGen("leverage", zigLeverage)
    + EmailGen("type", zigSignalType)
    + EmailGen("orderType", zigOrderType)
    + EmailGen("limitPrice", zigLimitPrice)
    + EmailGen("buyStopPrice", zigBuyStopPrice)
    + EmailGen("positionSize", zigPositionSize)
    + EmailGen("positionSizePercentage", zigPositionPercentage)
    + EmailGen("takeProfitAmountPercentage1", zigTakeProfitPositionPercentage)
    + EmailGen("takeProfitPercentage1", zigTakeProfit)
    + EmailGen("stopLossPercentage", zigStopLoss)
    + EmailGen("trailingStopTriggerPercentage", zigTrailingPercentageTrigger)
    + EmailGen("trailingStopTriggerPrice", zigTrailingPriceTrigger)
    + EmailGen("trailingStopDistancePercentage", zigTrailingPercentageDistance)
    + '&nbsp;&nbsp;key=MYSECRETKEY'
    + "<br>"
    ;

  var tmpSuggestedTVEmailSignal = ""
    + EmailTVGen("pair", (zigPairQuote + zigPairBase))
    + EmailTVGen("signalId", (zigSide + "-" + zigPairQuote + zigPairBase))
    + EmailTVGen("exchange", zigExchange)
    + EmailTVGen("exchangeAccountType", zigExchangeType)
    + EmailTVGen("side", zigSide)
    + EmailTVGen("leverage", zigLeverage)
    + EmailTVGen("type", zigSignalType)
    + EmailTVGen("orderType", zigOrderType)
    + EmailTVGen("limitPrice", zigLimitPrice)
    + EmailTVGen("buyStopPrice", zigBuyStopPrice)
    + EmailTVGen("positionSize", zigPositionSize)
    + EmailTVGen("positionSizePercentage", zigPositionPercentage)
    ;

  var tmpSuggestedHybridTVEmailSignal = tmpSuggestedTVEmailSignal
    + EmailTVGen("takeProfitAmountPercentage1", zigTakeProfitPositionPercentage)
    + EmailTVGen("takeProfitPercentage1", zigTakeProfit)
    + EmailTVGen("stopLossPercentage", zigStopLoss)
    + EmailTVGen("trailingStopTriggerPercentage", zigTrailingPercentageTrigger)
    + EmailTVGen("trailingStopTriggerPrice", zigTrailingPriceTrigger)
    + EmailTVGen("trailingStopDistancePercentage", zigTrailingPercentageDistance)
    ;

    suggestedTVEmailSignal.innerHTML = "<b>alert_message=" + "'</b>" + tmpSuggestedTVEmailSignal.substring(0, tmpSuggestedTVEmailSignal.length - 2) + "<b>'</b>" + "<br>";
    suggestedHybridTVEmailSignal.innerHTML = "<b>alert_message=" + "'</b>" + tmpSuggestedHybridTVEmailSignal.substring(0, tmpSuggestedHybridTVEmailSignal.length - 2) + "<b>'</b>" + "<br>";

  var tmpSuggestedTVWebhookSignal = ""
    + WebHookTVGen("pair", (zigPairQuote + zigPairBase))
    + WebHookTVGen("signalId", (zigSide + "-" + zigPairQuote + zigPairBase))
    + WebHookTVGen("exchange", zigExchange)
    + WebHookTVGen("exchangeAccountType", zigExchangeType)
    + WebHookTVGen("side", zigSide)
    + WebHookTVGen("leverage", zigLeverage)
    + WebHookTVGen("type", zigSignalType)
    + WebHookTVGen("orderType", zigOrderType)
    + WebHookTVGen("limitPrice", zigLimitPrice)
    + WebHookTVGen("buyStopPrice", zigBuyStopPrice)
    + WebHookTVGen("positionSize", zigPositionSize)
    + WebHookTVGen("positionSizePercentage", zigPositionPercentage)
    ;

  var tmpSuggestedHybridTVWebhookSignal = tmpSuggestedTVWebhookSignal
    + WebHookTVGen("takeProfitAmountPercentage1", zigTakeProfitPositionPercentage)
    + WebHookTVGen("takeProfitPercentage1", zigTakeProfit)
    + WebHookTVGen("stopLossPercentage", zigStopLoss)
    + WebHookTVGen("trailingStopTriggerPercentage", zigTrailingPercentageTrigger)
    + WebHookTVGen("trailingStopTriggerPrice", zigTrailingPriceTrigger)
    + WebHookTVGen("trailingStopDistancePercentage", zigTrailingPercentageDistance)
    ;

  suggestedTVWebhookSignal.innerHTML = "<b>alert_message=" + "'</b>" + tmpSuggestedTVWebhookSignal.substring(0, tmpSuggestedTVWebhookSignal.length - 1) + "<b>'</b>";
  suggestedHybridTVWebhookSignal.innerHTML = "<b>alert_message=" + "'</b>" + tmpSuggestedHybridTVWebhookSignal.substring(0, tmpSuggestedHybridTVWebhookSignal.length - 1) + "<b>'</b>";

  var tmpSuggestedGetSignal = zignalyAPIURL + '?'
    + GetGen("pair", (zigPairQuote + zigPairBase))
    + GetGen("signalId", (zigSide + "-" + zigPairQuote + zigPairBase))
    + GetGen("exchange", zigExchange)
    + GetGen("exchangeAccountType", zigExchangeType)
    + GetGen("side", zigSide)
    + GetGen("leverage", zigLeverage)
    + GetGen("type", zigSignalType)
    + GetGen("orderType", zigOrderType)
    + GetGen("limitPrice", zigLimitPrice)
    + GetGen("buyStopPrice", zigBuyStopPrice)
    + GetGen("positionSize", zigPositionSize)
    + GetGen("positionSizePercentage", zigPositionPercentage)
    + GetGen("takeProfitAmountPercentage1", zigTakeProfitPositionPercentage)
    + GetGen("takeProfitPercentage1", zigTakeProfit)
    + GetGen("stopLossPercentage", zigStopLoss)
    + GetGen("trailingStopTriggerPercentage", zigTrailingPercentageTrigger)
    + GetGen("trailingStopTriggerPrice", zigTrailingPriceTrigger)
    + GetGen("trailingStopDistancePercentage", zigTrailingPercentageDistance)
    ;

  suggestedGetSignal.innerHTML = tmpSuggestedGetSignal.substring(0, tmpSuggestedGetSignal.length - 1) + '&key=MYSECRETKEY';

//   suggestedGetSignal.innerHTML = zignalyAPIURL + zigExchange + zigExchangeType + zigSide + zigLeverage + zigSignalType + zigOrderType + zigLimitPrice + zigBuyStopPrice + zigPositionSize + zigPositionPercentage + zigTakeProfitPositionPercentage + zigTakeProfit + zigStopLoss + zigTrailingPercentageTrigger + zigTrailingPriceTrigger + zigTrailingPercentageDistance;

}

function zigProviderTypeChange() {
  var zigProviderType = document.getElementById("zigProviderType").value;

  var profitSharingExchanges = ["zignaly"];
  var copyTraderExchanges = ["binance", "ascendex", "bitmex", "kucoin", "vcce", "zignaly"];
  var signalProviderExchanges = ["binance", "ascendex", "bitmex", "kucoin", "vcce", "zignaly"];

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
          el.text = "KuCoin";
      }
      if (el.value === "zignaly") {
          el.text = "Zignaly";
      }
      if (el.value === "bitmex") {
          el.text = "BitMEX";
      }
      if (el.value === "ascendex") {
          el.text = "AscendEX";
      }
      if (el.value === "vcce") {
          el.text = "VCC EXCHANGE";
      }

      zigExchange.add(el);
  }
  zigExchangeChange(); // Force exchange type change to be taken into account

  var profitSharingSignalTypes = ["entry","exit","stop","start","disableMarket","enableMarket","panicSell", "update", "cancelEntry"];
  var copyTraderSignalTypes = ["entry","exit","stop","start","disableMarket","enableMarket","panicSell", "update","cancelEntry"];
  var signalProviderSignalTypes = ["entry","exit","reEntry","stop","start","disableMarket","enableMarket","panicSell", "update","cancelEntry"];

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
  var zigSignalType = document.getElementById("zigSignalType").value;

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

  var noneLeverages = [];
  var spotLeverages = ["1"];
  var futuresLeverages = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125"];

  usedLeverages = noneLeverages;

  if ((zigExchangeType === 'spot') && (zigSignalType === 'entry')) {
      usedLeverages = spotLeverages;
  }
  if ((zigExchangeType === 'futures') && (zigSignalType === 'entry')) {
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

  var zignalyExchangeTypes = ["futures", "spot"];
  var binanceExchangeTypes = ["futures", "spot"];
  var kucoinExchangeTypes = ["spot"];
  var bitmexExchangeTypes = ["futures"];
  var ascendexExchangeTypes = ["spot"];
  var vcceExchangeTypes = ["spot"];

  if (zigExchange === 'zignaly') {
      usedExchangeTypes = zignalyExchangeTypes;
  }
  if (zigExchange === 'binance') {
      usedExchangeTypes = binanceExchangeTypes;
  }
  if (zigExchange === 'kucoin') {
      usedExchangeTypes = kucoinExchangeTypes;
  }
  if (zigExchange === 'bitmex') {
      usedExchangeTypes = bitmexExchangeTypes;
  }
  if (zigExchange === 'ascendex') {
      usedExchangeTypes = ascendexExchangeTypes;
  }
  if (zigExchange === 'vcce') {
      usedExchangeTypes = vcceExchangeTypes;
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
  var entryOrUpdate = ((zigSignalType === 'entry') || (zigSignalType === 'update'));
  if (! entryOrUpdate) {
    document.getElementById("zigEnableTakeProfit").checked = false;
    document.getElementById("zigEnableStopLoss").checked = false;
    document.getElementById("zigEnableTrailingPercentage").checked = false;
    document.getElementById("zigEnableTrailingPrice").checked = false;
    document.getElementById("zigEnablePositionSize").checked = false;
    document.getElementById("zigEnablePositionPercentage").checked = false;
  }
  var zigProviderType = document.getElementById("zigProviderType").value;

  if (!(zigProviderType === 'signalprovider')) {
      document.getElementById("zigEnableTrailingPrice").checked = false;
  }
  var zigEnablePositionSize = document.getElementById("zigEnablePositionSize").checked;
  var zigEnablePositionPercentage = document.getElementById("zigEnablePositionPercentage").checked;

  if ((zigSignalType === 'entry') && (zigProviderType === 'signalprovider')) {
      document.getElementById("zigEnablePositionSize").checked = true;
      document.getElementById("zigEnablePositionPercentage").checked = false;
  }
  if ((zigSignalType === 'entry') && (!(zigProviderType === 'signalprovider'))) {
      document.getElementById("zigEnablePositionSize").checked = false;
      document.getElementById("zigEnablePositionPercentage").checked = true;
  }
  if (zigSignalType === 'update') {
      document.getElementById("zigEnableLimitPrice").checked = false;
      document.getElementById("zigEnableBuyStopPrice").checked = false;
      document.getElementById("zigPositionSize").checked = false;
      document.getElementById("zigPositionPercentage").checked = false;
  }
  var entryOrderTypes = ["market", "limit", "stop-limit"];
  var exitOrderTypes = ["market", "limit"];
  var noOrderTypes = [];

  usedOrderTypes = noOrderTypes;
  if (zigSignalType === 'entry') {
      usedOrderTypes = entryOrderTypes;
  }
  if (zigSignalType === 'exit') {
      usedOrderTypes = exitOrderTypes;
  }

  var zigOrderType = document.getElementById("zigOrderType");
  zigOrderType.innerHTML = "";

  for(var i = 0; i < usedOrderTypes.length; i++) {
      var opt = usedOrderTypes[i];

      var el = document.createElement("option");
      el.value = opt;
      if (el.value === "limit") {
          el.text = "Limit";
      }
      if (el.value === "market") {
          el.text = "Market";
      }
      if (el.value === "stop-limit") {
          el.text = "Stop Limit";
      }

      zigOrderType.add(el);
  }
  zigOrderTypeChange(); // Force OrderType change to be taken into account
  zigExchangeTypeChange(); // Force leverage change to be taken into account
  updateInfo();
}

function zigEnableTakeProfitChange() {
  zigSignalTypeChange(); // So that it's disabled when it should not be enabled.
  updateInfo();
}

function zigTakeProfitChange() {
  updateInfo();
}

function zigTakeProfitPositionPercentageChange() {
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
  zigSignalTypeChange(); // So that it's disabled when it should not be enabled.
  zigOrderTypeChange(); // So that it's disabled when it should not be enabled.
}

function zigLimitPriceChange() {
  updateInfo();
}

function zigEnableBuyStopPriceChange() {
  updateInfo();
  zigSignalTypeChange(); // So that it's disabled when it should not be enabled.
  zigOrderTypeChange(); // So that it's disabled when it should not be enabled.
}

function zigBuyStopPriceChange() {
  updateInfo();
}

function zigEnablePositionSizeChange() {
  document.getElementById("zigEnablePositionPercentage").checked = false;
  zigSignalTypeChange(); // So that it's disabled when it should not be enabled.
  updateInfo();
}

function zigEnablePositionPercentageChange() {
  document.getElementById("zigEnablePositionSize").checked = false;
  zigSignalTypeChange(); // So that it's disabled when it should not be enabled.
  updateInfo();
}

function zigPositionSizeChange() {
  updateInfo();
}

function zigPositionPercentageChange() {
  updateInfo();
}

function zigPairQuoteChange() {
  updateInfo();
}

function zigPairBaseChange() {
  var zigPairBase = document.getElementById("zigPairBase").value;
  document.getElementById("PAIRBASE1").innerHTML = zigPairBase;
  document.getElementById("PAIRBASE2").innerHTML = zigPairBase;
  document.getElementById("PAIRBASE3").innerHTML = zigPairBase;
  document.getElementById("PAIRBASE4").innerHTML = zigPairBase;
  updateInfo();
}

function metaChoosenToggleDisplay(choosenMethod) {
  var currentDisplay = document.getElementById(choosenMethod).style.display;
  document.getElementById(choosenMethod).style.display = (currentDisplay == "block") ? "none" : "block" ;
  document.getElementById(choosenMethod + "-plus").innerHTML = (currentDisplay == "block") ? "(+)" : "(-)" ;
}

function tradingviewWebhookChoosenToggleDisplay() {
  metaChoosenToggleDisplay("tradingview-webhook-choosen");
}

function tradingviewEmailChoosenToggleDisplay() {
  metaChoosenToggleDisplay("tradingview-email-choosen");
}

function genericWebHookChoosenToggleDisplay() {
  metaChoosenToggleDisplay("generic-webhook-choosen");
}

function genericEmailChoosenToggleDisplay() {
  metaChoosenToggleDisplay("generic-email-choosen");
}

function genericGetChoosenToggleDisplay() {
  metaChoosenToggleDisplay("generic-get-choosen");
}

function introductionToggleDisplay() {
  metaChoosenToggleDisplay("introduction");
}

function warningToggleDisplay() {
  metaChoosenToggleDisplay("warning");
}

// function tradingviewWebhookChoosenToggleDisplay() {
//   var currentDisplay = document.getElementById("tradingview-webhook-choosen").style.display;
//   document.getElementById("tradingview-webhook-choosen").style.display = (currentDisplay == "block") ? "none" : "block" ;
//   document.getElementById("tradingview-webhook-choosen-plus").innerHTML = (currentDisplay == "block") ? "(+)" : "(-)" ;
// }

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

      addLi(tips, tip1);

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
  if (zigExchange === 'bitmex') {
      tip1 = 'Bitmex cannot be used in Spot but only in Futures.';

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
  if (((zigProviderType === 'copytrader') || (zigProviderType === 'signalprovider')) && (zigExchange === 'binance')) {
      tip1 = 'If you create a service for binance both users with binance or zignaly exchanges will be able to follow it.';

      addLi(tips, tip1);
  }
  if (((zigProviderType === 'copytrader') || (zigProviderType === 'signalprovider')) && (zigExchange === 'zignaly')) {
      tip1 = 'If you create a service for zignaly both users with binance or zignaly exchanges will be able to follow it.';

      addLi(tips, tip1);
  }
}

function updateInfo() {
  setSuggestedSignal();
  updateTips();
}
