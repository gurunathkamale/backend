import User from "../user/user.model";
import { hashPassword, comparePassword } from "../../utils/hash";
import { signAccessToken } from "../../utils/jwt";

export const register = async (data: any) => {
  const password = await hashPassword(data.password);
  return User.create({ ...data, password });
};

export const login = async (email: string, password: string) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user || !user.password) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await comparePassword(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  const token = signAccessToken({
    id: user._id.toString(),
    email: user.email,
    role: user.role,
  });

  return {
    token,
    user: {
      id: user._id.toString(),
      email: user.email,
      role: user.role,
    },
  };
};
