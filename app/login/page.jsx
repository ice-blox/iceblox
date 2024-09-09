"use client";
import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import useAuthStore from "../store/auth-store";
import { useRouter } from "next-nprogress-bar";

const generateStrongPassword = () => {
  const length = 16;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|:;<>,.?";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
};

export default function AuthTabs() {
  const router = useRouter();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [suggestedPassword, setSuggestedPassword] = useState("");

  const { login, signup, user } = useAuthStore((state) => state);

  if (user) {
    router.push("/collection");
  }

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setSignupEmail(newEmail);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsValidEmail(emailRegex.test(newEmail));
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setPasswordsMatch(signupPassword === newConfirmPassword);
  };

  const handlePasswordFocus = () => {
    if (!signupPassword) {
      setSuggestedPassword(generateStrongPassword());
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login(loginEmail, loginPassword);
    router.push("/");
    // Save login details using Zustand
    console.log("Login form submitted", {
      email: loginEmail,
      password: loginPassword,
    });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (signupPassword !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    signup(signupUsername, signupEmail, signupPassword); // Save signup details using Zustand
    console.log("Signup form submitted", {
      username: signupUsername,
      email: signupEmail,
      password: signupPassword,
    });
  };

  return (
    <div className="relative h-full w-full bg-black  flex items-center justify-center min-h-screen">
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
      <Card className="w-full relative z-50 max-w-md bg-black/20">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription className="text-white">
            Login or create an account to get started.
          </CardDescription>
        </CardHeader>
        <CardContent className="bg-transparent">
          <Tabs defaultValue="login">
            <TabsList className="grid gap-2  w-full grid-cols-2 bg-transparent">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    className=" bg-transparent"
                    type="email"
                    placeholder="you@example.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    className="bg-transparent"
                    id="login-password"
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-custom-gradient text-white font-semibold"
                >
                  Log In
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="signup">
              <form onSubmit={handleSignupSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-username">Username</Label>
                  <Input
                    className="bg-transparent"
                    id="signup-username"
                    placeholder="Enter your username"
                    value={signupUsername}
                    onChange={(e) => setSignupUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="you@example.com"
                    value={signupEmail}
                    onChange={handleEmailChange}
                    required
                    className={
                      !isValidEmail
                        ? "border-red-500 bg-transparent text-black"
                        : "text-black bg-transparent"
                    }
                  />
                  {!isValidEmail && (
                    <p className="text-sm text-red-500">
                      Please enter a valid email address.
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    className="bg-transparent"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    onFocus={handlePasswordFocus}
                    required
                  />
                  {suggestedPassword && !signupPassword && (
                    <p className="text-sm text-gray-600">
                      Suggested strong password: {suggestedPassword}
                      <Button
                        type="button"
                        variant="link"
                        className="p-0 h-auto font-normal text-black "
                        onClick={() => {
                          setSignupPassword(suggestedPassword);
                          setConfirmPassword(suggestedPassword);
                          setSuggestedPassword("");
                        }}
                      >
                        Use this password
                      </Button>
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className={`bg-transparent ${
                      !passwordsMatch ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {!passwordsMatch && (
                    <p className="text-sm text-red-500">
                      Passwords do not match.
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-custom-gradient text-white font-semibold"
                >
                  Sign Up
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
