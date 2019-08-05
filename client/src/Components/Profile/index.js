import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className='ProfileContainer'>
      <div className='Heading'>PROFILE</div>
      <div className='Body'>
        <div className='Image'>
          <img src=' ' alt='no' />
        </div>
        <div className='GenInfo'>
          <p>John Doe</p>
          <p>Job/Title/Status</p>
          <p>Rank/Medal</p>
        </div>
        <div className='IntroBox'>
          <div className='Intro'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            animi quisquam eaque, asperiores enim quis amet quasi recusandae
            fugit fuga unde facere cupiditate nulla, dolorum doloribus
            dignissimos voluptate et nobis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Harum architecto quia hic est culpa
            quibusdam quisquam quas explicabo dicta, porro veritatis nostrum
            veniam quis similique ex asperiores voluptas quo ad?
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;