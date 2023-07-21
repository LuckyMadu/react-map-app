<table>
  <tr>
    <td>Frontend</td>
    <td>https://react-map-app-livid.vercel.app/</td>
  </tr>
   <tr>
    <td>API Endpoint</td>
    <td>https://employee-management-backend.vercel.app </td>
  </tr>
</table>

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

This will start the production server at http://localhost:3000.
![Screenshot 2023-07-20 at 23 16 52]()

![Screenshot 2023-07-20 at 23 16 59](https://github.com/LuckyMadu/react-map-app/assets/19740478/6c2fedad-802d-4b60-857b-f2fd93a18711)




<table>
  <tr>
    <td>Home - Search Input</td>
    <td>Home - Map View</td>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/LuckyMadu/react-map-app/assets/19740478/2e3b882c-31d1-49fa-a65e-c8f0ed5d83d3" width=800 height=300>
    </td>
    <td>
      <img src="https://github.com/LuckyMadu/react-map-app/assets/19740478/6c2fedad-802d-4b60-857b-f2fd93a18711" width=800 height=300>
    </td>
  </tr>
</table>

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
