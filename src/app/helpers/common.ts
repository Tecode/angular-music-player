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

export function formatTime(timestamp): string {
    timestamp = Math.floor(timestamp);
    let minute = (Math.floor(timestamp / 60)).toString().padStart(2, '0');
    let second = (timestamp % 60).toString().padStart(2, '0');
    return `${minute}:${second}`;
}

export type EquipmentWidth = {
    width: number;
    height: number;
}
// 获取设备的宽高
export function equipmentWidth(): EquipmentWidth {
    if (typeof window !== 'undefined') {
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        };
    }
    return { width: 0, height: 0 };
}