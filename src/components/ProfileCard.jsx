import React from "react";

const ProfileCard = ({ item }) => {
  return (
    <div>
      <div className="profile">
        <div className="pic">
          <img src={item.image} alt={item.name} />
        </div>
        <div>
          <h2>{item.name}</h2>
          <p className="status-species">
            <span
              className={
                "status " +
                (item.status === "Alive"
                  ? "alive"
                  : item.status === "Dead"
                  ? "dead"
                  : "unknown")
              }
            >
              {item.status}
            </span>
            <span className="species">{item.species}</span>
          </p>
          <p className="gender">
            <span className="desc">Gender:</span>
            {item.gender}
          </p>
          <p className="location">
            <span className="desc">Location:</span>
            {item.location.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
