/* eslint-disable max-classes-per-file */
function SuccessResponse(data: any, message: string) {
  return {
    data, success: true, message,
  };
}

function ErrorResponse(data: any, message: string) {
  return {
    data, success: false, message,
  };
}

const ResponseHandler = {
  handleResponse(response: { data?: any, message: string, status?: 'fail' | 'success' }) {
    if (response.status === 'fail') {
      return ErrorResponse(null, response.message);
    }
    return SuccessResponse(response.data, response.message);
  },
};

export default ResponseHandler;
