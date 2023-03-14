import React from 'react';

export default function IndexForm(props) {
   return (
      <form>
         <div style={{ display: "block" }}>
            <label htmlFor="name" style={{ paddingRight: "0.5rem" }}>Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name..." />
         </div>
         <div style={{ display: "block", marginTop: "0.5rem" }}>
            <label htmlFor="email" style={{ paddingRight: "0.5rem" }}>Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email..." />
         </div>
         <div style={{ display: "block" }}>
            <textarea id="body" name="body" placeholder="Your Message..."></textarea>
         </div>
         <div style={{ display: "inline-block", marginTop: "0.5rem" }}>
            <input type="submit" value="Submit"></input>
         </div>
      </form>
   );
}

