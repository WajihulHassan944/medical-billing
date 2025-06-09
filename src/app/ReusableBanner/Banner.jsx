// /components/Banner.jsx
import React from 'react';
import Link from 'next/link';
import './banner.css';

const Banner = ({ title, breadcrumbs }) => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-title">{title}</h1>
        <p className="breadcrumb">
          {breadcrumbs?.map((crumb, index) => (
            <span key={index} className={crumb.active ? 'breadcrumb-current' : 'breadcrumb-home'}>
              {crumb.link && !crumb.active ? (
                <Link href={crumb.link}>{crumb.label}</Link>
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
