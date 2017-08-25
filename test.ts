/**
 * MIT License (c) Copyright 2017.
 */

import {UjumbeSMS, SMS} from './index';

/**
 * Taking the new module for a spin
 */
const txt: string = `Hello people. Just testing my new node.js library for UjumbeSMS on node.js.`;
const myPeople: string[] = [
    '+{{a phone number}}',
    '+{{a phone number}}',
    '+{{a phone number}}',
    '+{{a phone number}}'
];
const sampleSMS: SMS = new SMS(txt, myPeople);
const sender: UjumbeSMS = new UjumbeSMS({
    email: '[[ YOUR EMAIL ADDRESS ]]',
    api_key: '[[ YOUR API KEY ]]'
});

sender.send(sampleSMS).then((data) => {
    console.log('Response status:', data.resStatus);
    console.log('Ujumbe SMS response', data.apiResponse);
    // console.log('Raw axios response', data.raw);
    console.log('SMS metadata information', sampleSMS.info);
    console.log('SMS sent', sampleSMS.sms);
}).catch((err) => { throw err; });
