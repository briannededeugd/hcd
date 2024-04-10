console.log("Never making a morphological chart again hopefully!");

const allPages = document.querySelectorAll(".page");
const prevButton = document.querySelector("#prevpage");
const nextButton = document.querySelector("#nextpage");
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
		showCurrentPage();
	} else {
		index = 1;
		showCurrentPage();
	}

	changeValues();
});

// Event listener for the previous button
prevButton.addEventListener("click", () => {
	if (index > 1) {
		index--;
		showCurrentPage();
	} else {
		index = allPages.length;
		showCurrentPage();
	}

	changeValues();
});

function changeValues() {
	if (index === allPages.length) {
		nextButton.value = "Start over";
	} else {
		nextButton.value = "Next page";
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
