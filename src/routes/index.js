const express = require('express');
const v1Routes = require('./v1');
const HttpResponse = require('../core/response/httpResponse');
const { env } = require('../config/env');

const route = express.Router();

route.get('/', function index(req, res) {
    let responseData = {
        message: 'Node HLS',
        maintaner: 'ekamid, <ebrahimkha71@gmail.com>',
        source: 'https://github.com/ekamid/nodejs-hls-server',
    };

    const httpResponse = HttpResponse.get(responseData);
    res.status(200).json(httpResponse);
});

route.get('/health', function serverHealth(req, res) {
    const startUsage = process.cpuUsage();

    const status = {
        uptime: process.uptime(),
        message: 'Ok',
        timezone: 'ID',
        date: new Date().toISOString(),
        node: process.version,
        memory: process.memoryUsage(),
        platform: process.platform,
        cpu_usage: process.cpuUsage(startUsage),
    };

    const httpResponse = HttpResponse.get({
        message: 'Server Uptime',
        data: status,
    });
    res.status(200).json(httpResponse);
});

route.use('/v1', v1Routes);

module.exports = route;
