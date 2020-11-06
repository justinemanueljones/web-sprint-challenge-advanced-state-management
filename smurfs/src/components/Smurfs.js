import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchData } from "../store/actions/index";



const Smurfs = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);
  return (
    <div>
      {props.isLoading ? <h1> loading </h1> : null}
      {props.error ? (
        <p> {props.error}</p>
      ) : null}
      {props.smurfs.length > 0 ? (
        <div>
          {props.smurfs.map((smurf) => {
            return (
              <div>
                <h2>{smurf.name}</h2>
                <h3>Age: {smurf.age} </h3>
                <h3>Height: {smurf.height}</h3>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchData })(Smurfs);
