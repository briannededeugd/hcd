# Human Centered Design.

## Index
- []()

## Process

*The plan*

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