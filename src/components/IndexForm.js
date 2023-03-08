import React from 'react';

export default function IndexForm(props) {
   return (
      <form>
         <label for="name">Name:</label>
         <br />
         <input type="text" id="name" name="name" placeholder="Your Name..." />
         <br />
         <label for="email">Email:</label>
         <br />
         <input type="email" id="email" name="email" placeholder="Your Email..." />
         <br />
         <textarea id="body" name="body" placeholder="Your Message..."></textarea>
         <br />
         <input type="submit" value="Submit"></input>
      </form>
   );
}

