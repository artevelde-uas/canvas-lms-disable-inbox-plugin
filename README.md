# Removes the 'Inbox' funtionality

[![](https://img.shields.io/npm/v/@artevelde-uas/canvas-lms-disable-inbox-plugin.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-disable-inbox-plugin)
[![](https://img.shields.io/github/license/artevelde-uas/canvas-lms-disable-inbox-plugin.svg)](https://spdx.org/licenses/ISC)
[![](https://img.shields.io/npm/dt/@artevelde-uas/canvas-lms-disable-inbox-plugin.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-disable-inbox-plugin)

Plug-in for the [Canvas LMS theme app](https://github.com/artevelde-uas/canvas-lms-app) that removes the 'Inbox' funtionality.

## Features

* Removes the 'Inbox' menu item
* Redirects all calls to the Inbox back to the Dashboard

## Installation

Using NPM:

    npm install @artevelde-uas/canvas-lms-disable-inbox-plugin

Using Yarn:

    yarn add @artevelde-uas/canvas-lms-disable-inbox-plugin

## Usage

Just import the plug-in and add it to the Canvas app:

```javascript
import { run, addPlugin } from '@artevelde-uas/canvas-lms-app';
import disableInboxPlugin from '@artevelde-uas/canvas-lms-disable-inbox-plugin';

addPlugin(disableInboxPlugin);

run();
```
