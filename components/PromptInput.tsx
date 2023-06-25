"use client";

import fetchSuggestionFromChatGPT from "@/lib/fetchSuggestionFromChatGPT";
import { useState } from "react";
import useSWR from "swr";

const PromptInput = () => {
  const [input, setInput] = useState("");

  const {
    data: suggestion,
    isLoading,
    mutate: isValidating,
  } = useSWR("/api/suggestion", fetchSuggestionFromChatGPT, {
    revalidateOnFocus: false,
  });

  return (
    <div className="m-10">
      <form className="flex flex-col border rounded-md shadow-md lg:flex-row shadow-slate-400/20 lg:divide-x">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a prompt..."
          className="flex-1 p-4 rounded-lg outline-none md:p-2"
        />
        <button
          disabled={!input}
          type="submit"
          className={`p-4 font-semibold ${
            input
              ? "bg-violet-500 text-neutral-50 transition-colors duration-200"
              : "text-gray-300 cursor-not-allowed"
          }`}
        >
          Generate
        </button>
        <button
          type="button"
          className="p-4 font-semibold transition-colors duration-200 bg-violet-400 text-neutral-50 disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          Use Suggestion
        </button>
        <button
          type="button"
          className="p-4 font-semibold transition-colors duration-200 border-none rounded-b-lg bg-neutral-50 text-violet-400 disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400 md:rounded-bl-none md:rounded-r-lg"
        >
          New Suggestion
        </button>
      </form>
    </div>
  );
};

export default PromptInput;
