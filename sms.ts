/**
 * (c) Copyright 2017. MIT License
 */

import {isMobilePhone} from 'validator';

/**
 * describes a DepthSMS message bag structure
 * 
 * @interface MessageBag
 */
export interface MessageBag {
    numbers: string;
    message: string;
    sender: string;
}

/**
 * Handles sms validation and meta-data generation
 * Validates recepients
 *
 * @class SMS
 */
export class SMS {
	private message: string;
	private recipients: string[];

	constructor(phoneNumbers: string[], text: string, private sender: string='DEPTHSMS') {
		this.message = text;
		const validPhoneNumbers=this.filterMobileNumbers(phoneNumbers);
		this.recipients=[...validPhoneNumbers];
	}

	/**
	 * provides general information on the sms to be sent
	 * @getter info
	 * @return { smsToBeSent: number; numOfRecipients: number; constructedOn: Date }
	 */
	public get info() {
		return {
			smsToBeSent: Math.ceil(this.message.length / 160),
			numOfRecipients: this.recipients.length,
			constructedOn: new Date()
		};
	}

	/**
	 * serializes required sms information for the purposes of making API request to sms gateway
	 * in this case UjumbeSMS
	 * @return { message: string; numbers: string; sender: string; }
	 */
	public get data() {
		return {
			message: this.message,
			numbers: this.recipients.join(','),
			sender: this.sender
		};
	}

	/**
	 * removes all badly formatted and invalid numbers. uses validator isMobilePhone for international validation
	 * @param phoneNumbers {string[]} - a list of phone numbers that are to be recepients of the message
	 * @return {string[]}
	 */
	private filterMobileNumbers(phoneNumbers: string[]): string[] {
		return phoneNumbers.filter((number: string) => {
			if (isMobilePhone(number, 'any')) {
				return number;
			}
		});
	}

	/**
	 * this returns valid objects to be used as data in the HTTP transaction
	 * @param messages {SMS[]} - list of SMS objects
	 */
	public static serialize(messages: SMS[]): { message_bag: MessageBag; }[] {
		return messages.map((sms: SMS) => {
			return{
				message_bag: sms.data
			};
		});
	}
}
