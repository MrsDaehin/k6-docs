import { NotFound } from 'components/pages/404/not-found';
import { DocLayout } from 'layouts/doc-layout';
import React from 'react';
import SeoMetadata from 'utils/seo-metadata';

export default function ({ pageContext: { sidebarTree, navLinks } }) {
  const pageMetadata = SeoMetadata[404];
  return (
    <DocLayout
      sidebarTree={sidebarTree}
      navLinks={navLinks}
      pageMetadata={pageMetadata}
    >
      <NotFound />
    </DocLayout>
  );
}
