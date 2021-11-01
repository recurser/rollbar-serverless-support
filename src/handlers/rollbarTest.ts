import Rollbar = require('rollbar')
import { Context, Callback } from 'aws-lambda';

const rollbar = new Rollbar({accessToken: process.env.ROLLBAR_ACCESS_TOKEN})

export const handler = rollbar.lambdaHandler((event: any , context: Context, callback: Callback) => {
    rollbar.log(event)
    callback();
})
