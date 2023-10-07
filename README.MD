<div align="center">
  <h1>Frontend Interview</h1>  
</div>

## About

- Author: Juan Pablo Bizantino
- Date: Octuber 2023

## Libraries, Frameworks, Utilities, Misc

- Vite
- Yarn
- React 18
- TypeScript
- RTK Query Toolkit
- Redux Toolkit
- React Router 6
- Axios
- Material UI 5
- Formik & Yup
- ESLint & Prettier

## Enviromental Variables

Application uses the following variables

```
VITE_BACKEND_URL=http://localhost:8081
VITE_POLLING_INTERVAL_MIN=2
```

If you want to change default values

1. Create .env file and place it on root folder
2. Add the following variables

```
VITE_BACKEND_URL=
VITE_POLLING_INTERVAL_MIN=

```

## Inital Setup

```
$ yarn install
$ yarn dev (for local development)

```

Open http://localhost:5173

## Technical comments

- RTK Query allows to invalidate tags on mutations so you can force data update after the execution. I have not used this option do to challange limitations.
- Memebers data retrieved from RTK Query is stored in a global array using a useEffect hook instead of injecting data directly to the grid, which should be a better solution.
- After a new member is created, I dispatch an action to insert the new memeber into the global array state.
- POLLING_INTERVAL_MIN is set on 2 minutes by default. See line:

```
  const { data, error, isFetching, isSuccess } = useGetUsersQuery(null, {
    pollingInterval: 1000 * 60 * POLLING_INTERVAL_MIN,
  })
```

## Snapshots

![Alt text](https://github.com/jpbizantino/frontend-interview/blob/main/screenshots/image1.png 'All data')

![Alt text](https://github.com/jpbizantino/frontend-interview/blob/main/screenshots/image2.png 'All data')

![Alt text](https://github.com/jpbizantino/frontend-interview/blob/main/screenshots/image3.png 'All data')

![Alt text](https://github.com/jpbizantino/frontend-interview/blob/main/screenshots/image4.png 'All data')

![Alt text](https://github.com/jpbizantino/frontend-interview/blob/main/screenshots/image5.png 'All data')
