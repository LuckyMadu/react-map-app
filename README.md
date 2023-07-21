<table>
  <tr>
    <td>Frontend</td>
    <td>https://react-map-app-livid.vercel.app/</td>
  </tr>
</table>

<table>
  <tr>
    <td>Search Input and Map View</td>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/LuckyMadu/react-map-app/assets/19740478/91a40d62-62f3-49f2-ba49-49b51799b8b9" width=800 height=300>
    </td>
  </tr>
</table>

#### Principles

- Feature-driven Development (Feature-slice architecture)
- Atomic Design
- Keep things simple

#### Core

- React 18 <https://reactjs.org/>
- Ant Design
- TypeScript 4 <https://www.typescriptlang.org/>
- Redux Toolkit 1.9 <https://redux-toolkit.js.org/>
- Redux thunk middleware / Redux logger
- RTK Query 1.9 <https://redux-toolkit.js.org/rtk-query/overview>

#### Note
- A CORS issue has been identified with the Google Places API while attempting to fetch location data. To address this matter, an alternative solution has been implemented by utilizing a custom API to access specific locations situated in Malaysia.


## Getting Started

This is a frontend application built using React.js. It also uses an .env file to handle environment variables.

To get started with this project, clone the repository to your local machine:

```
git clone https://github.com/LuckyMadu/react-map-app.git
```

After cloning the repository, navigate to the project directory and install the dependencies:

```
cd react-map-app
npm install
```

## Configuration

This project uses an .env file to handle environment variables. You can create an .env file in the root of the project and add your variables to it. For example:

```
REACT_APP_BASE_URL=
REACT_APP_GOOGLE_MAP_API_KEY=
```

To use the variables in your code, you can use the process.env object. For example:

```
const apiUrl = process.env.REACT_APP_BASE_URL;
```

## Running

To run the production build of the application, run:

```
npm start
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
