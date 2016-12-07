// chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
//     console.log("token" + token);
// });


$(document).on('click', '.ep-gl-count', function () {
    var encoded = $("div.ep[data-eid]").attr("data-eid");
    if (encoded === undefined) {
        return;
    }

    var decoded = atob(encoded);
    console.log("Current event ID: " + decoded.split(" ")[0]);

    var costElem = $('#gcal-cost');

    if (!costElem.length) {
        $("<p id='gcal-cost'>Cost of the meeting is: </p>").insertAfter(".ep-gl-count");
    } else {
        costElem.html('Updated cost of the meeting is: ');
    }
});
