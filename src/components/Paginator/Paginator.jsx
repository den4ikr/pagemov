import Pagination from "@material-ui/lab/Pagination";

export const Paginator = (props) => {
  return (
    <div>
      <Pagination
        count={props.count}
        page={props.page}
        onChange={props.hadleChange}
      />
    </div>
  );
};
