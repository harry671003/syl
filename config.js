module.exports = {
  "environment": {
    "port": process.env.PORT || 3000
  },
  "secrets": {
    "telegram": {
      "token": process.env.TELEGRAM_TOKEN
    }
  },
  "appInsights": {
    "key": process.env.APPINSIGHTS_KEY || "f43bc807-e98e-4bde-a0de-5501297e9a66"
  }
}