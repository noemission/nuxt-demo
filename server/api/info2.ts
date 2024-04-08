export default defineEventHandler(event => {
  const config = useRuntimeConfig()
  console.log("INFO2 endpoint")
  return {
    region: config.region || "N/A",
  }
})