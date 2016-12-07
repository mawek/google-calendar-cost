var encoded = $("div.ep[data-eid]").attr("data-eid");
if (encoded !== undefined) {
    var eid = atob(encoded);
}