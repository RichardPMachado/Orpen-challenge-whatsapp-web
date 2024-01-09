class CustomError extends Error {
    constructor(mess: string, statusCode: number) {
      super(mess)
      this.stack = statusCode.toString()
    }
  }

//   _RPM

export default CustomError