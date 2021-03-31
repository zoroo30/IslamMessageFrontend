import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { LoadingError } from "../../Errors";
import ImageHeader from "../../Headers/ImageHeader";
import Loading from "../../Loading";
import Map from "../../Map";
import "../../../assets/css/text.css";

const getEventById = async (id) => {
  const res = await fetch(
    `${process.env.REACT_APP_API_ENDPOINT}/api/v1/events/${id}`
  );
  const data = await res.json();
  return data.data;
};

function useEvent(eventId) {
  return useQuery(["event", eventId], () => getEventById(eventId), {
    enabled: !!eventId,
    retry: false,
  });
}

export default function SingleEvent({ match }) {
  const id = match.params.id;
  const { isLoading, isError, data, error } = useEvent(id);

  if (isLoading) return <Loading />;
  if (isError) return <LoadingError error={error.message} />;
  console.log(data);

  const {
    imageFileName,
    dateTime,
    title,
    overview,
    address,
    islamicCenter,
    lat,
    lng,
  } = data;

  return (
    <>
      <ImageHeader
        address={[
          {
            title: "Home",
            linkTo: "/",
          },
          {
            title: "Events",
            linkTo: "/events",
          },
        ]}
        title={title}
        imgPath={`${process.env.REACT_APP_API_ENDPOINT}/${imageFileName}`}
      />
      <Container>
        <span className="font-weight-bold color-green">{dateTime}</span>
        <h2 className="font-weight-bold">{title}</h2>
        <h4 className="font-weight-bold">Overview</h4>
        <p className="color-gray">{overview}</p>
        <h4 className="font-weight-bold">Location</h4>
        {address && (
          <span className="color-gray">
            <strong>Address: </strong>
            {address}
          </span>
        )}
        {islamicCenter && (
          <>
            <strong className="color-gray">islamic center: </strong>
            <Link to={`/islamic_centers/${islamicCenter.id}`}>
              {islamicCenter.nameEn}
            </Link>
          </>
        )}
        <div className="mt-3 mb-3">
          <Map lat={lat} lng={lng} />
        </div>
      </Container>
    </>
  );
}
