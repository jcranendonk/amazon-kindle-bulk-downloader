import { TOTP } from "totp-generator"

/**
 * Pulls username, password and OTP code from env vars
 */
export const getCredentials = async () => {
  const user = process.env["AMAZON_USER"];
  const password = process.env["PASSWORD"];
  const otpKey = process.env["TOTP"];

  if (!user || !password) {
    throw new Error("Failed to get login credentials from env");
  }

  if (otpKey) {
    const { otp } = TOTP.generate(otpKey);
    return { user, password, otp };
  }

  return { user, password };
};
