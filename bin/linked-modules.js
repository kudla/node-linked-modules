#!/usr/bin/env node

const { join: joinPath } = require('path')

const { listLinkedModules } = require('../dist')

const [,, template, delimiter] = process.argv

const {
    PWD
} = process.env

console.log(listLinkedModules(joinPath(PWD, 'node_modules'), template, delimiter))
