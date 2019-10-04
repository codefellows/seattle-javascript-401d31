import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import superagent from 'superagent';

const API_URL = 'http://localhost:8080';

const Slugs = ({ slugs, loadSlugs, updateSlugs }) => {
  useEffect(() => {
    superagent.get(`${API_URL}/slugs`)
      .then(res => {
        loadSlugs(res.body.data);
      });
  }, []);

  function handleUpdate(id) {
    superagent.patch(`${API_URL}/slugs/${id}`)
      .send({ name: "You changed ma name", text: "You changed ma text" })
      .set('Accept', 'application/json')
      .then(res => {
        updateSlugs(res.body);
      });
  }

  return (
    <>
      <ul>
        {slugs.map(slug => {
          return (
            <li>
              <p>{slug.name}</p>
              <p>{slug.text}</p>
              <button onClick={(e) => handleUpdate(slug.id)}>Change Me</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

const mapStateToProps = (state) => ({
  slugs: state.slugs,
});

const mapDispatchToProps = (dispatch) => ({
  loadSlugs: (slugs) => {
    dispatch({
      type: 'SLUGS_LOAD',
      payload: slugs,
    });
  },
  updateSlugs: (slug) => {
    dispatch({
      type: "SLUGS_UPDATE",
      payload: slug,
    })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Slugs);