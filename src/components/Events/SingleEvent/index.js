import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Map from "../../Map";

const getEventById = async (id) => {
  const res = await fetch(
    `${process.env.REACT_APP_DEV_API}/api/v1/events/${id}`
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

  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;
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
      <img
        src={`${process.env.REACT_APP_DEV_API}/${imageFileName}`}
        alt={title}
      />
      <span>{dateTime}</span>
      <h1>{title}</h1>
      <div>
        <p>{overview}</p>
      </div>
      <h1>Location</h1>
      {address && <span>address:{address}</span>}
      islamic center:{" "}
      <Link to={`/islamic_centers/${islamicCenter.id}`}>
        {islamicCenter.nameEn}
      </Link>
      <Map lat={lat} lng={lng} />
    </>
  );
}
