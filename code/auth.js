
chrome.identity.getAuthToken({'interactive': true }, function(token) {
    makeRequest(token, "GET", "https://www.googleapis.com/calendar/v3/calendars/primary/events/?key=AIzaSyBcfRwpSJj1f7xtt7KZqeZyQ5Qt_LWOsoA",
        function (response) {
            alert(response)
        });
});


makeRequest = function(token, method, url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);

    xhr.setRequestHeader('Authorization', 'Bearer ' + token);

    xhr.onload = function() {
        callback(xhr.response);
    }

    xhr.onerror = function(e) {
        console.log(this, this.status, this.response,
            this.getAllResponseHeaders());
    };
    xhr.send({});
};