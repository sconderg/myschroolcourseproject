"use client";
import LoginPortal from "@/modules/home/LoginPortal";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const loggedIn = true;
  if (loggedIn) router.push("/student-portal");
  if (!loggedIn) {
    return <LoginPortal />;
  }
}
