import { ClientRectData } from '../../interface';

export function hasClass(el, className): boolean {
    let reg: RegExp = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}

export function addClass(el, className): void {
    if (hasClass(el, className)) {
        return
    }

    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}

export function getRect(el): ClientRectData {
    if (el instanceof HTMLElement) {
        let rect: ClientRect = el.getBoundingClientRect();
        return {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
        };
    }
    return {
        top: el.offsetTop,
        left: el.offsetLeft,
        width: el.offsetWidth,
        height: el.offsetHeight
    };
}