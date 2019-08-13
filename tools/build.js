#!/usr/bin/env node
'use strict'

const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Text + chalk definitions
const data = {
  name: chalk.white('               Edwin Chan'),
  handle: chalk.white('edwinchan'),
  work: chalk.white('Developer, Programmer , Entrepreneur '),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~edwinchan'),
  github: chalk.gray('https://github.com/') + chalk.green('Edwin-Chan'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('edwinfychan'),
  web: chalk.cyan('https://edwinfychan.com'),
  npx: chalk.red('npx') + ' ' + chalk.white('edwinchan'),
  labelWork: chalk.white.bold('       Work:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

const opts = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

fs.writeFileSync(path.join(__dirname, '../bin/output'), chalk.green(boxen(output, opts)))
