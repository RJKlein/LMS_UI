// adapted from source: https://github.com/github/fetch#handling-http-error-statuses
// The response of a fetch() request is a Stream object,
// ... which means that when we call the json() method,
// ... a Promise is returned since the reading of the stream will happen asynchronously.
// ... - https://developers.google.com/web/updates/2015/03/introduction-to-fetch?hl=en

module.exports = {};

//
// REQUEST FUNCTIONS
//

// @params [Object] requestData a FORM object
module.exports.postRequestOptions = function(requestData){
  
  const data = {};
  for (let key of requestData.keys()) {
          data[key] = requestData.get(key);
      }
  return {
    method: 'POST',
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  }
};

//
// RESPONSE FUNCTIONS
//

// @params [fetch Response] response
module.exports.checkStatus = function(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
};