import React from 'react';
import { Link } from 'react-router-dom';

export default function MailTo() {
  const mailto = 'mailto:no-reply@example.com';

  const handleOnClick = (event) => {
    event.preventDefault();
    window.location = mailto;
  };
  return (
    <div className="col-12 col-md-4">
      <Link to="#" onClick={handleOnClick} className="footer-text">
        Email Us
      </Link>
    </div>
  );
}
