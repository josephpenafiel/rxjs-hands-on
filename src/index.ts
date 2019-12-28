import { Observable, Observer, Subject } from 'rxjs';

export const observer: Observer<any> = {
    next: val => console.log('[next]:', val),
    error: err => console.error('[error]', err),
    complete: () => console.info('[completed]')
};

