import test from 'test.module.css';
import {calculate} from 'external-library';

try {
    throw '';
    throw {};
    throw 123;
    throw null;
    throw new Error('');
} catch (error: unknown) {
    if (error instanceof Error) {
        console.log(error.message);
    }


}
// test.width
window.playVideo();

const numberVar = calculate(123, 423);
