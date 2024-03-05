/**
 * This function constructs a success response object with the provided data and message.
 */
function SuccessResponse(data: any, message: string) {
  return {
    data, success: true, message,
  };
}

/**
 * This function constructs an error response object with the provided data and message.
 */
function ErrorResponse(data: any, message: string) {
  return {
    data, success: false, message,
  };
}

/**
 * This object contains a method handleResponse for handling responses from HTTP requests.
 * This method takes a response object as input and checks its status.
 * If the status is 'fail', it constructs and returns an error response using the ErrorResponse function.
 * If the status is 'success' or not specified, it constructs and returns a success response using the SuccessResponse function.
 */
const ResponseHandler = {
  handleResponse(response: { data?: any, message: string, status?: 'fail' | 'success' }) {
    if (response.status === 'fail') {
      return ErrorResponse(null, response.message);
    }
    return SuccessResponse(response.data, response.message);
  },
};

export default ResponseHandler;
