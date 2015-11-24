exports.getParams = function (params, baseURL) {
  var yify = {};

  // Set Defaults
  yify.search = '';
  yify.sort = 'date_added';
  yify.genre = 'all';
  yify.page = 1;
  yify.set = '&set=1';

  // Set new parameters
  if (params.sort) {
    yify.sort = params.sort;
  }

  if (params.genre) {
    yify.genre = params.genre;
  }

  if (params.search && params.search !== '') {
    yify.search = params.search;
  }

if (params.keywords && params.keywords !=='') {
    yify.search = params.keywords;
  }
  
  var oldURL = baseURL + '?sort=' + yify.sort + '&genres=' + yify.genre + '&search=' + yify.search;

  yify.previousDisabled = 'disabled';
  yify.nextDisabled = '';
  yify.previousPage = '#';
  yify.nextPage = oldURL + '&set=' + (yify.page + 1);

  // Update paging links
  if (params.set && params.set !== '') {
    yify.set = '&page=' + params.set;
    yify.page = parseInt(params.set);

    yify.previousPage = oldURL + '&set=' + (yify.page - 1);

    if (yify.page > 1) {
      yify.previousDisabled = '';
    }

    yify.nextPage = oldURL + '&set=' + (yify.page + 1);
  } else {
    yify.nextPage = oldURL + '&set=' + (yify.page + 1);
  }

  // Set request URL
  yify.url = 'http://api.torrentsapi.com/list?limit=18&quality=720p&sort_by=';
  yify.url += yify.sort + '&genres=' + yify.genre + '&query_term=' + yify.search + yify.set;
  
 // console.log('yify.url', yify.url);

  return yify;
};
