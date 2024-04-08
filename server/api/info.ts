export default defineEventHandler(event => {
  const config = useRuntimeConfig()
  console.log("INFO endpoint")
  return {
    region: config.region || "N/A",
  }
})