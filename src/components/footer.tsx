import { FOOTER_URLS, metadata } from "@/shared/constants";
import * as React from "react";
import { Link } from "react-router-dom";

export const Footer = (): React.JSX.Element => {
  return (
    <footer className='flex w-full flex-col items-center gap-3 bg-muted px-3 py-2 text-center'>
      <h3 className='my-2'>
        {metadata.appName} - A inclusive the open source community for developers.
      </h3>
      <nav className=' flex items-center justify-center gap-3'>
        {FOOTER_URLS.map((group, i) => (
          <div className='flex flex-col flex-wrap gap-3' key={i}>
            {group.map((element, i) => (
              <div key={i} className='space-x-10 text-sm font-medium'>
                <Link
                  to={element.path}
                  className='text-md hover:text-primary hover:underline'>
                  {element.label}
                </Link>{" "}
              </div>
            ))}
          </div>
        ))}
      </nav>
      <p className='my-3 font-medium'>
        Made Made with love and React.JS + Typescript. Copyright © {metadata.appName}{" "}
        Community {new Date().getFullYear()}{" "}
      </p>
    </footer>
  );
};
