//Create a new task

export default function lambaHandler(event) {
  try {
    const task = JSON.parse(event.body).task;

    if (!task) return createResponse(500, "error");
    return {
      statusCode: 200,
    };
  } catch (error) {
    console.log(error);
    return createResponse(500, "An error occurred processing your request");
  }
}

/**
 * Creates a response
 * @param {*} statusCode - Response status code
 * @param {*} message - Response message
 * @returns
 */
function createResponse(statusCode, message) {
  return {
    statusCode: statusCode,
    body: {
      details: error || "not provided",
    },
  };
}
