var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var sep = ' | ';
$('#search').click(searchCountries);
$(function () {
    $('#country-name').focus();
});

function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName, 
        method: 'GET', 
        success: showCountriesList, 
        error: onError
    });
}

function showCountriesList(resp) {
    console.log(resp);
    countriesList.empty();
    for (var i = 0; i < resp.length; i++) {
        var country = resp[i];
        var row = '<li>' + country.name + sep + country.nativeName + sep + country.capital + sep + country.currencies + '</li>';
        countriesList.append(row);
    }
}

function onError(resp) {
    countriesList.empty();
    alert('No such country!');
    $('#country-name').val('').focus();
}
