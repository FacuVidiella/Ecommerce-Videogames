import React, { useEffect } from "react";
import { getAdmins } from "../../Redux/actions/utilityActions";
import { useDispatch, useSelector } from "react-redux";
import "./SuperAdminPanel.css";

import CardAdmin from "../CardAdmin/CardAdmin";

export default function SuperAdminPanel() {
  const state = useSelector((state) => state.adminReducer.admins);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdmins());
  }, []);

  return (
    <div className="granContainerAdmins">
      {state ? (
        <div className="containCardsAdmins">
          <h3>ADMINS</h3>
          <div className="cards">
            {state.map((e) => (
              <CardAdmin props={e} />
            ))}
          </div>
        </div>
      ) : (
        <div>Not Admins Yet</div>
      )}
    </div>
  );
}
