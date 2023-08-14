"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      username: event.currentTarget.username.value,
      password: event.currentTarget.password.value,
    };

    try {
      const { data } = await axios.post("/api/auth/login", payload);

      alert(JSON.stringify(data));

      // redirect the user to /dashboard
      push("/dashboard");
    } catch (e) {
      const error = e as AxiosError;

      alert(error.message);
    }
  };

  return (
    <main className="flex flex-col justify-center items-center h-[100vh]">
     <h1 className="uppercase text-2xl font-bold mb-8">Welcome to Login Page</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 border-2 p-4">
        <div>
          <label htmlFor="username" className="mr-4">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            className="border rounded border-black"
          />
        </div>
        <div>
          <label htmlFor="password" className="mr-4" >Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="border rounded border-black"
          />
        </div>

        <button
          type="submit"
          className="p-2 bg-orange-600 text-white w-fit rounded"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
