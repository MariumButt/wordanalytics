import React, { useState } from 'react';
import Stats from "./Stats";
import Textarea from "./Textarea";
import { INSTAGRAM_MAX_CHARACTER, FACEBOOK_MAX_CHARACTER } from "../constants";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharacters: text.length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHARACTER - text.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHARACTER - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}