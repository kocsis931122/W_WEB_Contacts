(function () {
    var numberOfContact = '5';

    function getData() {
        var req = new XMLHttpRequest();
        var url = "http://www.filltext.com/?rows=" + numberOfContact +
            "&fName={firstName}&lName={lastName}&city={city}&address={streetAddress}" +
            "&email={email}&phone={phone|format}";
        req.open('GET', url,true);
        req.onreadystatechange = function () {
            if (req.readyState == 4 && req.status == 200) {
                var result = JSON.parse(req.responseText);
                showResults(result);
            }
        };
        req.send();
    }

    function createCards() {
        var contacts = document.querySelector("#contacts");
        for (var i = 0; i < numberOfContact - 1; i++) {
            contacts.innerHTML += '<div id="card"><span id="data"></span></div>';
        }
    }

    function showResults(obj) {
        var data = document.querySelectorAll("#data");
        for (var i = 0; i < obj.length; i++) {
            data[i].innerHTML = '<p>' + obj[i].fName + '&nbsp;' + obj[i].lName  + '<br>' + obj[i].address  +
                '<br>' + obj[i].city  + '<br>' + obj[i].email  + '<br>' + obj[i].phone + '</p>';
        }
    }
    createCards();
    getData();
})();
