import { Request } from '@models/Request';
import {re} from "@babel/core/lib/vendor/import-meta-resolve";

export async function findRequestsByUser(userId) {
	return await Request.find({ fromOwner: userId });
}

export async function finRequestById(id) {
	return await Request.find({ _id: id });
}

export async function saveRequest(userId, body) {
	const {
		isFragile,
		width,
		height,
		depth,
		weight,
		due,
		fromCity,
		fromAddress,
		toCity,
		toAddress,
		toOwner,
		toOwnerId,
	} = body;

	const payload = {
		fromOwner: userId,
		isFragile,
		width,
		height,
		depth,
		weight,
		due,
		fromCity,
		fromAddress,
		toCity,
		toAddress,
		toOwner,
		toOwnerId,
	};

	const request = new Request(payload);
	await request.save();
	return request;
}

export async function updateRequest(requestId, body) {
	const {
		isFragile,
		width,
		height,
		depth,
		weight,
		due,
		fromCity,
		fromAddress,
		toCity,
		toAddress,
		toOwner,
		toOwnerId,
	} = body;

	const payload = {
		isFragile,
		width,
		height,
		depth,
		weight,
		due,
		fromCity,
		fromAddress,
		toCity,
		toAddress,
		toOwner,
		toOwnerId,
	};

	const request = this.finRequestById(requestId);
	request.isFragile = payload.isFragile;
	request.width = payload.width;
	request.height = payload.height;
	request.depth = payload.depth;
	request.weight = payload.weight;
	request.due = payload.due;
	request.fromCity = payload.fromCity;
	request.toCity = payload.toCity;
	request.toAddress = payload.toAddress;
	request.toOwner = payload.toOwner;
	request.toOwnerId = payload.toOwnerId;

	await request.save();
	return request;
}
