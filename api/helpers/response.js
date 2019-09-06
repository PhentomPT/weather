const express = require('express')();

module.exports = {
    json(message, status = 200, body = {}) {
        return express.response.status(status).json({
            code: status,
            message: message,
            content: body
        })
    }
}