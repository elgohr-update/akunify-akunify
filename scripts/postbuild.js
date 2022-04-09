#!/usr/bin/env zx

async function copyRobotsTxt() {
  const ROBOT_FILE_PATH =
    process.env.BUILD_ENV === 'production'
      ? 'public/robots-production.txt'
      : 'public/robots-staging.txt'

  await $`cp ${ROBOT_FILE_PATH} public/robots.txt`
  // eslint-disable-next-line no-console
  console.log('robots.txt file copied')
}

async function copyNextStatic() {
  if (process.env.NODE_ENV === 'production') {
    await $`find .next/static -type f -name '*.map' -exec rm -f {} '\;'`
    await $`cp -R .next/static .next/standalone/.next/`
    // eslint-disable-next-line no-console
    console.log('.next/static folder copied')
  }
}

async function copyParams() {
  if (process.env.NODE_ENV === 'production') {
    await $`cp -R params .next/standalone/`
    // eslint-disable-next-line no-console
    console.log('params folder copied')
  }
}

async function copyPublic() {
  if (process.env.NODE_ENV === 'production') {
    await $`cp -R public .next/standalone/`
    // eslint-disable-next-line no-console
    console.log('public folder copied')
  }
}

void (async function () {
  await copyRobotsTxt()
  await copyNextStatic()
  await copyParams()
  copyPublic()
})()
