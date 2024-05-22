import React from "react";
import Header from "./Header";

const Notification = () => {
  return (
    <>
      <div className="containerh">
        <Header />
      </div>
      <div className="notification-main">
        <h1>Notifications</h1>

        <div className="notif-cards">
          <div className="alert-message">
            <strong>
              <span className="notif-heart">🤍</span> News : &nbsp;
            </strong>
            Dear User, request you sent...
            <button className="btn-notif">➜</button>
            {/*<button className="btn-notif">×</button>*/}
          </div>
          <div className="alert-message">
            <strong>
              <span className="notif-heart">🤍</span> Hello : &nbsp;
            </strong>
            Dear User, request you sent ...
            <button className="btn-notif">➜</button>
          </div>
          <div className="alert-message">
            <strong>
              <span className="notif-heart">🤍</span> Hello : &nbsp;
            </strong>
            Dear User, our new update is...
            <button className="btn-notif">➜</button>
          </div>
          <div className="alert-message">
            <strong>
              <span className="notif-heart">🤍</span> Attention : &nbsp;
            </strong>
            This notification is to tell ...
            <button className="btn-notif">➜</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
