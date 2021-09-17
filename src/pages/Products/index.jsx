import { Box, Container } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import productApi from "api/productApi";
import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import ProductSkeletonList from "./components/ProductSkeletonList";
import { useStyles } from "./style";

function ProductPage() {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 12,
    total: 10,
    page: 1,
  });
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 12,
  });

  useEffect(() => {
    (async () => {
      try {
        //   Goi API
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }

      setLoading(false);
    })();
  }, [filters]);

  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  };

  return (
    <Box className={classes.root}>
      <Container>
        {loading ? (
          <ProductSkeletonList length={12} />
        ) : (
          <ProductList data={productList} />
        )}
        <Box className={classes.pagination}>
          <Pagination
            color="primary"
            count={Math.ceil(pagination.total / pagination.limit)}
            page={pagination.page}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </Box>
      </Container>
    </Box>
  );
}

export default ProductPage;
