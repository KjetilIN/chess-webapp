import React from 'react'
import { ProfileCard } from '../components/ProfileCard';


const about: React.FC = () => {
    return (
        <div className='flex flex-col gap-5 items-center mt-3'>
            <h1 className='text-5xl font-bold'>About the team!</h1>

            <p className='w-1/2'>
                Welcome to our group of students who code chess engines for fun!

                We are a group of passionate students who love chess and the challenge of creating intelligent algorithms that can compete with some of the best chess engines in the world.

                Our group was founded with the goal of providing a space for students to learn, share knowledge, and collaborate on projects related to chess programming. Whether you are a beginner looking to learn the basics or an experienced coder looking to take your skills to the next level, we welcome you to join our community.

                Throughout the year, we host workshops, talks, and hackathons focused on chess programming. We also have a variety of ongoing projects that members can contribute to, including working on our own chess engine and analyzing chess games to uncover patterns and strategies.

                If you are interested in joining our group, please don't hesitate to reach out! We look forward to meeting you and helping you grow as a chess programmer.
            </p>

            <ProfileCard name='Kjetil Indrehus' profession='NTNU Data Ingeniør' profilepic='kjetil.jpeg'></ProfileCard>
            <ProfileCard name='Sondre Pedersen' profession='NTNU Datateknologi' profilepic='sondre.jpg'></ProfileCard>
        </div>
    )
}


export default about;