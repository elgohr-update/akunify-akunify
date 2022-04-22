import ErrorContainer from 'containers/Error'

const Error = ({ statusCode }: any): JSX.Element => {
  return <ErrorContainer code={statusCode} />
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
