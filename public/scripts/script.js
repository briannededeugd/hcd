const scrollUpButton = document.querySelector("#scrollup");
const scrollDownButton = document.querySelector("#scrolldown");
let index = 1;

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
	const commonAncestor = start.closest("section");

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

	pasteButton.classList.remove("active");
	pasteButton.textContent = "Paste";
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

// Function to scroll textarea content up
scrollUpButton.addEventListener("click", (event) => {
	event.preventDefault();
	textArea.scrollTop -= 100; // Adjust the scroll amount as needed
});

// Function to scroll textarea content down
scrollDownButton.addEventListener("click", (event) => {
	event.preventDefault();
	textArea.scrollTop += 100; // Adjust the scroll amount as needed
});

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

		updateCharCount();
	});

	copyButton.classList.remove("active");
	copyButton.textContent = "Copy";

	copyAll.classList.remove("active");
	copyAll.textContent = "Copy this";

	pasteButton.classList.add("active");
	pasteButton.textContent = "Pasted!";
});

// CLEAR
const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function (event) {
	pasteButton.classList.remove("active");
	pasteButton.textContent = "Paste";

	copyAll.classList.remove("active");
	copyAll.textContent = "Copy this";

	textArea.value = "";
	updateCharCount();
});

// COPY ALL

const copyAll = document.getElementById("recopy");

copyAll.addEventListener("click", function (event) {
	textArea.select();

	// Edit states
	copyButton.classList.remove("active");
	copyButton.textContent = "Copy";

	pasteButton.classList.add("active");
	pasteButton.textContent = "Pasted!";

	copyAll.classList.add("active");
	copyAll.textContent = "Copied edited text!";

	// Copy to clipboard
	navigator.clipboard.writeText(textArea.value);
});

// CHARACTER COUNT
var charCount = document.getElementById("charCount");

function updateCharCount() {
	var remainingChars = textArea.value.length;
	charCount.textContent = remainingChars;
}

// Update character count on input event
textArea.addEventListener("input", updateCharCount);

updateCharCount();
