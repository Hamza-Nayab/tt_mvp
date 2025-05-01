import LoginGoogle from "@/components/buttons/logingoogle";

export default function LoginPage() {
  return (
    <div>
      <div className=" p-4 max-w-xs mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Sign in</h1>
        <p className="text-center pb-2">Sign in to your account using anymethod below</p>
       <LoginGoogle />
      </div>
    </div>
  );
}
