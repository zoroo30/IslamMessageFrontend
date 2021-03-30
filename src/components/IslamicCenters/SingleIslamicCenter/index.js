import { useQuery } from "react-query";
import Map from "../../Map";

const getIslamicCenterById = async (id) => {
  const res = await fetch(
    `${process.env.REACT_APP_DEV_API}/api/v1/islamiccenters/${id}`
  );
  const data = await res.json();
  return data.data;
};

function useIslamicCenter(IslamicCenterId) {
  return useQuery(
    ["islamicCenter", IslamicCenterId],
    () => getIslamicCenterById(IslamicCenterId),
    {
      enabled: !!IslamicCenterId,
      retry: false,
    }
  );
}

export default function SingleIslamicCenter({ match }) {
  const id = match.params.id;
  const { isLoading, isError, data, error } = useIslamicCenter(id);

  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;
  console.log(data);

  const name = data.localizedName || data.nameEn;
  const address = data.localizedAddress || data.addressEn;
  const city = data.city.localizedName || data.city.name;
  const country = data.country.localizedName || data.country.name;
  const {
    imageFileName,
    email,
    facebook,
    twitter,
    phone,
    lat,
    lng,
    overview,
  } = data;

  return (
    <>
      <img
        src={`${process.env.REACT_APP_DEV_API}/${imageFileName}`}
        alt={name}
      />
      <h1>{name}</h1>
      <div>
        <p>{overview}</p>
      </div>
      <Map lat={lat} lng={lng} />
      address information:
      {address} {city} {country}
      <br />
      contact info
      {email} {facebook} {twitter} {phone}
    </>
  );
}
