#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateKeyPair_1 = __importDefault(require("./util/generateKeyPair"));
const keyPair = (0, generateKeyPair_1.default)();
console.log(keyPair.publicKey.toLocaleString());
