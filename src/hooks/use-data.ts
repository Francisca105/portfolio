"use client";

import useSWR from "swr";
import type { PortfolioData } from "@/types/portfolio";

const DATA_URL =
  "/me.json";

const fetcher = async (url: string): Promise<PortfolioData> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export function useData() {
  const { data, error, isLoading } = useSWR<PortfolioData>(DATA_URL, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 60000,
  });

  return {
    data,
    isLoading,
    isError: error,
  };
}
