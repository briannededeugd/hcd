console.log("Never making a morphological chart again hopefully!");

const allPages = document.querySelectorAll(".page");
const prevButton = document.querySelector("#prevpage");
const nextButton = document.querySelector("#nextpage");
const pageStatus = document.querySelector("#pagenumber");
let index = 1;

// Function to show the current page based on the index
function showCurrentPage() {
	allPages.forEach((page, i) => {
		if (i + 1 === index) {
			page.classList.remove("hidepage");
			page.classList.add("showpage");
		} else {
			page.classList.remove("showpage");
			page.classList.add("hidepage");
		}
	});
}

// Event listener for the next button
nextButton.addEventListener("click", () => {
	if (index < allPages.length) {
		index++;
		pageStatus.textContent = index;
		console.log("THEE INDEX:", index);
		console.log(pageStatus);
		showCurrentPage();
	} else {
		index = 1;
		pageStatus.textContent = index;
		showCurrentPage();
	}

	nextPageButtonText();
	hidePrevButton();
});

// Event listener for the previous button
prevButton.addEventListener("click", () => {
	if (index > 1) {
		index--;
		pageStatus.textContent = index;
		showCurrentPage();
	} else {
		index = allPages.length;
		pageStatus.textContent = index;
		showCurrentPage();
	}

	nextPageButtonText();
	hidePrevButton();
});

function nextPageButtonText() {
	if (index === allPages.length) {
		nextButton.value = "Start over";
	} else {
		nextButton.value = "Next page";
	}
}

function hidePrevButton() {
	if (index === 1) {
		prevButton.style.opacity = 0;
	} else {
		prevButton.style.opacity = 1;
	}
}

/**============================================
 *               SELECT W CLICK
 *=============================================**/

// Function to wrap each word in the textarea with a span element
function wrapWordsInSpan(textareaElement) {
	const text = textareaElement.value.trim();
	const words = text.split(/\s+/);

	// Create a new HTML content with each word wrapped in a span
	const newContent = words.map((word) => `<span>${word}</span>`).join(" ");

	// Set the textarea's value to the new content with spans
	textareaElement.value = newContent;
}

// Wrap all words in a span so I can hover / select

function wrapWordsInSpan(paragraphElement) {
	// Get the text content of the paragraph
	const text = paragraphElement.textContent.trim();

	// Split the text into an array of words
	const words = text.split(/\s+/);

	// Create a new HTML content with each word wrapped in a span
	const newContent = words.map((word) => `<span>${word}</span>`).join(" ");

	// Set the paragraph's innerHTML to the new content
	paragraphElement.innerHTML = newContent;
}

const story = document.querySelector(".story");
const paragraphs = story.querySelectorAll("p");
paragraphs.forEach((paragraph) => {
	wrapWordsInSpan(paragraph);
});

// Handle selection
// Function to handle click event on span elements
function handleSpanClick(event) {
	const clickedSpan = event.target; // Get the span that was clicked

	// If startpoint is not set, set it to the clicked span
	if (!startPoint) {
		startPoint = clickedSpan;
		startPoint.classList.add("selected");
	} else {
		// Otherwise, set endpoint to the clicked span
		endPoint = clickedSpan;

		// Select the words between startpoint and endpoint
		selectWordsBetween(startPoint, endPoint);
		startPoint.classList.remove("selected");

		// Reset startpoint and endpoint for next selection
		startPoint = null;
		endPoint = null;
	}
}

// Function to select words between startpoint and endpoint
function selectWordsBetween(start, end) {
	const range = document.createRange(); // Create a new Range object

	// Get the common ancestor container for the start and end points
	const commonAncestor = start.closest("section"); // Assuming the common ancestor is the section with id "page-1"

	// If there is no common ancestor, return
	if (!commonAncestor) {
		return;
	}

	// Get all spans within the common ancestor
	const spans = commonAncestor.querySelectorAll("span");

	// Get the index of the start and end points within the spans
	let startIndex = Array.from(spans).indexOf(start);
	let endIndex = Array.from(spans).indexOf(end);

	// Ensure startIndex is less than endIndex
	if (startIndex > endIndex) {
		[startIndex, endIndex] = [endIndex, startIndex];
	}

	// Set the start and end points of the selection range
	range.setStart(spans[startIndex].firstChild, 0);
	range.setEndAfter(spans[endIndex].lastChild);

	// Create a new Selection object and add the range to it
	const selection = window.getSelection();
	selection.removeAllRanges(); // Clear any existing selections
	selection.addRange(range);
}

// Initialize variables to store start and endpoint of selection
let startPoint = null;
let endPoint = null;

// Get all spans within paragraphs and attach click event listeners
const spans = story.querySelectorAll("p span");

spans.forEach((span) => {
	span.addEventListener("click", handleSpanClick);
});

/**============================================
 *               COPY AND PASTE BUTTONS
 *=============================================**/

// COPY
const copyButton = document.getElementById("copyselection");

copyButton.addEventListener("click", function (event) {
	var selectedText = window.getSelection().toString().trim();
	navigator.clipboard
		.writeText(selectedText)
		.then(function () {
			console.log("Text copied to clipboard: " + selectedText);
		})
		.catch(function (error) {
			console.error("Error copying text: ", error);
		});

	copyButton.textContent = "Copied!";
	copyButton.classList.add("active");

	pasteButton.classList.remove("active");
	pasteButton.textContent = "Paste";
});

// PASTE
const pasteButton = document.getElementById("pasteselection");
const textArea = document.querySelector("textarea");

pasteButton.addEventListener("click", function (event) {
	navigator.clipboard.readText().then(function (copiedText) {
		// Get the current selection start and end positions
		const selectionStart = textArea.selectionStart;
		const selectionEnd = textArea.selectionEnd;

		// Insert the copied text at the selection positions
		const currentValue = textArea.value;
		const newValue =
			currentValue.substring(0, selectionStart) +
			copiedText +
			currentValue.substring(selectionEnd);

		// Set the textarea's value to the new value with the copied text inserted
		textArea.value = newValue;

		// Adjust the selection to cover the pasted text
		const newSelectionPosition = selectionStart + copiedText.length;
		textArea.setSelectionRange(newSelectionPosition, newSelectionPosition);
	});

	copyButton.classList.remove("active");
	copyButton.textContent = "Copy";

	pasteButton.classList.add("active");
	pasteButton.textContent = "Pasted!";
});

// CLEAR
const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function (event) {
	pasteButton.classList.remove("active");
	pasteButton.textContent = "Paste";

	textArea.value = "";
});

/**========================================================================
 *                           OLD CODE
 *========================================================================**/

// let startNode = null;
// let startOffset = null;

// paragraphs.forEach((paragraph) => {
// 	paragraph.addEventListener(
// 		"click",
// 		function (event) {
// 			if (!startNode) {
// 				// First click, set start point
// 				startNode = event.target.firstChild;
// 				startOffset = getOffset(startNode, event.clientX, event.clientY);
// 			} else {
// 				// Second click, set end point and select text in between
// 				const endNode = event.target.firstChild;
// 				const endOffset = getOffset(endNode, event.clientX, event.clientY);

// 				const selection = window.getSelection();
// 				const range = document.createRange();

// 				range.setStart(startNode, startOffset);
// 				range.setEnd(endNode, endOffset);

// 				selection.removeAllRanges();
// 				selection.addRange(range);

// 				// Reset start point for next selection
// 				startNode = null;
// 				startOffset = null;
// 			}
// 		},
// 		false
// 	);
// });

// function getOffset(node, x, y) {
// 	const range = document.createRange();
// 	range.selectNode(node);
// 	const rect = range.getBoundingClientRect();
// 	range.detach();
// 	const charIndex = getCharIndexAtPoint(node, x, y, rect);
// 	return charIndex;
// }

// function getCharIndexAtPoint(node, x, y, rect) {
// 	const len = node.textContent.length;
// 	for (let i = 0; i < len; i++) {
// 		const range = document.createRange();
// 		range.setStart(node, i);
// 		range.setEnd(node, i + 1);
// 		const charRect = range.getBoundingClientRect();
// 		if (
// 			charRect.left <= x &&
// 			charRect.right >= x &&
// 			charRect.top <= y &&
// 			charRect.bottom >= y
// 		) {
// 			return i;
// 		}
// 	}
// 	return len;
// }

// /**============================================
//  *               COPY N PASTE
//  *=============================================**/

// document.addEventListener("keydown", function (event) {
// 	if (event.key === "c" || event.key === "C") {
// 		// Check if any text is selected
// 		var selectedText = window.getSelection().toString().trim();
// 		if (selectedText !== "") {
// 			// Copy the selected text to clipboard
// 			navigator.clipboard
// 				.writeText(selectedText)
// 				.then(function () {
// 					console.log("Text copied to clipboard: " + selectedText);
// 				})
// 				.catch(function (error) {
// 					console.error("Error copying text: ", error);
// 				});
// 		}
// 	} else if (event.key === "Backslash" || event.keyCode === 220) {
// 		// Paste the copied text
// 		navigator.clipboard
// 			.readText()
// 			.then(function (copiedText) {
// 				// Insert the copied text where the cursor is
// 				var cursorPosition = getCaretPosition();
// 				var textBeforeCursor = document.activeElement.value.substring(
// 					0,
// 					cursorPosition
// 				);
// 				var textAfterCursor =
// 					document.activeElement.value.substring(cursorPosition);
// 				var newText = textBeforeCursor + copiedText + textAfterCursor;
// 				document.activeElement.value = newText;
// 				// Move cursor to the end of the pasted text
// 				setCaretPosition(cursorPosition + copiedText.length);
// 			})
// 			.catch(function (error) {
// 				console.error("Error pasting text: ", error);
// 			});
// 	}
// });

// // Function to get the caret position in a textarea or input field
// function getCaretPosition() {
// 	var el = document.activeElement;
// 	if (el.selectionStart) {
// 		return el.selectionStart;
// 	} else if (document.selection) {
// 		el.focus();
// 		var r = document.selection.createRange();
// 		if (r == null) {
// 			return 0;
// 		}
// 		var re = el.createTextRange(),
// 			rc = re.duplicate();
// 		re.moveToBookmark(r.getBookmark());
// 		rc.setEndPoint("EndToStart", re);
// 		return rc.text.length;
// 	}
// 	return 0;
// }

// // Function to set the caret position in a textarea or input field
// function setCaretPosition(position) {
// 	var el = document.activeElement;
// 	if (el.setSelectionRange) {
// 		el.focus();
// 		el.setSelectionRange(position, position);
// 	} else if (el.createTextRange) {
// 		var range = el.createTextRange();
// 		range.collapse(true);
// 		range.moveEnd("character", position);
// 		range.moveStart("character", position);
// 		range.select();
// 	}
// }
