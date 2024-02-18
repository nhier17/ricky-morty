# Project Name: Rick and Morty
## Project Description
A Next.js App  that leverages the Rick & Morty API to provide users with a comprehensive exploration of the locations and characters within the Rick & Morty universe. The app offers a user-friendly interface to retrieve information about locations, residents, and as well as the ability to add and persist notes about characters.

## Data fetching 

### Locations
### Dependencies 
    npm install axios
    
To fetch the locations from API I used axios to send a get request to the rick and morty Api.
I chose axios simply because it automatically parses the response data fetched and makes error handling easier when HTTP response errors are received.
I then used useState hook from react to handle components state i.e. locations, search functionality and setting page number.
I used the useEffect hook fetch the data when the component mounts or when the page or search state changes.
I then used Promise.all method to fetch data for each resident in the current location. I achieved this by mapping over the residents array and using axios for rach residentURL.
I created a new response object by combining current location data with residents data and set location to this new array.
I defined the type of response from API to fix typescript errors and passed as props.

### Characters
### Dependencies
    npm install react-paginate --save
I used axios to make an API resquest to the page to fetch characters.
I then used useState hook to handle state of the component and useEffect hook to fetch data when the component mounts.
The component has a search state to filter the data based on the search query.
For the paginations I chose to use react-paginate asit simplifies the implementation of pagination logic. It provides a convenient way to handle page changes, eliminating the need to manually manage page numbers and offsets.
I used a function to handle page change.
After the data is rendered on the screen I used Link for navigation  such that when a user click on any character card it navigates the user to the character details page.

### Characterdetails
### Dependencies
    npm install react-icons
 To fetch characterdetails data I used axios and useParams to the aceess the URL parameter. I achieved  this by creating a function and passed in the id. I made acheck incase the response is undefined and then used useEffect hook to invoke the function.
 I used useRouter to make a function that when a user clicks on home icon it navigates the user back to the home.
 I imported the home icon from react-icons.

 ## Persisted Notes 
 Setup afunction that I used to save notes and retrieve them from localstorage.
 I chose to use localstorage simply because the data stored persists even when the user refreshes or navigates away from the page and since it operates on the client side, it doesn't add extra load to the server. This is beneficial for offloading some data storage responsibilities to the client and reducing server-side storage requirements.





This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
