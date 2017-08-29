/**
 * MIT License (c) Copyright 2017.
 */

import {expect, use} from 'chai';
const chaiAsPromised = require('chai-as-promised');
import * as ujumbe from '../index';
// load environment variables
require('dotenv').config();

// use(chaiAsPromised); // chai.use

describe('Node Ujumbe test suite', () => {

    let message: ujumbe.SMS;
    let api: ujumbe.Api;

    before(() => {
        message = new ujumbe.SMS([process.env.TEST_NUM_1], 'Hey! unit test for node-ujumbe successful.');
        api = new ujumbe.Api({
            apiKey: process.env.API_KEY,
            email: process.env.API_ID
        });
    });

    it('Should send a sample message (sms)', (done: any) => {

        api.queue(message).then((data: any) => {

            expect(data).to.have.property('apiResponse');
            expect(data).to.have.property('resStatus');
            expect(data).to.have.property('resRaw');
            expect(data.resRaw.status).to.equal(200);

            const res = {...data.apiResponse};
            expect(res).to.have.property('meta');
            expect(res.meta).to.have.property('recipients');
            expect(res.meta.recipients).to.eql(message.data.numbers.split(',').length);
            expect(res).to.have.property('status');
            expect(res.status).to.have.property('code');
            expect(res.status).to.have.property('type');
            expect(res.status.type).to.eql('success');

            return done();
        }).catch((err: any) => { throw err; });

    });
});
