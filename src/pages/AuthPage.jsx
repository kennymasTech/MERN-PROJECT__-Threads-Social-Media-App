import React from "react";
import { useRecoilValue } from "recoil";
import authScreenAtom from "../atoms/authAtom";
import SignupCard from "../components/SignUpCard";
import LoginCard from "../components/LoginCard";

const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom);
  return <> {authScreenState === "login" ? <LoginCard /> : <SignupCard />} </>;
};

export default AuthPage;
