import { Request } from '@models/Request';
import {re} from "@babel/core/lib/vendor/import-meta-resolve";

export async function findRequestsByUser(userId) {
	return await Request.find({ fromOwner: userId });
}

export async function findRequestById(id) {
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

export async function updateRequest(body) {
	const filter = { _id: body.id };
	const update = {
		isFragile: body.isFragile,
		width: body.width,
		height: body.height,
		depth: body.depth,
		weight: body.weight,
		due: body.due,
		fromCity: body.fromCity,
		fromAddress: body.fromAddress,
		toCity: body.toCity,
		toAddress: body.toAddress,
		toOwner: body.toOwner,
		toOwnerId: body.toOwnerId,
	};
	return Request.findOneAndUpdate(filter, update, {
		new: true,
	});
}
