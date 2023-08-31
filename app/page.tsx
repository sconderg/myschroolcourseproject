"use client";
import { useIsLogin } from "@/hooks/useIsLogin";
import LoginPortal from "@/modules/home/LoginPortal";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const loggedIn = useIsLogin();
  if (loggedIn) return null;
  if (!loggedIn) {
    return <LoginPortal />;
  }
}
