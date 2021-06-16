export function checkIsIntoView(targetSelector, scrollSelector, offsetSize = 0) {
    let targetEle = document.querySelector(targetSelector);
    let canViewTop = targetEle.offsetTop;

    let scrollEle = scrollSelector ? document.querySelector(scrollSelector) : targetEle.offsetParent;
    let offsetBottom = scrollEle.scrollTop + scrollEle.clientHeight;

    if (offsetBottom - canViewTop + offsetSize >= 0) {
        return true;
    } else {
        return false;
    }
}

export function onIntoView({ targetSelector, scrollSelector, offsetSize = 0, thresholds: 1.0, callback}) {
    let options = {
        root: scrollSelector ? document.querySelector(scrollSelector) : null,
        rootMargin: offsetSize + 'px',
        threshold,
    };

    let observer = new IntersectionObserver((entries, observer)=>{
        callback && callback(entries, observer)
    }, options);
}
