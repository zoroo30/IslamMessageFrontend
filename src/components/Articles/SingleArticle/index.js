import { useQuery } from "react-query";

const getArticleById = async (id) => {
  const res = await fetch(
    `${process.env.REACT_APP_DEV_API}/api/v1/articles/${id}`
  );
  const data = await res.json();
  return data.data;
};

function useArticle(articleId) {
  return useQuery(["article", articleId], () => getArticleById(articleId), {
    enabled: !!articleId,
    retry: false,
  });
}

export default function SingleArticle({ match }) {
  const id = match.params.id;
  const { isLoading, isError, data, error } = useArticle(id);

  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;
  console.log(data);
  const { imageFileName, title, content } = data;

  return (
    <>
      <img
        src={`${process.env.REACT_APP_DEV_API}/${imageFileName}`}
        alt={title}
      />
      <h1>{title}</h1>
      <div>
        <p>{content}</p>
      </div>
    </>
  );
}
