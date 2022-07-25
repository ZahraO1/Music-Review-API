# Music-Review-API
***

Music-Review-API is an API where users can access and manipulate reviews for a song.

### **Setup**
***

First, you'll need a Postgres database to connect to. Follow instructions here to setup the database and save credentials for the next step.

Next create a `.env` file. It will need to contain the following environment variables:
```
PORT=5000
PG_URI=postgres://postgresql:password@localhost:5432/music_review
```
Next, run `npm install` to instal dependencies for the API.
Finally, run `nodemon` to run the API.

### **Date Models**
***
Models for SQL Tables

**Comments**

| id | song_name | rating | name | comment | date |


### **Routes** ([http://localhost:5000](http://localhost:5000))
***

| Method | Path | Purpose  |
| ------ | ---- | -------- |
| GET    | /    | Home page| 
| GET | /comments | Comments index page |
| POST | /comments | Create new comment |
| GET | /comments/:id | Details about a particular comment |
| PUT | /comments/:id | Update a particular comment |
| DELETE | /comments/:id | Delete a particular comment |