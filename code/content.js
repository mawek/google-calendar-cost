chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
    console.log("token" + token);
});

var encoded = $("div.ep[data-eid]").attr("data-eid");
if (encoded !== undefined) {
    var eid = atob(encoded);
}