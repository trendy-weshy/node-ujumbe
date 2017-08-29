# node-ujumbe #

[![Build Status](https://travis-ci.org/trendy-weshy/node-ujumbe.svg?branch=master)](https://travis-ci.org/trendy-weshy/node-ujumbe)

[![NPM](https://nodei.co/npm/ujumbesms.png?compact=true)](https://nodei.co/npm/ujumbesms/)

An API wrapper to [UjumbeSMS](http://ujumbesms.co.ke) Cloud Messaging platform REST api. For more information on
the implementation of the API please check the documation on: [Ujumbe Docs](http://ujumbesms.co.ke/api/document).

## Installation ##

* ensure you have node and npm installed
* typescript is install globally on your system. To ensure run `npm install -g typescript`
* git clone the project
* run `npm install`
* run `npm run build` to compile typescript files
* if you may want to clear the build files just run `npm run clean`

### Running tests ###

* Please ensure the installation step was a success
* For tests to run bug-free you will need to add a `.env` file with the following variables
    - `API_KEY` which is the api key provided by ujumbesms
    - `API_ID` which is your email used to register at ujumbe_sms
    - Lastly, you can include numbers you wish to use as testers through `TEST_NUM_1`
* To run tests just run `npm test` on your terminal

## API ##

* The module was implemented using typescript.
* It works in a `node.js` environment and also on the `browser` 
* It would most probably require the likes of `webpack`, `broswerify` or `System.js` to work on browser
* This module contains only two classes. They are:
     - **SMS** class for constructing an sms object
     - **Api** class for communicating with UjumbeSMS REST api. See [UjumbeSMS Docs](http://ujumbesms.co.ke/api/document) for more details
* I avoided creating a namespace for the two classes to allow flexibility when importing. To avoid name collision with other modules, I recommend this format:

```
const ujumbe = require('ujumbesms');
// then use them through
// new ujumbe.SMS(...required_params)
// new ujumbe.Api(...required_params)
```

### The API is as follows: ###

**[TS]**

```
/**
 * describes a DepthSMS message bag structure
 *
 * @interface MessageBag
 */
interface MessageBag {
    numbers: string;
    message: string;
    sender: string;
}
```

```
/**
 * Handles sms validation and meta-data generation
 * Validates recepients
 *
 * @class SMS
 */
class SMS {
    constructor(phoneNumbers: string[], text: string, private sender: string='DEPTHSMS');

    /**
     * provides general information on the sms to be sent
     * @getter info
     * @return { smsToBeSent: number; numOfRecipients: number; constructedOn: Date }
     */
    public get info();

    public get data(): MessageBag;

    public static serialize(messages: SMS[]): Array<{ message_bag: MessageBag; }>;

}
```

```
/**
 * UjumbeSMS api access credentials structure
 *
 * @interface Credentials
 */
interface Credentials {
    email: string;
    apiKey: string;
}
```

```
/**
 * the class that interfaces with Ujumbe sms gateway via HTTP
 * @class UjumbeApi
 */
class Api {
    constructor(client: Credentials);

    public queue(message: SMS | SMS[]): Promise<any>;
}
```

### Usage ###

* This module is hosted on npm therefore can be accessed via 
    `npm install ujumbesms --save` or `yarn add --exact ujumbesms`
* Check the `/samples` folder for how to use the module

## License ##

MIT license

## Author ##

John Waweru <waweruj00@gmail.com>
