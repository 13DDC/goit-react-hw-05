import axios from "axios";
export const fetchTrends = async () => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjRmNjRlMGRjODM0MjdiY2ZiMDAyMzExMDEwZjczNCIsIm5iZiI6MTcyNDc2NjY3Mi40OTcwODcsInN1YiI6IjY2Y2RkN2I3N2RkNWFlMDgzNjQ1NGM2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ugri9uoFqUwhWvl_kIde0sEM7jvo9b1IQfCEHb35q50";
  const BaseURL =
    "https://api.themoviedb.org/3/trending/movie/day?api_key=064f64e0dc83427bcfb002311010f734";
  const response = axios.get(BaseURL, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response;
};

export const fetchDetails = async (movieId) => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjRmNjRlMGRjODM0MjdiY2ZiMDAyMzExMDEwZjczNCIsIm5iZiI6MTcyNDc2NjY3Mi40OTcwODcsInN1YiI6IjY2Y2RkN2I3N2RkNWFlMDgzNjQ1NGM2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ugri9uoFqUwhWvl_kIde0sEM7jvo9b1IQfCEHb35q50";
  const BaseURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=064f64e0dc83427bcfb002311010f734`;

  const response = axios.get(BaseURL, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response;
};

export const fetchCredits = async (movieId) => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjRmNjRlMGRjODM0MjdiY2ZiMDAyMzExMDEwZjczNCIsIm5iZiI6MTcyNDc2NjY3Mi40OTcwODcsInN1YiI6IjY2Y2RkN2I3N2RkNWFlMDgzNjQ1NGM2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ugri9uoFqUwhWvl_kIde0sEM7jvo9b1IQfCEHb35q50";
  const BaseURL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=064f64e0dc83427bcfb002311010f734`;

  const response = axios.get(BaseURL, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response;
};
export const fetchReviews = async (movieId) => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjRmNjRlMGRjODM0MjdiY2ZiMDAyMzExMDEwZjczNCIsIm5iZiI6MTcyNDc2NjY3Mi40OTcwODcsInN1YiI6IjY2Y2RkN2I3N2RkNWFlMDgzNjQ1NGM2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ugri9uoFqUwhWvl_kIde0sEM7jvo9b1IQfCEHb35q50";
  const BaseURL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=064f64e0dc83427bcfb002311010f734`;

  const response = axios.get(BaseURL, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response;
};
export const fetchSearch = async (query) => {
  const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjRmNjRlMGRjODM0MjdiY2ZiMDAyMzExMDEwZjczNCIsIm5iZiI6MTcyNDc2NjY3Mi40OTcwODcsInN1YiI6IjY2Y2RkN2I3N2RkNWFlMDgzNjQ1NGM2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ugri9uoFqUwhWvl_kIde0sEM7jvo9b1IQfCEHb35q50";
  const BaseURL = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&api_key=064f64e0dc83427bcfb002311010f734&page=1`;

  const response = axios.get(BaseURL, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });
  return response;
};
