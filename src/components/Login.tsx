import { useState } from "react";
import type { FormEvent } from "react";

export default function Login() {
    const [responseMessage, setResponseMessage] = useState("");

    async function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(
            e.target as HTMLFormElement
        );
        const response = await fetch("/api/login", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        if (data.message) {
            setResponseMessage(data.message);
        }
    }

    return (
        <form className="flex flex-col gap-5" onSubmit={submit}>
            <label className="flex flex-col gap-2" htmlFor="login">
                <span className="font-bold text-2xl text-center"> Login: </span>
                <input
                    className="text-black py-2 px-2 rounded"
                    type="text"
                    id="login"
                    name="login"
                    required
                />
            </label>
            <label className="flex flex-col gap-2" htmlFor="password">
                <span className="font-bold text-2xl text-center"> Password: </span>
                <input
                    className="text-black py-2 px-2 rounded"
                    type="password"
                    id="password"
                    name="password"
                    required
                />
            </label>
            <button
                className="text-2xl text-black bg-amber-500 hover:bg-white
                            rounded-lg my-5 py-2 px-2 font-medium text-center"
            >
                Login in HCG
            </button>
            {responseMessage && <p>{responseMessage}</p>}
        </form>
    );
}