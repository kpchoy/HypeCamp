# README

## Welcome to the HYPECAMP wiki!

Hypecamp was built over the course of 10 days!

Hypecamp is based off the popular website [hipcamp.com](https://www.hipcamp.com/). It also takes a few stylistic elements from one of my personal favorite brands [HYPEBEAST](https://hypebeast.com/). 

---

## Technologies

This project is a full-stack single-page application. Hypecamp uses a Ruby on Rails backend, PostgreSQL database, and a React.js frontend.

The site is hosted on heroku, and AWS S3 is used for hosting images

---
## DEMO


### [HYPECAMP live](https://hypecamp.herokuapp.com/#/)

---

## Features and Implementation 

Hypecamp allows you to explore different a few selected sites around the United States. Once logged-in a user can book a campsite, look at their bookings, and leave a campsite review!

### Features 

* `User Authentication:` For both the frontend and backend of the application: signup, login, and demo login 
* `Campsite Search:` Google Maps JavaScript API that is populated with campsites. Also shows an index for all the campsites. 
* `Profile and Dashboard:` User has a profile with a history of their trips.
* `Bookings:` User can book a campsite, and thier trip will be added to their profile's trip history. 
* `Reviews:` User can write a review about a campsite.

---

### Signup and Login Modals 

Users must be logged in to view their profile, book a campsite, or write a review. The application implements a modal for both logging in and signing up. 

![modal](https://media.giphy.com/media/dCB4fXLxob3nd3jRMb/giphy.gif)

The modal uses modal reducer to determine whether or not the modal should be opened or closed. This modal reducer is nested under a `ui` slice of state.  

```javascript
export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}
```

---

### Campsite Show 

The campstie show component was the most challenging part of the project. A user can both reserve a campsite, and write a review on this component.

In order to render all these components, the campsite show page imports a BookingsFormContainer, CampsiteReviewsIndex, and CampsiteReviewForm.

The backend of the application supplies the campsite show component with JSON through rails model associations. An instance of @campsite has campsite_photos, and reviews. 

```javascript
json.campsite do
  json.set! @campsite.id do 
    json.partial! '/api/campsites/campsite', campsite: @campsite
    json.extract! @campsite.user, :first_name
  end 
end

json.campsite_photos do
  @campsite.campsite_photos.each do |campsite|
    json.set! campsite.id do
      json.extract! campsite, :id, :campsite_id, :image_url
    end
  end
end

json.reviews do 
  @campsite.reviews.each do |review|
    json.set! review.id do 
      json.extract! review, :id, :body, :campsite_id, :rating
      json.extract! review.author, :first_name 
    end 
  end 
end 
```

A user can write a review and it will be added to the reviews list. 

![review](https://media.giphy.com/media/jTz4yw77gq2MEjE1Q4/giphy.gif)

Once logged-in a user can Book a campsite and will be redirected to their profile page. On their profile page, the user can look at all their trips.

![bookings](https://media.giphy.com/media/ipLqOdiZY4yw7cP6Ve/giphy.gif)

---

### Future Design Implementation 

* Full Search Bar capability, user can type in a desired location or name of campsite.
* Full CRUD implementation for both bookings and reviews
* UI improvements and rendering all errors where necessary