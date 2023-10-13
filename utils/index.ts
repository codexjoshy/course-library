import qs from 'query-string';

interface UrlQueryParams {
  params: string;
  key?: string;
  value?: string | null;
  removeKeys?: string[];
}
export const convertUrlToQueryString = ({
  params,
  key,
  value,
  removeKeys = [],
}: UrlQueryParams): string => {
  const currentUrl = qs.parse(params);
  if (removeKeys.length) {
    removeKeys.forEach((keyToRemove) => {
      if (currentUrl[keyToRemove]) {
        delete currentUrl[keyToRemove];
      }
    });
  } else if (key && value) {
    currentUrl[key] = value;
  }
  return qs.stringifyUrl({ url: window.location.pathname, query: currentUrl });
};
