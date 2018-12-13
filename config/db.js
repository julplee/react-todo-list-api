'use strict';

const fs = require('fs');
const dataFileUrl = './config/data.json';
const indexFileUrl = './config/index.json';

module.exports = {
    readTodos() {
        let rawData = fs.readFileSync(dataFileUrl);
        let todos = JSON.parse(rawData);

        return todos;
    },

    giveId() {
        let id = parseInt(fs.readFileSync(indexFileUrl));

        return id;
    },

    commitId() {
        let id = this.giveId();

        id += 1;
        fs.writeFileSync(indexFileUrl, id);
    },

    writeTodos(data) {
        let rawData = JSON.stringify(data);

        fs.writeFileSync(dataFileUrl, rawData);
    }
}