let CurrentTime = () => {
  let time = new Date();
  return (
    <p>
      This Is the current time:{time.toLocaleDateString()} -
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
