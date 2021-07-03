$.ajax({
    type: "GET",
    url: "https://api.blissroms.org/api/maintainers", // TeamBliss JSON
    success: function (data) {
        var newContent = ''; // Variable to hold HTML
        for (var i = 0; i < data.length; i++) { // Loop through object
            newContent += '<div id="event" class="team_item">';
            newContent += '<img class="image crop" loading="lazy" style="min-height: 100px" src="' + data[i].avatar + '" ';
            newContent += 'alt="' + data[i].mname + '" />';
            newContent += '<h3><b>' + data[i].mname + '</b></h3>';
            newContent += '<p class="team_data_text font-weight-bold">' + data[i].device + '</p>';
            newContent += '<p class="team_data_text font-weight-bold"><i>&quot;' + data[i].codename + '&quot;</i></p>';
            newContent += '</div>';
        }
        // Update the page with the new content
        document.getElementById('content2').innerHTML = newContent;
    }
})