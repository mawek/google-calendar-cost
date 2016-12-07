console.log(chrome.identity);

chrome.identity.getAuthToken({  }, function(token) {
    console.log("token: " + token);
});
