
let suggestedSignal = document.getElementById('suggestedSignal');
let signalButton = document.getElementById('signalWizardButton');

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

  // Overwrite logic
  if (zigProviderType === 'profitsharing') {
      zigExchangeType = "futures";
  }
  
  suggestedSignal.innerHTML = zigExchange + zigExchangeType + zigExchange;
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

}

