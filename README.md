
## Note:

This test application uses `react-boilerplate` for project configuration. Please check its documentation for any concept. 

I tried to complete the task as much as I could with the time constraints I had. I hope this give the basic idea of my skills. 


## Quick start

1. Clone this repo
2. Move to the appropriate directory: `cd seek-frontend`.<br />
3. Run `npm run setup` in order to install dependencies and clean the git repo.<br />
   *We auto-detect `yarn` for installing packages by default, if you wish to force `npm` usage do: `USE_YARN=false npm run setup`*<br />
   *At this point you can run `npm start` to see the example app at `http://localhost:3000`.*



## Overview of the work:

1. `/` Route Landing page will fetch the exisiting ads in the database see `app/utils/helpers/db`  & `app/utils/request` file for all dummy DB operation.  Landing page will render the ads based on the ad type: `classic, standout, premium`. User can also filter ads by title. 

2. `/signin` will take user to signin page. we have some predifined users for admin and other customers. Please check `app/utils/helpers/db` file. 

3. `/checkout` page.  After signup user will be redirected to `checkout` page. This page is currently incomplete. 

4. `/admin` page. If user logged in as an admin `admin@seek.com`, Admin user will have a new Tab in Navbar at the top. Where admin can define new rules of different ad types and for different customers. 



### Please contact back if app is breaking somewhere or couldn't be ablt to run. 

#### Thanks


