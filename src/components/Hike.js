import React from 'react';
import Nav from './Nav.js';
import HikeDesc from './HikeDesc.js';
import HikeMap from './HikeMap.js';
import QAForum from './QAForum.js';
import UserReports from './UserReports.js';
import Footer from './Footer.js';

/*
Hey Arthur! I hope the operation on Monday went well. I've outlined a few
things for you to take care of for your part of the project when you get
the time before Friday, and I've added comments in existing components
that mark where you'll be doing your work.

To Do:
- Make database for QAForum and UserReports
- Make displayed posts reliant on that database
- Make form for users to post questions, answers, and reports
- Update database to reflect any posts inputted by the user

Notes:
- This page takes a single prop "data" that contains a single entry from
  the "wta-parks-data.json" file. When making the database containing
  user posts, I'd recommend using the "url" const that I created here
  and passed to QAForum and UserReports as the "key" prop to match up
  the page to the posts.
- In order to add interactivity, you'll need to have a form that allows
  users to write content and submit it, which in turn updates the
  database to display that post. This will likely work best if done in
  separate components that are called at the end of every section.
- To match the format laid out in the example, you're going to want to
  include a title and description for the question form, with all other
  forms just having description entries. In theory, the user report
  form would also have an image uploader, but given the amount of time
  we have, I don't think it would make sense to include it.
- I know we already said this, but feel free to reach out to either of
  us if you have any questions or need help with anything!

I wish you a speedy recovery and the best of luck!

Blake
*/

export default function Hike(props) {
   const data = props.data;
   const url = data.url.split("/")[data.url.split("/").length - 1];
   return (
      <div>
         <Nav />
         <main>
            <HikeDesc data={data} />
            <HikeMap coords={[data.coordinates.lat, data.coordinates.lon]} name={data.name} />
            <QAForum key={url} />
            <UserReports key={url} />
         </main>
         <Footer />
      </div>
   )
}