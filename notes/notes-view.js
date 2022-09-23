import React from 'react';
import PropTypes from 'prop-types';


export default function NotesView({currentState, fields, texts, labels}) {


    return (
      <div>
        <div> Notes Page </div>
      </div>
    );
}


NotesView.propTypes = {
  currentState: PropTypes.object,
	fields: PropTypes.object,
  texts: PropTypes.object,
  labels: PropTypes.object
};
