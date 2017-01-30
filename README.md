# Open Weather Map

<img width="350" src="https://cloud.githubusercontent.com/assets/4203845/22414759/ab1de7d6-e6f4-11e6-9972-930a0cb9225e.png">


## Run

- Clone the repository
- Run `npm install` from inside the repository
- Run `npm start`. Your default browser will automatically opens with the app. You can also access it from http://localhost:3000/

## Environment

Tested on the following environment:

- Node 6.0.0
- NPM 3.8.6
- macOS 10.12.2
- Chrome 55.0.2883.95, Safari 10.0.2 (12602.3.12.0.1), Firefox 51.0.1


## Process of creation

- I decided to use the React library to realise this project.
- I used [create-react-app](https://github.com/facebookincubator/create-react-app) to generate the app, then I ejected it in order to add a few additional features to the build process.
- I've added `sass-loader` to webpack to use SASS instead of regular CSS.
- The app follows a [modular architecture](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1) to organize the different components.
- I use the ES6 (...and more) syntax as much as possible.
- I don't use Redux because it's not needed for such a small app.
