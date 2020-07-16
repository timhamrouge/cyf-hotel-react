import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div className="card">
            <img
              src="https://i.guim.co.uk/img/media/a125563698b776c1bd884361da8ffc3a0edb4344/0_425_4303_2582/master/4303.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b9de03b8e2e2210db975762cedfde542"
              alt="glasgow"
              className="card-img-top"
            />
            <div className="card-body">
              <a
                href="https://peoplemakeglasgow.com/"
                className="btn btn-primary"
              >
                Glasgow
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <img
              src="https://i.guim.co.uk/img/media/53c1282d21aff4b264c4698e2ba6fe21a9efe22a/0_22_3360_2016/master/3360.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4a104c736f1c2bd7e903a31d614f113a"
              alt="manchester"
              className="card-img-top"
            />
            <div className="card-body">
              <a
                href="https://www.visitmanchester.com/"
                className="btn btn-primary"
              >
                Manchester
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <img
              src="https://www.adventureconnections.co.uk/wp-content/uploads/2016/11/london-party-destination-800X800-1-1.jpg"
              alt="london"
              className="card-img-top"
            />
            <div className="card-body">
              <a
                href="https://www.visitlondon.com/"
                className="btn btn-primary"
              >
                London
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
