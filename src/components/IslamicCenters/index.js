import { useState } from "react";
import { useQuery } from "react-query";
import Pagination from "../Pagination";
import CardItem from "../Card";
import SearchPageHeader from "../SearchPageHeader";
import { Container } from "react-bootstrap";

const fetchIslamicCenters = async (currentPage = 1) => {
  const res = await fetch(
    `${process.env.REACT_APP_DEV_API}/api/v1/islamiccenters?pageIndex=${currentPage}&pageSize=6`
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

  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;

  const onPageChanged = (currentPage) => {
    setCurrentPage(currentPage);
  };

  return (
    <>
      <SearchPageHeader pageDetails={pageDetails} />
      <Container>
        <div className="row">
          {data.items.map((item) => (
            <CardItem
              key={item.id}
              img={item.image}
              title={item.title}
              subtitle={`${item.city}, ${item.country}`}
              to={`/islamic_centers/${item.id}`}
            />
          ))}
        </div>
        <Pagination
          totalPages={data.totalPages}
          pageNeighbours={1}
          onPageChanged={onPageChanged}
        />
      </Container>
    </>
  );
}
