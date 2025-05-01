// narshima

const TimeLineItem = ({ event, index, isLast }) => {
  const isEven = index % 2 === 0;
  const { title, date, description, icon } = event;

  return (
    <div className="timeline-item">
      {isEven ? (
        <>
          {!isLast && ( //  Conditionally render the image
            <img
              src="https://s3-alpha-sig.figma.com/img/eeaa/8ba6/bb08a5ec20b7362265d09d90c5e4539c?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rv7bd9jPNrl9TvUe5FQQwdSjD5mLFXbCejukmqCIgHlSkH6vvkF~G~c~5WbvZUECy5kxONUbjY3PdVSegzI7laz49Cad14LCofnJhkRzpT3WFuUIIy--t~7JMWvY5hxrwmmIbBNE4eFro8MncSzOB1FRHLBOde2StzxHqHVkW4nb-haHQAPJ5tqSYPkkXiw8SMM28Ukq3NuiIS0k0-~ieT-t~Gs6iy413~Vj6k48~AcxqWqW~SxA9KuA9JNHTy7P9jBk~aNrB83PkXQzBGZrltxUNFihMoK9oqw6ONPP6nblKgEOwxOgnZt7xybv-mDlNU9d60qo6M1WNTOJPxlhyQ__"
              alt=""
              style={{
                width: "186.41px",
                height: "300.41px",
                top: "1144px",
                left: "917.04px",
                transform: "rotate(29.52deg)",
                transition: "transform 0.2s ease",
                borderRadius: "5px",
                boxShadow: " rgb(255, 255, 255)",
              }}
              className="tilt-image"
            />
          )}
          <div className="timeline-item-info">
            <h3 className="timeline-item-title">{title}</h3>
            <div className="timeline-item-date">{date}</div>
            <br />
            <div className="timeline-item-description">
              {icon && (
                <div
                  className="timeline-item-icon"
                  style={{
                    width: "50px",
                    height: "80px",
                    fontSize: "40px",
                    display: "flex",
                    flexDirection: "row-reverse",
                  }}
                >
                  {icon}
                </div>
              )}
              {description}
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="timeline-item-info"
            style={{ flexGrow: 1, textAlign: "right" }}
          >
            <h3 className="timeline-item-title">{title}</h3>
            <div className="timeline-item-date">{date}</div>
            <br />
            <div className="timeline-item-description">
              {description}
              {icon && (
                <div
                  className="timeline-item-icon"
                  style={{
                    width: "50px",
                    height: "80px",
                    fontSize: "40px",
                    display: "flex",
                    marginLeft: "10px",
                  }}
                >
                  {icon}
                </div>
              )}
            </div>
          </div>
          {!isLast && ( // Conditionally render the image
            <img
              src="https://s3-alpha-sig.figma.com/img/eeaa/8ba6/bb08a5ec20b7362265d09d90c5e4539c?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rv7bd9jPNrl9TvUe5FQQwdSjD5mLFXbCejukmqCIgHlSkH6vvkF~G~c~5WbvZUECy5kxONUbjY3PdVSegzI7laz49Cad14LCofnJhkRzpT3WFuUIIy--t~7JMWvY5hxrwmmIbBNE4eFro8MncSzOB1FRHLBOde2StzxHqHVkW4nb-haHQAPJ5tqSYPkkXiw8SMM28Ukq3NuiIS0k0-~ieT-t~Gs6iy413~Vj6k48~AcxqWqW~SxA9KuA9JNHTy7P9jBk~aNrB83PkXQzBGZrltxUNFihMoK9oqw6ONPP6nblKgEOwxOgnZt7xybv-mDlNU9d60qo6M1WNTOJPxlhyQ__"
              alt=""
              style={{
                width: "186.41px",
                height: "300.41px",
                top: "1144px",
                left: "917.04px",
                transform: "scaleX(-1) rotate(40deg)",
                transition: "transform 0.2s ease",
                borderRadius: "5px",
                boxShadow: "0 2px 4px rgba(46, 37, 37, 0.2)",
              }}
              className="tilt-image"
            />
          )}
        </>
      )}
    </div>
  );
};

export default TimeLineItem;
