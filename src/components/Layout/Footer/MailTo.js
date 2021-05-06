import React from 'react';

export default function MailTo() {
  const mailto = 'mailto:rustichomesteadchile@gmail.com';

  const handleOnClick = () => {
    window.location = mailto;
  };
  return (
    <div className="col-12 col-md-4">
      <a to="mailto" onClick={handleOnClick} className="footer-text">
        Email Us
      </a>
    </div>
  );
}
