class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    // Set success based on status code, common convention is < 400 for success
    this.success = statusCode >= 200 && statusCode < 400;
  }
}
export { ApiResponse };