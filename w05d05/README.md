# W05D05 - Mid-term Project Kickoff

### Purpose of Midterms
* working in groups/teams
* having a deadline (building under the gun)
* demo practice
* working with full stack
* learning how projects are planned
* starting from scratch
* putting the pieces together
* independence from instruction
* learning how to git as a team

### Pick a Project

### User Stories
* describes how/why a user will interact with our app
* As a ______, I can ______, because _________

* As a user, I can view maps of things in my local area, because I'm interested in what's going on

* As a user, I can the menu items from a local restuarant, because I am hungry

* As a non-logged in user, I cannot edit pins on a map, because the map doesn't belong to me

* `AND` to describe what happens to the UI

* As a user, I can favourite a blogpost, because I want to review it later AND the heart icon turns red

/planning/user-stories.md

### Nouns are Resources
* nouns === table
* build out the ERD

### How to access resources
* HTTP routes
* CRUD/BREAD routes for each resource
* RESTful architecture

/planning/routes.md

B GET   /menuitems
R GET   /menuitems/:id
E POST  /menuitems/:id
A POST  /menuitems
D POST  /menuitems/:id/delete

B GET         /menuitems
R GET         /menuitems/:id
<!-- E PUT/PATCH   /menuitems/:id -->
<!-- A POST        /menuitems -->
<!-- D DELETE      /menuitems/:id -->

### MVP
* minimum viable product
* smallest product you can ship that does the job you want to do
* @KV Minimum Viable Demo MVD
* minimum feature set that we can show off in 5 minutes
* if you're not going to show/demo it, DON'T BUILD IT

Must have
Should have
Could have
Would have
MSCW (Moscow)

### User Login/Registration
* don't do it

```js
app.get('/login/:userId', (req, res) => {
  // set the cookie
  req.session.user_id = req.params.userId;

  // plain-text cookies
  res.cookie('user_id', req.params.userId);

  // send the user somewhere
  res.redirect('/');
});
```

### Wireframes/Mockups
* lowest fidelity possible
* diagrams.net, balsamiq, moqups, figma, pen and paper
* every person on the team should be able to implement the design

### Tech Choices
* FE - HTML, CSS, JS, jQuery, flexbox, SCSS
* BE - Node, Postgres, Express

server.js       router.js
/api/users      /:id
/api/users      /api/users/:id

/api/users/api/users/:id

### SPA vs Multi-page
* up to you
* not mutually exclusive

React SPA
Rails Multi-page app

### Git
* merge conflicts => two or more devs edit the same file
* where do we merge our code?
  * command line
  * github pull requests
* please don't code directly on master/main

### Splitting up the work
* vertical => all devs working on different layers of the stack
* horizontal => everyone working on the same layer
* pair programming

### Communication
* please communicate with each other






