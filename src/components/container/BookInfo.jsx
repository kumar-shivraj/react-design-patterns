// eslint-disable-next-line react/prop-types
const BookInfo = ({ book }) => {
  const { name, price, title, pages } = book || {};

  return book ? (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Title: {title}</h3>
      <p>Number of Pages: {pages}</p>
    </>
  ) : (
    <h1>Loading</h1>
  );
};

export default BookInfo;
