import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";

import "dotenv/config";

//init arcjet

export const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    //shiel protect your app from bots and scrapers eg.sql injection, ddos, brute force, etc

    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      // block all bots search engines and scrapers
      allow: [
        "CATEGORY:SEARCH_ENGINE",
        // see the full list at https://arcjet.com/bot-list
      ],
    }),
    //rate limit your app to 1000 requests per minute per ip address
    tokenBucket({
      mode: "LIVE",
      refillRate: 30,
      interval: 5,
      capacity: 20,
    }),
  ],
});
