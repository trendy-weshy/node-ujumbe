/**
 * MIT License (c) Copyright 2017.
 */

import {AxiosInstance, AxiosRequestConfig, AxiosResponse, default as Axios} from 'axios';
import {SMS} from './sms';

/**
 * UjumbeSMS api access credentials structure
 *
 * @interface Credentials
 */
export interface Credentials {
    email: string;
    apiKey: string;
}

/**
 * the class that interfaces with Ujumbe sms gateway via HTTP
 * @class UjumbeApi
 */
export class Api {
    private config: AxiosRequestConfig;
    private request: AxiosInstance;

    constructor(client: Credentials) {
        this.config = {
            baseURL: 'http://ujumbesms.co.ke/',
            headers: {
                'email': client.email,
                'x-Authorization': client.apiKey,
                'Content-Type': 'application/json'
            },
            responseType: 'json'
        };
        this.request = Axios.create(this.config);
    }

    /**
     * makes the api POST request to UjumbeSMS
     * @param data {any} - the data to be sent
     */
    private api(data: any) {
        return this.request
            .post('/api/messaging', data)
            .then((res: AxiosResponse) => {
                return {
                    apiResponse: res.data,
                    resStatus: `${res.status} - ${res.statusText}`,
                    resRaw: res
                };
            });
    }

    /**
     * this creates the required data packet and performs the actual api request
     * @param message {SMS | SMS[]} - uses union types to ensure across the board support
     * @return {Promise<any>}
     */
    public queue(message: SMS | SMS[]): Promise<any> {
        if(!Array.isArray(message)) {
            return this.api({ data: SMS.serialize([message]) });
        }
        else {
            return this.api({ data: SMS.serialize(message) });
        }
    }
}
