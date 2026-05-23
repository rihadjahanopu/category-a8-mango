import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

const client = new MongoClient(
	process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/booklib"
);
const db = client.db();

export const auth = betterAuth({
	database: mongodbAdapter(db, {
		client,
	}),
	emailAndPassword: {
		enabled: true,
	},
	socialProviders: {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID || "mock-client-id",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "mock-client-secret",
		},
	},
});
