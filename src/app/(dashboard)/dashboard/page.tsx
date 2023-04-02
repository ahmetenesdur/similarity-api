import { FC } from "react";

import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Similarity API | Dashboard",
  description: "Free & open-source text similarity API",
};

const page = async () => {
  const user = await getServerSession(authOptions);
  if (!user) return <p>Not logged in</p>;

  return <div>page</div>;
};

export default page;
