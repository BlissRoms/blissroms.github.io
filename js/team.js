$.ajax({
    type: "GET",
    url: "https://api.blissroms.org/api/teambliss", // TeamBliss JSON
    success: function (data) {
        var newContent = ''; // Variable to hold HTML
        for (var i = 0; i < data.length; i++) { // Loop through object
            newContent += '<div id="event" class="team_item">';
            newContent += '<img class="image crop" src="' + data[i].avatar + '" ';
            newContent += 'alt="' + data[i].member + '" />';
            newContent += '<h3><b>' + data[i].member + '</b></h3>';
            newContent += '<p class="team_data_text font-weight-bold">' + data[i].designation + '</p>';
            newContent += '</div>';
        }
        // Update the page with the new content
        document.getElementById('content').innerHTML = newContent;
    }
})