export const PostOwner = (props) => {
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src={props.srcImgPro}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5">{props.name}</span>
      </div>

      <span>{props.textPost}</span>

      {props.num > 0 && (
        <div className="d-flex align-items-center gap-1">
          <img src="/like.svg" width={20}></img>
          <span className="text-muted">{props.num} คน</span>
        </div>
      )}
      <hr className="m-0 border" />
    </div>
  );
};
