"use client";
import { useState } from "react";
import axios from "axios";

const FormNewBoard = () => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    try {
      const data = await axios.post("/api/board", { name });

      console.log("Board created:", data);
      setName("");
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="bg-base-100 p-8 rounded-3xl space-y-8"
      onSubmit={handleSubmit}
    >
      {/* 1. TITLE */}
      <p className="font-bold text-lg">Create a new feedback board</p>
      {/* 2. FORM */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend mb-4">Board name</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="Type here"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </fieldset>
      {/* 3. BUTTON */}
      <button className="btn btn-primary btn-block" type="submit">
        {isLoading && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
        Create board
      </button>
    </form>
  );
};

export default FormNewBoard;
