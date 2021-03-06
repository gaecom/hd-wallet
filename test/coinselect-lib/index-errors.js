/* global it:false, describe:false */

import assert from 'assert';

import coinAccum from '../../src/build-tx/coinselect-lib/index';
import fixtures from './fixtures/index-errors.json';
import utils from './_utils';

describe('coinselect errors', () => {
    fixtures.forEach((f) => {
        it(f.description, () => {
            const inputLength = f.inputLength;
            const outputLength = f.outputLength;
            const dustThreshold = f.dustThreshold;

            const inputs = utils.expand(f.inputs, true, inputLength);
            const outputs = utils.expand(f.outputs, false, outputLength);

            assert.throws(() => {
                coinAccum(inputs, outputs, f.feeRate, {inputLength: inputLength, changeOutputLength: outputLength, dustThreshold});
            }, new RegExp(f.expected));
        });
    });
});
