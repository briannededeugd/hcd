console.log("Never making a morphological chart again hopefully!");

const allPages = document.querySelectorAll(".page");
const prevButton = document.querySelector("#prevpage");
const nextButton = document.querySelector("#nextpage");
let pageStatus = document.querySelector("#pagestatus");
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
 *               TOGGLE MENU
 *=============================================**/

const toggleMenuButton = document.querySelector("#togglemenu");
const menu = document.querySelector("#menu");

toggleMenuButton.addEventListener("click", () => {
	menu.classList.toggle("showmenu");
});

/**============================================
 *               SELECT W CLICK
 *=============================================**/

const paragraphs = document.querySelectorAll("p");
let startNode = null;
let startOffset = null;

paragraphs.forEach((paragraph) => {
	paragraph.addEventListener(
		"click",
		function (event) {
			if (!startNode) {
				// First click, set start point
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
