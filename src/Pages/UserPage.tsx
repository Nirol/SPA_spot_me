import React from "react";

import { useParams } from "react-router-dom";

export default function UserPage() {
  const { userId } = useParams<{ userId: string }>();

  return (
    <>
      <h1>Hello there user {userId}</h1>

      <p>This is your awesome User Profile page</p>
    </>
  );
}
