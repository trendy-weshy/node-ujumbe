/**
 * MIT License (c) Copyright 2017.
 */

'use strict'
 // js test version of the module

const {UjumbeApi, SMS} = require('../index');

const txt = `Hello people. Just testing my new node.js library for UjumbeSMS on node.js.`;
const myPeople = [
    '+{{a phone number}}',
    '+{{a phone number}}',
    '+{{a phone number}}',
    '+{{a phone number}}'
];
const message = new SMS(myPeople, txt);

new UjumbeApi({
    email: '[[ YOUR EMAIL ADDRESS ]]',
    apiKey: '[[ YOUR API KEY ]]'
})
.queue(message)
.then((data) => {
    console.log('Response status:', data.resStatus);
    console.log('Ujumbe SMS response', data.apiResponse);
    // console.log('Raw axios response', data.raw);
    console.log('SMS metadata information', message.info);
    console.log('SMS sent', message.data);
})
.catch((err) => { throw err; });
