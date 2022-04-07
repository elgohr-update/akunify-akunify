async function copyRobotsTxt() {
  const ROBOT_FILE_PATH =
    process.env.BUILD_ENV === 'production'
      ? 'public/robots-production.txt'
      : 'public/robots-staging.txt'

  await $`cp ${ROBOT_FILE_PATH} public/robots.txt`
  // eslint-disable-next-line no-console
  console.log('robots.txt file copied')
}
