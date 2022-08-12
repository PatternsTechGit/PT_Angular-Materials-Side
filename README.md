# Adding Angular Material's Side Nav for Routing

## What is Angular Material

[Angular Material](https://material.angular.io/guide/getting-started) is a UI component library for Angular  developers. Angular Material helps to construct attractive, consistent, and functional web pages. It is used to create a responsive and faster website.


## What is Angular Material Side Nav

Angular Material provides two sets of components designed to add collapsible side content (often navigation, though it can be any content) alongside some primary content. These are the sidenav and drawer components.

The sidenav components are designed to add side content to a full screen app. 
For more details click link https://material.angular.io/components/sidenav/overview 

## About this exercise

Previously we scaffolded a new Angular application in which we have integrated 

* FontAwesome Library for icons
* Bootstrap Library for styling buttons
* Routing for multiple components e.g. (CreateAccountComponent, ManageAccountsComponent, DepositFundsComponent, TransferFundsComponent) for which we have already configured routing. Also we have commented code of links in app.component.html as below :
```html
<!-- <ul>
  <li><a><i class="fas fa-chart-line"></i> Dashboard</a></li>
  <div>
    <li><a [routerLink]="['/transfer-funds', { fromAccountId: '111', toAccountId: '222' }]"><i class="fas fa-random"></i> Transfer Funds</a></li>
    <li><a [routerLink]="['/deposit-funds']"><i class="fas fa-money-check-alt"></i>Deposit Funds</a></li>
    <li><a [routerLink]="['/create-account']"><i class="fas fa-user"></i> Create New Account</a></li>
    <li><a [routerLink]="['/manage-accounts']"><i class="fas fa-users"></i> Manage Accounts</a></li>
  </div>
</ul> -->
```
* Bootstrap's Navbar which is responsive and mobile friendly


In this exercise we will

* Integrate Angular Material 
* Integrate Angular Side Nav which will have links to navigate to our components
* Integrate Toggling of Side Nav using Toolbar 


## Step 1: Adding Angular Material support

Use the `Angular CLI's` installation schematic to set up your Angular Material project by running the following command:

```
ng add @angular/material
```

* press 'y' to confirm.
* Select indigo pink theme.
* Select 'y' for typography.
* press 'y' for browser animation.

The ng add @angular/material command will additionally perform the following actions:

* Add project dependencies to package.json
* Add the Roboto font to your index.html
* Add the Material Design icon font to your index.html
* Add a few global CSS styles to:
* Remove margins from body
* Set height: 100% on html and body
* Set Roboto as the default application font

You can see the changes as below :

![1234](https://user-images.githubusercontent.com/100709775/159500312-1f1ee93c-297f-4ae2-9712-39b775722f61.PNG)




## Step 2 : Forms module and MatSidenavModule

The [FormsModule](https://angular.io/api/forms/FormsModule) is used for form implementation.

Import the `FormsModule` & `MatSidenavModule` in app.module.ts as below 

``` javascript
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';

imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  // CLI adds AppRoutingModule to the AppModule's imports array
    FormsModule,
    MatSidenavModule
  ],
```
## Step 3: Add Navbar Component
We will add a new component for toolbar which will contains the logged-In user  information.

To generate a new component we will use Angular CLI's generate component command as below :

```
ng g component toolbar
```
This will also *import toolbar component* in the declaration array in` app.module.ts` file.  
After that, we have to place the selector `<app-toolbar></app-toolbar>` of toolbar component in `app.component.html`

## Step 4: Designing Navbar Template
In the `toolbar.component.html` write the following HTML code for navBar Component

```html
<!-- .navbar -->

<!-- .navbar-expand class can create navigation bar vertical depending on the screen size -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">

      <!-- .navbar-brand class ids for company, product, or project name -->
      <a class="navbar-brand" href="#">BBBank</a>
      
      <!-- Toggler/collapsible Button -->

      <!-- .navbar-toggler class is used to determine when the content toggles behind a button -->
      <!-- data-bs-target="" used to target the navbar content to collapse/Toggle when matches the content's id="" -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                                                   data-bs-target="#navbarSupportedContent" 
                                                   aria-controls="navbarSupportedContent" 
                                                   aria-expanded="false" 
                                                   aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Content -->

      <!-- The .collapse .navbar-collapse classes are for grouping and hiding navbar contents by a parent breakpoint -->
      <!-- The id="" of navbar content should matches with the button data-bs-target="#" to work toggle properly -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <!-- .navbar-nav class is for full-height and lightweight navigation (including support for dropdowns) -->
        <ul class="navbar-nav mb-2 mb-lg-0 ml-nav-custom">

          <li class="nav-item dropdown d-flex flex-end">
            
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
                                                data-bs-toggle="dropdown" aria-expanded="true">
                <div class="photo">
                    <img alt="Profile Photo" src="assets/images/profile.jpg" />
                </div>
                Raas Masood
            </a>

            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><a class="dropdown-item" href="#">Logout</a></li>
            </ul>

          </li>

        </ul>
      </div>

    </div>
  </nav>
```


## Step 4: Styling our Application

In the `styles.css` in **src folder** paste the following code for styling our application layout. This is global styling. 

```css
html, body { height: 100%; }
body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: #525f7f;
  text-align: left;
  background-color: #1e1e2f;
}

.bg-dark {
    background-color: #1e1e2f !important;
}
```


## Step 5: Styling our NavBar Component
Now we will style our toolbar component. In the `toolbar.component.css` in file paste the following css code for styling the navbar

```css

/* Used to style profile photo in navbar */
.navbar .photo {
    display: inline-block;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    vertical-align: middle;
    overflow: hidden;
}

.navbar .photo img {
    width: 100%;
}

/* Class to align photo icon left in navbar */
.ml-nav-custom {
    margin-left: auto !important;
}

```

## Step 6: Add component for side nav
We will generate a new component for side nav menu.
we will use Angular CLI's generate component command as below 

```
ng g component sidenav
```

## Step 7: Material Side Nav

### How Material SideNav works?

To set up a Material `sidenav` we use three components: `mat-sidenav-container`, `mat-sidenav-content`and `mat-sidenav`.

Here are the component details as below :
```html
<!-- mat-sidenav-container which acts as a structural container for our content and sidenav  -->
    <mat-sidenav-container>
    <!-- mat-sidenav which represents the added side content -->
        <mat-sidenav>
            // Here our side nav component will be render.
        </mat-sidenav>
       <!--  mat-sidenav-content which represents the main content -->
        <mat-sidenav-content>
          //  Here routed components will be shown. 
        </mat-sidenav-content>
    </mat-sidenav-container>
```

### Setting Up mat-sidenav

`mat-sidenav` is going to hold the html for the side nav so we will put `<app-sidenav></app-sidenav>` there
and contents of the routed components will go inside `<mat-sidenav-content>` so we will paste `<router-outlet></router-outlet>` in mat-sidenav-content. 

We don't want our top nav to be effected by the side nav so add sidenav structure under the toolbar component in `app.components.html`

Set `height: 100%` so that menu can be render on full screen.

```html
<div class="container-fluid" style="height: 100%;">
<app-toolbar></app-toolbar> 
      <mat-sidenav-container  style="height: 100%;">
          <mat-sidenav opened mode="side">
        <app-sidenav></app-sidenav>
          </mat-sidenav>
          <mat-sidenav-content>
            <router-outlet></router-outlet> 
          </mat-sidenav-content>
      </mat-sidenav-container>
</div>
```

## Step 8: Adding Style for side nav

Add following `CSS` in `sidenav.component.css` to style the side nav. 

```css
.sidenav { /* styles to give redish gradient to side nav */
    background: #ec250d;
    background: linear-gradient(0deg,#ec250d 0,#fd5d93 100%);
    /* height: calc(100vh - 90px); */
    height: 100%;
    width: 230px;
    display: block;
    box-shadow: 0 0 45px 0 rgba(0,0,0,.6);
    margin-right: 15px;
    border-radius: 5px;
    transition: .5s cubic-bezier(.685,.0473,.346,1);
}
.logo {  /* styles for logo */
    position: relative;
    padding: 0.5rem 0.7rem;
    z-index: 4;
}
.logo a.logo-mini {
    opacity: 1;
    float: left;
    width: 34px;
    text-align: center;
    margin-left: 10px;
    margin-right: 12px;
}
.logo a.logo-normal {
    display: block;
    opacity: 1;
    -webkit-transform: translate3d(0px, 0, 0);
    -moz-transform: translate3d(0px, 0, 0);
    -o-transform: translate3d(0px, 0, 0);
    -ms-transform: translate3d(0px, 0, 0);
    transform: translate3d(0px, 0, 0);
}
.logo:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 15px;
    height: 1px;
    width: calc(100% - 30px);
    background: rgba(255, 255, 255, 0.5);
}
.logo .simple-text {
    text-transform: uppercase;
    padding: 0.5rem 0;
    display: block;
    white-space: nowrap;
    color: #ffffff;
    text-decoration: none;
    font-weight: 400;
    line-height: 30px;
    overflow: hidden;
}
.logo-img img {
    width: 35px;
}
.nav li>a {
    margin: 10px 15px 0;
    border-radius: 30px;
    color: rgba(255, 255, 255, .8);
    width: 200px;
    display: block;
    text-decoration: none;
    position: relative;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: 300;
    padding: 10px 15px;
    line-height: 1.5rem;
    transition: all .3s ease 0s;
}
.nav li>a i {
    width: 20px;
    margin-right: 10px;
    font-size: 1.125rem;
}
.nav li>a:hover, .nav li>a:hover i {
    color: rgba(255, 255, 255, 1);
    transition: all .3s ease 0s;
}
.nav li.active>a:before {
    content: " ";
    position: absolute;
    height: 6px;
    width: 6px;
    top: 17px;
    left: -2px;
    background: #fff;
    border-radius: 50%;
}
```

## Step 8: Setting Up Side Nav Template


Side Nav will have 2 parts. The logo part at the top and navigation links part at the button.


Add logo image to assets and copy the commented routing links from `app.components.html` under logo div 

add `nav` style to `ul` tag and active style to dashboard link.

``` html
<div class="sidenav">
    <div class="logo">
        <a href="/" class="simple-text logo-mini">
            <div class="logo-img">
                <img src="./assets/images/angular2-logo-white.png" />
            </div>
        </a>
        <a href="/" class="simple-text logo-normal">
            BBBank
        </a>
    </div>
    <ul class="nav">
        <li><a [routerLink]="['/']"><i class="active fas fa-chart-line"></i> Dashboard</a></li>
        <div>
          <li><a [routerLink]="['/transfer-funds', { fromAccountId: '111', toAccountId: '222' }]"><i class="fas fa-random"></i> Transfer Funds</a></li>
          <li><a [routerLink]="['/deposit-funds']"><i class="fas fa-money-check-alt"></i>Deposit Funds</a></li>
          <li><a [routerLink]="['/create-account']"><i class="fas fa-user"></i> Create New Account</a></li>
          <li><a [routerLink]="['/manage-accounts']"><i class="fas fa-users"></i> Manage Accounts</a></li>
        </div>
      </ul> 
</div>
```

## Step 9: Fixing navbar background colors

To match the background of navbar with our application's background color use the following style in main `style.css` file 

```css
.mat-drawer-content {
  overflow: hidden !important;
}
.mat-drawer-container {
  background-color: #1e1e2f;

}
.mat-drawer {
  background-color: #1e1e2f;
}
```

## Step 10: Setting Up Side Nav Default behavior 

Open the `app.component.html` and set `opened` and `side` property mode to `mat-sidenav` to start is as opened by default. 


```html
<!-- opened is used to show the navbar by default. -->
<!-- side mode is used to show side navbar on the side of the page. -->
<!-- #sideNav is used as template reference variable. -->
  <mat-sidenav opened mode="side">
```

  ## Step 11: Toggling Sidenav
      
Open the `app.component.html` and add a [Template Reference variable](https://angular.io/guide/template-reference-variables) named `#sideNav` to side nav.

```html
​  <mat-sidenav opened #sidenav mode="side">
```

Add an [@input](https://angular.io/guide/inputs-outputs) variable inputSideNav of type MatSidenav
in `Toolbar.Component.ts` as below : 

```javascript
import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
export class ToolbarComponent implements OnInit {
  // @ts-ignore: Object is possible 'null'
  @Input() inputSideNav:MatSidenav
  constructor() { }

  ngOnInit(): void {
  }
}
```

We will add the input variable to `app-toolbar` so that we can set the property to inner component.

```html
​    <app-toolbar [inputSideNav]="sidenav"></app-toolbar>
```


Create a new link in `toolbar.component.html` and add a `click` event.
The link will be added under  `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">` tag as below 

```html
   <a class="sidenav-button"><i class="fas fa-bars" aria-hidden="true" (click)="inputSideNav.toggle()" > </i></a>

```

Here `inputSideNav.toggle()` is used to switch from one effect to other and vise versa.

Run the application and see its working as below : 

![20220324-213449_capture](https://user-images.githubusercontent.com/100709775/159965696-0a423990-f0b9-4dcb-87a1-ca28bc018c54.gif)







