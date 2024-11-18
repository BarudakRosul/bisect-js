<div align="center">
  <h1>Bisect-JS</h1>
  <p><a href="/docs/README.en.md">English</a></p>
  <p><a href="https://github.com/BarudakRosul/bisect-js/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Report Bug</a> · <a href="https://github.com/BarudakRosul/bisect-js/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Request Feature</a></p>
  <p>
    <a href="https://github.com/BarudakRosul/bisect-js/actions/workflows/test.yml"><img src="https://github.com/BarudakRosul/bisect-js/actions/workflows/test.yml/badge.svg" alt="Testing"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/bisect"><img src="https://img.shields.io/npm/v/%40barudakrosul%2Fbisect" alt="NPM Version"/></a>
    <a href="/LICENSE"><img src="https://img.shields.io/github/license/BarudakRosul/bisect-js" alt="License"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/bisect"><img src="https://img.shields.io/npm/d18m/%40barudakrosul%2Fbisect" alt="Downloads"/></a>
    <a href="https://github.com/BarudakRosul/bisect-js/stargazers"><img src="https://img.shields.io/github/stars/BarudakRosul/bisect-js?style=flat" alt="Stars"/></a>
    <a href="https://github.com/BarudakRosul/bisect-js/network/members"><img src="https://img.shields.io/github/forks/BarudakRosul/bisect-js?style=flat" alt="Forks"/></a>
    <a href="https://github.com/BarudakRosul/bisect-js/issues"><img src="https://img.shields.io/github/issues/BarudakRosul/bisect-js" alt="Issues"/></a>
  </p>
  <a href="https://techforpalestine.org/learn-more"><img src="https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/banner-support.svg" width="100%" alt="Support Palestine"/></a>
</div>

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contribution](#contribution)
6. [License](#license)
7. [Acknowledge](#acknowledge)
8. [Donate](#donate)
9. [Changelog](#changelog)

## Introduction

Bisect-JS is a JavaScript module that provides functions for searching and inserting elements in an already sorted array. This module is perfect for maintaining sorted data structures without the need to re-sort the array each time a new element is inserted. This module is as similar as possible to the `bisect` module in Python.

## Features

Bisect-JS offers the following features:

- Position search using a fast bisection (binary search) algorithm.
- Insertion of elements into sorted arrays.
- Supports search and insertion based on a specific key using specialized comparison functions.
- Can be integrated into TypeScript code.

## Installation

To install Bisect-JS locally, follow these installation steps:

```shell
npm install @barudakrosul/bisect
```

## Usage

To start using Bisect-JS, import the module first:

**1\. CommonJS**
```javascript
const bisect = require("@barudakrosul/bisect");
```

**2\. ESM (ECMAScript Modules)**
```javascript
import bisect from "@barudakrosul/bisect";
```

Example of usage:

**1\. Function usage of `bisectRight(a, x, lo=0, hi=null, key=null)`**

Returns the index where element `x` should be inserted into the sorted array `a`. All elements to the left of that index are smaller than or equal to `x`, and all elements to the right of it are greater than `x`.

```javascript
let arr = [1, 3, 4, 7];
let idx = bisectRight(arr, 5); // idx = 3
```

Another example:

```javascript
let scores = [60, 70, 80, 90];
let grade = ['F', 'D', 'C', 'B', 'A'];
let idx = bisect(scores, 85); // idx = 3
console.log(grade[idx]); // B
```

**2\. Function usage of `bisectLeft(a, x, lo=0, hi=null, key=null)`**

Similar to the `bisectRight` function, but returns the index where `x` can be inserted so that all elements to the left of the index are smaller than `x`, and all elements to the right are greater than or equal to `x`.

```javascript
let arr = [1, 3, 4, 7];
let idx = bisectLeft(arr, 5); // idx = 3
```

**3\. Function usage of `insortRight(a, x, lo=0, hi=null, key=null)`**

Inserts element `x` into the already sorted array `a` using `bisectRight`. If `x` is already in the array, then the new element will be inserted after similar elements.

```javascript
let arr = [1, 3, 4, 7];
insortRight(arr, 5);
console.log(arr); // [1, 3, 4, 5, 7]
```

Another example:

```javascript
let items = [{'name': 'apple', 'price': 10}, {'name': 'banana', 'price': 5}];
insortRight(items, {'name': 'cherry', 'price': 7});
console.log(items); // [{'name': 'apple', 'price': 10}, {'name': 'banana', 'price': 5}, {'name': 'cherry', 'price': 7}]
```

**4\. Function usage of `insortLeft(a, x, lo=0, hi=null, key=null)`**

Inserts element `x` into the already sorted array `a` using `bisectLeft`. If `x` is already in the array, the new element will be inserted before similar elements.

```javascript
let arr = [1, 3, 4, 4, 6];
insortLeft(arr, 4);
console.log(arr); // [1, 3, 4, 4, 4, 6]
```

## Contribution

Contributions to Bisect-JS are greatly appreciated! Whether reporting bugs, suggesting new features, or contributing to code improvements.

## License

Bisect-JS is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.

## Acknowledge

Bisect-JS appreciates the support and contributions of the following individuals and open source projects:

- [@FajarKim](https://github.com/FajarKim) - Lead developer and creator of the application.
- [Bisect Python](https://docs.python.org/3/library/bisect.html) module - The original source for developing Bisect JavaScript.
- Open source community - For valuable contributions to the tools and libraries used in this project.

## Donate

We really appreciate your support to continue developing this project. If you find this project useful, you can support us with a donation:

[![Ko-fi](https://img.shields.io/badge/Ko%e2%80%91fi-donate-7480ff?logo=ko-fi&logoColor=cyan)](https://ko-fi.com/barudakrosul)
[![Trakteer](https://custom-icon-badges.demolab.com/badge/Trakteer-donate-red?logo=trakteerid&logoColor=pink)](https://trakteer.id/barudakrosul)

Every donation, no matter the amount, means a lot to us. Thank you for your support! ❤️

## Changelog

Keep up with the latest changes and updates of Bisect-JS by referring to [Changelog](https://github.com/BarudakRosul/bisect-js/releases).

Thank you for choosing Bisect-JS! We aim to provide an easy solution for searching and inserting elements in an ordered array.

[![Stand with Palestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/StandWithPalestine.svg)](https://techforpalestine.org/learn-more)