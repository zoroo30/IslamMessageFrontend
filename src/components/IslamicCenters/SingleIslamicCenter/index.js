import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { LoadingError } from "../../Errors";
import ImageHeader from "../../Headers/ImageHeader";
import Loading from "../../Loading";
import Map from "../../Map";
import "../../../assets/css/text.css";

const getIslamicCenterById = async (id) => {
  const res = await fetch(
    `${process.env.REACT_APP_API_ENDPOINT}/api/v1/islamiccenters/${id}`
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

  if (isLoading) return <Loading />;
  if (isError) return <LoadingError error={error.message} />;
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
      <ImageHeader
        address={[
          {
            title: "Home",
            linkTo: "/",
          },
          {
            title: "Islamic Centers",
            linkTo: "/islamic_centers",
          },
        ]}
        title={name}
        imgPath={`${process.env.REACT_APP_API_ENDPOINT}/${imageFileName}`}
      />
      <Container className="mb-3">
        <h2 className="font-weight-bold">{name}</h2>
        {overview && (
          <>
            <h4 className="font-weight-bold">Overview</h4>
            <p className="color-gray">{overview}</p>
          </>
        )}
        <h4 className="font-weight-bold mt-3">Location</h4>
        {address && <span className="color-gray">{`${address}`}</span>}
        {city && country && <span>{`${city}, ${country}`}</span>}
        <div className="mt-3 mb-3">
          <Map lat={lat} lng={lng} />
        </div>
        {(email || phone) && <h4 className="font-weight-bold mt-3">Contact</h4>}
        {email && (
          <span className="color-gray">
            <strong>Email: </strong>
            {email}
          </span>
        )}
        {phone && (
          <span className="color-gray">
            <strong>Phone: </strong>
            {phone}
          </span>
        )}
        {(facebook || twitter) && (
          <h4 className="font-weight-bold mt-3">Social Media</h4>
        )}
        {facebook && (
          <span className="color-gray">
            <a
              href={facebook}
              rel="noopener noreferrer"
              target="_blank"
              style={{ fontSize: "25px" }}
            >
              <i className="fab fa-facebook-square mr-1"></i>
            </a>
          </span>
        )}
        {twitter && (
          <span className="color-gray">
            <a
              href={twitter}
              rel="noopener noreferrer"
              target="_blank"
              style={{ fontSize: "25px" }}
            >
              <i className="fab fa-twitter-square mr-1"></i>
            </a>
          </span>
        )}
      </Container>
    </>
  );
}
