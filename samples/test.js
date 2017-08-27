/**
 * MIT License (c) Copyright 2017.
 */

'use strict'
 // js test version of the module

const {UjumbeSMS, SMS} = require('../index');

const txt = `Hello people. Just testing my new node.js library for UjumbeSMS on node.js.`;
const myPeople = [
    '+{{a phone number}}',
    '+{{a phone number}}',
    '+{{a phone number}}',
    '+{{a phone number}}'
];
const sampleSMS = new SMS(txt, myPeople);
const sender = new UjumbeSMS({
    email: '[[ YOUR EMAIL ADDRESS ]]',
    api_key: '[[ YOUR API KEY ]]'
});

sender.send(sampleSMS).then((data) => {
    console.log('Response status:', data.resStatus);
    console.log('Ujumbe SMS response', data.apiResponse);
    // console.log('Raw axios response', data.raw);
    console.log('SMS metadata information', sampleSMS.info);
    console.log('SMS sent', sampleSMS.data);
}).catch((err) => { throw err; });
