'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */ 
function initializePage() {
	$("#addAssignments").click(addAssignments);
	console.log("JS is connected");
}

function addAssignments(e) {
	var assignments = $("#assignments");
	var form = "<form class='syllabusField'>";
	var input1 = "<input type='text' placeholder='Assignment'>";
	var input2 = "<input type='number' placeholder='%' min='0' max='100'>";
	assignments.append($(form).append($(input1 + input2)));
}