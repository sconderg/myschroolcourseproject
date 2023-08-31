import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useIsLogin = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  // we need to check if the user is logged in or not
  // if not, we need to redirect him to the login page
  const router = useRouter();
  useEffect(() => {
    const isLoggedin = localStorage.getItem("isLogin");

    if (!isLoggedin) {
      setIsLogin(false);
      router.push("/");
    } else {
      router.push("/student-portal");
      setIsLogin(true);
    }
  }, [router]);
  return isLogin;
};
