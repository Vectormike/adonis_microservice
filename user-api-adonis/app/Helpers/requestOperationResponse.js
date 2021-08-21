"use strict";

/**
 * @description Provides a structural response format for any request operation
 * either successful or failed.
 * @returns {object}
 */
const requestOperationResponse = ({
  error_context,
  message,
  status,
  status_code,
  results,
}) => {
  return {
    status_code,
    status,
    error_context,
    message,
    results,
  };
};

module.exports = requestOperationResponse;
