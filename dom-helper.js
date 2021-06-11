export function checkIsIntoView(targetSelector, scrollSelector, offsetSize = 0) {
	let targetEle = document.querySelector(targetSelector);
	let canViewTop =  targetEle.offsetTop;

	let scrollEle = document.querySelector(scrollSelector);
	let offsetBottom = scrollEle.scrollTop + scrollEle.clientHeight;

	if (offsetBottom - canViewTop + offsetSize >= 0) {
		return true;
	} else {
		return false;
	}
}
