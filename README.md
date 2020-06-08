## Airtable as CMS

Boilerplate code for a frontend that uses [Airtable](https://airtable.com/) as a CMS. Built using `create-react-app`.  

Read more about the Airtable API [here](https://airtable.com/api).

## How to run locally

`yarn install` and `yarn start`


You have to create a `.env` file in the root directory, in which you will list the following parameters: 

```
REACT_APP_AIRTABLE_API_KEY=YOUR_AIRTABLE_KEY
REACT_APP_AIRTABLE_API_URL=https://api.airtable.com/v0
REACT_APP_AIRTABLE_BASE=YOUR_AIRTABLE_BASE_ID
REACT_APP_AIRTABLE_TABLE=YOUR_AIRTABLE_TAB_NAME
```

If you change the details above, you need to restart your server.

## How to deploy
I am using [Vercel](https://vercel.com/) (ex-Zeit) or [Netlify](https://app.netlify.com/). Don't forget to set up the `env` variables (both services offer a way to do that on their platform GUI).