var BASE_URL = "http://api.appfollow.io"
var api_secret = "YOUR_API_SECRET_HERE";

function main() {
  var endpoint = "/reviews"
  var params = {
    "cid": "CID_HERE",
    "ext_id": "com.edadeal.android"
  }
  var response = makeRequest(params, endpoint, api_secret);
}
