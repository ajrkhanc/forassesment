import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import axios from 'axios'
 
export default function Home() {
 
  
 const SendMail = async (e)=>{
   e.preventDefault();
   const Email = e.target.email.value;
console.log('call')
 }
 
 return (
   <div className={styles.container}>
     <Head>
       <title>Create Next App</title>
       <meta name="description" content="Generated by create next app" />
       <link rel="icon" href="/favicon.ico" />
     </Head>
    
 
     <main className={styles.main}>
       <form onSubmit={SendMail}>
       <input type="email" id="email" name="email" className="form-control" placeholder="Email*" required />
      <input type="submit"/>
        </form>
     </main>
   </div>
 )
}