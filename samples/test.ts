/**
 * MIT License (c) Copyright 2017.
 */

import {UjumbeApi, SMS} from '../index';

// NOTE: THE COMMENTED CODE SHOWS ANOTHER VERSION OF HOW TO SEND TEXT VIA UJUMBE API
// NOTE: RE-FORMAT THE SMS OBJECTS TO FIT ACCURATE SAMPLE DATA ADD API KEY AND TEST THE EXAMPLES PROVIDED

/*

// #note: SMS object reference can be an array as well
const message: SMS[] = [
    new SMS([
        '+{{a phone number}}',
        '+{{a phone number}}',
        '+{{a phone number}}',
        '+{{a phone number}}'
        ], 
        `Hello people. Just testing my new node.js library for UjumbeSMS on node.js.`
    ),
    new SMS([
        '+{{a phone number}}',
        '+{{a phone number}}',
        '+{{a phone number}}',
        '+{{a phone number}}'
        ], 
        `Hello people. Just testing my new node.js library for UjumbeSMS on node.js.`
    ),
    new SMS([
        '+{{a phone number}}',
        '+{{a phone number}}',
        '+{{a phone number}}',
        '+{{a phone number}}'
        ], 
        `Hello people. Just testing my new node.js library for UjumbeSMS on node.js.`
    )
];
new UjumbeApi({
    email: '[[ YOUR EMAIL ADDRESS ]]',
    apiKey: '[[ YOUR API KEY ]]'
})
.queue(message) // #note: doesn't affect the way you queue your messages to the Ujumbe API
.then((data) => {
    console.log('Response status:', data.resStatus);
    console.log('Ujumbe SMS response', data.apiResponse);
    // console.log('Raw axios response', data.raw);
    console.log('SMS object metadata', message.info);
    console.log('SMS data', message.data);
})
.catch((err) => { throw err; });

*/

const message: SMS = new SMS([
    '+{{a phone number}}',
    '+{{a phone number}}',
    '+{{a phone number}}',
    '+{{a phone number}}'
    ], 
    `Hello people. Just testing my new node.js library for UjumbeSMS on node.js.`
);

// simple implementation of the module
new UjumbeApi({
    email: '[[ YOUR EMAIL ADDRESS ]]',
    apiKey: '[[ YOUR API KEY ]]'
})
.queue(message)
.then((data) => {
    console.log('Response status:', data.resStatus);
    console.log('Ujumbe SMS response', data.apiResponse);
    // console.log('Raw axios response', data.raw);
    console.log('SMS object metadata', message.info);
    console.log('SMS data', message.data);
})
.catch((err) => { throw err; });
