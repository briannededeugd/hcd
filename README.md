# Human Centered Design

Welcome to my repository for the course Human Centered Design during the minor Web Design & Development, academic year 23-24. This course is about the end users that will be using our applications and websites, their needs as well as their struggles.

Up until now, as students at Communication & Multimedia Design, 

## Index
- []()

## Process

*The plan*

T

*The setup (HTML, CSS)*

*Click to select*

old

```js

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((paragraph) => {
	paragraph.addEventListener(
		"click",
		function (event) {
			const selection = window.getSelection();
			const range = document.createRange();
			const clickedNode = event.target.firstChild;
			const offset = getOffset(clickedNode, event.clientX, event.clientY);
			range.setStart(clickedNode, offset);
			range.setEnd(clickedNode, clickedNode.length);
			selection.removeAllRanges();
			selection.addRange(range);
		},
		false
	);
});

function getOffset(node, x, y) {
	const range = document.createRange();
	range.selectNode(node);
	const rect = range.getBoundingClientRect();
	range.detach();
	const charIndex = getCharIndexAtPoint(node, x, y, rect);
	return charIndex;
}

function getCharIndexAtPoint(node, x, y, rect) {
	const len = node.textContent.length;
	for (let i = 0; i < len; i++) {
		const range = document.createRange();
		range.setStart(node, i);
		range.setEnd(node, i + 1);
		const charRect = range.getBoundingClientRect();
		if (
			charRect.left <= x &&
			charRect.right >= x &&
			charRect.top <= y &&
			charRect.bottom >= y
		) {
			return i;
		}
	}
	return len;
}

```

new

```js

const paragraphs = document.querySelectorAll("p");
let startNode = null;
let startOffset = null;

paragraphs.forEach((paragraph) => {
	paragraph.addEventListener(
		"click",
		function (event) {
			if (!startNode) {
				// The first click sets the start point
				startNode = event.target.firstChild;
				startOffset = getOffset(startNode, event.clientX, event.clientY);
			} else {
				// Second click, set end point and select text in between
				const endNode = event.target.firstChild;
				const endOffset = getOffset(endNode, event.clientX, event.clientY);

				const selection = window.getSelection();
				const range = document.createRange();

				range.setStart(startNode, startOffset);
				range.setEnd(endNode, endOffset);

				selection.removeAllRanges();
				selection.addRange(range);

				// Reset start point for next selection
				startNode = null;
				startOffset = null;
			}
		},
		false
	);
});

function getOffset(node, x, y) {
	const range = document.createRange();
	range.selectNode(node);
	const rect = range.getBoundingClientRect();
	range.detach();
	const charIndex = getCharIndexAtPoint(node, x, y, rect);
	return charIndex;
}

function getCharIndexAtPoint(node, x, y, rect) {
	const len = node.textContent.length;
	for (let i = 0; i < len; i++) {
		const range = document.createRange();
		range.setStart(node, i);
		range.setEnd(node, i + 1);
		const charRect = range.getBoundingClientRect();
		if (
			charRect.left <= x &&
			charRect.right >= x &&
			charRect.top <= y &&
			charRect.bottom >= y
		) {
			return i;
		}
	}
	return len;
}

```

## Feedback per week

*Week two*

In my week two prototype, Nicolette could make a selection by clicking two points in the text, but there were a few issues with this. 

1. Her tablet pen wasn't specific enough to click exact points in the text. That meant that she struggled with selecting whole words - a feature that should be integrated, as people rarely select only a part of a word.
2. She wasn't receiving feedback on what she had selected yet. When she clicked the second word, that's when the selection showed on the screen, but she was left in the dark until then.
3. Using the keyboard (specifically only one key, but using two is also not an option) to copy and paste was too difficult. It would be better to use buttons she could click with her mouse.
4. In my application it's not really necessary, but Nicolette cannot scroll normally. Therefore, a button to scroll up and a button to scroll down would be a huge help.