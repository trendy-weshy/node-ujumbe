/**
 * MIT License (c) Copyright 2017.
 */

import {UjumbeSMS, SMS} from '../index';

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
const message: SMS = new SMS(myPeople, txt);

new UjumbeSMS({
    email: '[[ YOUR EMAIL ADDRESS ]]',
    apiKey: '[[ YOUR API KEY ]]'
}).queue(message).then((data) => {
    console.log('Response status:', data.resStatus);
    console.log('Ujumbe SMS response', data.apiResponse);
    // console.log('Raw axios response', data.raw);
    console.log('SMS metadata information', message.info);
    console.log('SMS sent', message.data);
}).catch((err) => { throw err; });
