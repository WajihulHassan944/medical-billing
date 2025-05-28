import React from 'react';
import './banner.css';
import Link from 'next/link';

const Banner = ({ title, breadcrumbs }) => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-title">{title}</h1>
        <p className="breadcrumb">
          {breadcrumbs?.map((crumb, index) => (
            <span key={index} className={crumb.active ? 'breadcrumb-current' : 'breadcrumb-home'}>
              {index === 0 ? (
                <Link href={crumb.link || '/'}>{crumb.label}</Link> // Make the first breadcrumb a link
              ) : (
                crumb.label
              )}
              {index < breadcrumbs.length - 1 && ' / '}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Banner;
