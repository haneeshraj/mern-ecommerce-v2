import { useNavigate } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Paginate = ({ pages, page, isAdmin = false }) => {
  const navigate = useNavigate();

  const onClickHandler = (pageNumber) => {
    if (!isAdmin) {
      navigate(`/?pageNumber=${pageNumber}`);
    } else {
      navigate(`/admin/productlist?pageNumber=${pageNumber}`);
    }
  };

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Pagination.Item
            key={x + 1}
            active={x + 1 === page}
            onClick={() => onClickHandler(x + 1)}
          >
            {x + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
