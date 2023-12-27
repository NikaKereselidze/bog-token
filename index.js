const axios = require("axios");

module.exports = class BogToken {
  constructor(bogClientId, bogClientSecret) {
    this.clientId = bogClientId;
    this.clientSecret = bogClientSecret;
  }
  async getBOGToken() {
    try {
      const basicAuth = Buffer.from(
        `${this.clientId}:${this.clientSecret}`,
        "utf-8"
      ).toString("base64");
      const Authorization = "Basic " + basicAuth;
      const response = await axios.post(
        "https://oauth2.bog.ge/auth/realms/bog/protocol/openid-connect/token",
        new URLSearchParams({ grant_type: "client_credentials" }),
        {
          headers: {
            Authorization,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return [response.data.access_token, null];
    } catch (error) {
      return [null, error];
    }
  }
};
