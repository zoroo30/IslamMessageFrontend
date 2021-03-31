import { useState } from "react";
import { useQuery } from "react-query";
import Pagination from "../Pagination";
import CardItem from "../Card";
import SearchPageHeader from "../Headers/SearchPageHeader";
import { Container } from "react-bootstrap";
import Loading from "../Loading";
import { LoadingError } from "../Errors";

const fetchIslamicCenters = async (currentPage = 1) => {
  const res = await fetch(
    `${process.env.REACT_APP_API_ENDPOINT}/api/v1/islamiccenters?pageIndex=${currentPage}&pageSize=6`
  );
  const data = await res.json();
  return data.data;
};

export default function IslamicCenters() {
  const pageDetails = {
    title: "Islamic Centers",
    headerText: "Islamic Centers",
    address: [
      {
        title: "Home",
        linkTo: "/",
      },
    ],
  };

  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, isError, data, error } = useQuery(
    ["islamicCenters", currentPage],
    () => fetchIslamicCenters(currentPage),
    { keepPreviousData: true }
  );

  const onPageChanged = (currentPage) => {
    setCurrentPage(currentPage);
  };

  return (
    <>
      <SearchPageHeader pageDetails={pageDetails} />
      <Container>
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <LoadingError error={error.message} />
        ) : (
          <>
            <div className="row">
              {data.items.map((item) => (
                <CardItem
                  key={item.id}
                  img={item.image}
                  title={item.title}
                  subtitle={`${item.city}, ${item.country}`}
                  to={`/islamic_centers/${item.id}`}
                  link="More details"
                />
              ))}
            </div>
            <Pagination
              totalPages={data.totalPages}
              pageNeighbours={1}
              onPageChanged={onPageChanged}
            />
          </>
        )}
      </Container>
    </>
  );
}
