import {
    trigger, animateChild, group,
    transition, animate, style, query
} from '@angular/animations';

const animatePath: string[] = [
    'hot <=> list',
    'hot <=> search',
    'hot <=> profile',
    'search <=> list',
    'search <=> profile',
    'list <=> profile',
];

// 路由切换过渡动画
export const slideInAnimation =
    trigger('routeAnimations', animatePath.map(path => (
        transition(path, [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%' })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('300ms ease-out', style({ left: '100%' }))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%' }))
                ])
            ]),
            query(':enter', animateChild()),
        ])
    )));