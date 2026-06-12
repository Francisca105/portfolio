"use client";

import useSWR from "swr";
import { type PortfolioData, portfolioSchema } from "@/lib/portfolio-schema";

const DATA_URL = "/me.json";

const fetcher = async (url: string): Promise<PortfolioData> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch portfolio data (HTTP ${res.status})`);
  }
  const json = await res.json();
  // Every schema field has a fallback, so partial or malformed data is
  // normalized to safe defaults instead of crashing the UI.
  return portfolioSchema.parse(json);
};

export function useData() {
  const { data, error, isLoading, mutate } = useSWR<PortfolioData>(
    DATA_URL,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
      errorRetryCount: 3,
      keepPreviousData: true,
    },
  );

  return {
    data,
    isLoading,
    isError: error,
    retry: () => mutate(),
  };
}
