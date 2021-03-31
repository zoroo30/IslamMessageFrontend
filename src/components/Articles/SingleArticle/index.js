import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { LoadingError } from "../../Errors";
import ImageHeader from "../../Headers/ImageHeader";
import Loading from "../../Loading";
import "../../../assets/css/text.css";

const getArticleById = async (id) => {
  const res = await fetch(
    `${process.env.REACT_APP_API_ENDPOINT}/api/v1/articles/${id}`
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

  if (isLoading) return <Loading />;
  if (isError) return <LoadingError error={error.message} />;

  const { imageFileName, title, content } = data;

  return (
    <>
      <ImageHeader
        address={[
          {
            title: "Home",
            linkTo: "/",
          },
          {
            title: "News",
            linkTo: "/News",
          },
        ]}
        title={title}
        imgPath={`${process.env.REACT_APP_API_ENDPOINT}/${imageFileName}`}
      />
      <Container>
        <h2 className="mt-3 font-weight-bold">{title}</h2>
        <p className="color-gray">{content}</p>
      </Container>
    </>
  );
}
