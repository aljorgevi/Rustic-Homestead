import React from 'react';
import { Helmet } from 'react-helmet';

const MetaHead = ({ title }) => (
  <Helmet>
    <title>{`Rustic Homestead - ${title}`}</title>
    <meta
      name="description"
      content="Cabañas Sur de Chile, Puerto Montt, Leña y Tinajas"
    />
    <meta
      name="keywords"
      content="Homestead, Chile, cabañas, leña, puerto montt"
    />
    <meta name="author" content="aljorgevi" />
    <meta
      name="robots"
      content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />
  </Helmet>
);

export default MetaHead;
