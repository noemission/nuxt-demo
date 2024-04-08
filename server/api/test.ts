export default defineEventHandler(async (event) => {
    console.log("TEST API HANDLER")
    return { msg: "Hi", time: new Date() }
  })
  