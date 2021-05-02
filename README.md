# tvshows-info-angular

Get api key
1. go to: https://www.themoviedb.org/
login and create apikey.
2. Add generated api key in environments folder(src/environments/environment.ts)

1. This project is built using angular cli 10.1.0.
2. Prerequisite: System should have Node js version 10.13 or higher version.
3. Download the project from git hub.
4. Once download is complete, please go to "angular10tv-shows-info" folder in command prompt and then type and run the below command 
ng serve
5. If compiled successful, then the project should run on http://localhost:4200/.
6. If there is an issue specific with the message "An unhandled exception occurred: Cannot find module '@angular-devkit/build-angular/package.json'" then please install @angular-devkit/build-angular using below mentioned commands:
npm install --save-dev @angular-devkit/build-angular
ng serve
7. Then the project should run on http://localhost:4200


Deploy on firebase 
1. firebase login
2. firebase init
  q: Please select an option 
  a: Use an existing project
  q: Select a default Firebase project for this directory:
  a: select option from firebase project list
  q: What do you want to use as your public directory?
  a: dist/{{project name}} (ex:dist/angular10tv-shows-info)
  q: Configure as a single-page app (rewrite all urls to /index.html)?
  a: Yes
3. ng build --prod --aot
4. firebase deploy
  
