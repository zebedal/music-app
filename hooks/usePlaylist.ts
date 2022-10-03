import useSWR from "swr";
import fetcher from "lib/fetcher";

const usePlayList = () => {
  const { data, error } = useSWR("/playlists", fetcher);

  return {
    playlists: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};

export default usePlayList;
