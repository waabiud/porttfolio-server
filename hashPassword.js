import bcrypt from "bcryptjs";

const plainPassword = "root";

bcrypt.hash(plainPassword, 10, (err, hash) => {
  if (err) throw err;
  console.log("Hashed password:", hash);
});
