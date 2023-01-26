
function Map({ location }) {
  return (
    <iframe
      src={`https://maps.google.com/maps?q=${location}&output=embed`}
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen
    />
  );
}

export default Map;
