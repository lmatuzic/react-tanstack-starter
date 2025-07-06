import { Link, useLocation } from '@tanstack/react-router';

import { Fragment } from 'react/jsx-runtime';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';

function formatBreadcrumbText(slug: string) {
  const cleanSlug = slug.replace(/-/g, ' ').replace(/_/g, ' ');
  const words = cleanSlug.split(' ');

  const title = words.reduce((sentence, word, index) => {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    return sentence + (index > 0 ? ' ' : '') + capitalizedWord;
  }, '');

  return title;
}

function getDisplayText(path: string[], index: number) {
  const item = path[index];
  return formatBreadcrumbText(item);
}

export function NavBreadcrumbs() {
  const location = useLocation();
  const breadcrumbs = location.pathname.split('/').slice(1);

  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <Breadcrumb className="hidden md:block">
      <BreadcrumbList>
        {breadcrumbs.map((item, index) => {
          const path = '/' + breadcrumbs.slice(0, index + 1).join('/');
          const isLast = index === breadcrumbs.length - 1;
          const displayText = getDisplayText(breadcrumbs, index);

          return (
            <Fragment key={item}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{displayText}</BreadcrumbPage>
                ) : (
                  <Link
                    to={path}
                    className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    preload="intent"
                  >
                    {displayText}
                  </Link>
                )}
              </BreadcrumbItem>

              {!isLast && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
