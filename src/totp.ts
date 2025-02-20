import { TOTP } from "totp-generator"

console.log(process.env.TOTP);
const { otp, expires } = TOTP.generate("JBSWY3DPEHPK3PXP")
console.log(otp)
