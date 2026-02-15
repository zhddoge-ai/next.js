let errorModule

try {
  errorModule = require('./dist/api/error')
} catch {
  // In react-server-conditioned environments (e.g. instrumentation/proxy),
  // evaluating pages/_error can throw before compile errors are surfaced.
  // Fallback to an empty module so import diagnostics can still be reported.
  errorModule = {}
}

const ErrorComponent = errorModule.default || errorModule

module.exports = ErrorComponent
Object.assign(module.exports, errorModule)
module.exports.default = ErrorComponent
