#!/usr/bin/env zx

void (async function () {
  if (!process.env.CI) {
    require('husky').install()
  }
})()
