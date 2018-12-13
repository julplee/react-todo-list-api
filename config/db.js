'use strict';

const fs = require('fs');
const dataFileUrl = './config/data.json';

module.exports = {
    readTodos() {
        let rawData = fs.readFileSync(dataFileUrl);
        let todos = JSON.parse(rawData);

        return todos;
    },

    writeTodos(data) {
        let rawData = JSON.stringify(data);
        fs.writeFileSync(dataFileUrl, rawData);
    }
}