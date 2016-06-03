function makeRequest(params, endpoint, api_secret) {
  var sign = makeSign(params, endpoint, api_secret);
  params["sign"] = sign;
  var url = BASE_URL + endpoint + paramsToQuery(params);
  var response = UrlFetchApp.fetch(url);
  Logger.log(url)
  Logger.log(response.getContentText());
  return response.getContentText();
}

function makeSign(params, endpoint, api_secret) {
  params = sortObject(params);
  var signString = "";
  for (var attr in params) {signString += attr + "=" + params[attr]};
  signString += endpoint + api_secret;
  var signed = sign(signString); 
  return signed;
}

function sign(message){     
  message = message || "thisisteststring";
  Logger.log(message);
  var signature = Utilities.computeDigest(
                       Utilities.DigestAlgorithm.MD5,
                       message,
                       Utilities.Charset.UTF_8);
  var signatureStr = '';
    for (i = 0; i < signature.length; i++) {
      var byte = signature[i];
      if (byte < 0)
        byte += 256;
      var byteStr = byte.toString(16);
      // Ensure we have 2 chars in our byte, pad with 0
      if (byteStr.length == 1) byteStr = '0'+byteStr;
      signatureStr += byteStr;
    }   
  Logger.log(signatureStr);
  return signatureStr;
}

function sortObject(o) {
    var sorted = {},
    key, a = [];

    for (key in o) {
        if (o.hasOwnProperty(key)) {
            a.push(key);
        }
    }

    a.sort();

    for (key = 0; key < a.length; key++) {
        sorted[a[key]] = o[a[key]];
    }
    return sorted;
}

function paramsToQuery(json) {
    return '?' + 
        Object.keys(json).map(function(key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
}
