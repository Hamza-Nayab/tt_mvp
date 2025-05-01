"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/react";

export default function LoginGoogle() {
  return (
    <button
      onClick={() => signIn("google")}
      className="bg-white shadow text-center w-full py-4 flex gap-4 justify-center"
    >
      <FontAwesomeIcon icon={faGoogle} className="w-6" />
      <span>Sign in with Google</span>
    </button>
  );
}
