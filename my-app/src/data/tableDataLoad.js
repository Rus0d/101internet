export default url => {
  return new Promise((success, fail) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.addEventListener('load', () => {
      if( request.status >= 200 && request.status < 400 ) {
          success(request.responseText);
      }
      else{
          fail(new Error(`Request Failed: ${request.statusText}`));
      }
    });

    request.addEventListener('error', () => {
      fail(new Error('Network Error'));
    });

    request.send();

    console.log(request);
  });
};
