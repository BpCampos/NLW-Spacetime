"use client";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import Cookie from "js-cookie";

export default function DeleteMemory(id: any) {
  const router = useRouter();

  async function handleDeleteMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const token = Cookie.get("token");

    await api.delete(`/memories/${id.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    router.push("/");
  }

  return (
    <form onSubmit={handleDeleteMemory}>
      <button
        type="submit"
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
      >
        Deletar
      </button>
    </form>
  );
}
