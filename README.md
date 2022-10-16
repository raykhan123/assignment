### Models
- Blog Model
```
{ title: { mandatory,type:string}, title: {mandatory,type:string}, category: {mandatory,type:string} }

### POST /blogs
- Create a blog document from request body. by giving a details about the title,body 
and category
- Return HTTP status 201 on a succesful blog creation. Also return the blog document. 

### GET/getblogs
- Returns all blogs in the collection as per the user want to see
- Returns the HTTP status 200 if any documents are found.
- user can give pagination . Query param will take input.
  - By page
  - By limit
  - if user will give the page 0 then it will show from first page
example of a query url: getblogs?page=0&limit=2

### GET/getblogs/:POSTID
- Returns all words from "body" which starts from "a" || "A" in Array with the help of "post Id"
- give key "PostID"as path param
- Returns the HTTP status 200 if any documents are found.

### PUT/getblogs/:POSTID
- Updates a body tag only the words which starts from "a" || "A" one's find the word which starts
from "a"||A",then  it will replace  the last three words to "*" 
- After successful updating it will return updated body tag in response.


************************************END***********************************************************************
