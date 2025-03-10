"use client";
import useSWR from "swr";
import axios from "axios";

export const useFetchData = <T>(url: string) => {
  const fetcher = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  };
  const { data, error: isError, isLoading } = useSWR<T>(url, fetcher);
  return { data, isError, isLoading };
};
