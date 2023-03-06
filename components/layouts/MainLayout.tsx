import Head from 'next/head';
import { FC, ReactNode } from 'react';
import { Navbar } from '../Navbar';


import styles from './MainLayout.module.css';


type Props = {
  children?: ReactNode
};

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
          
          <Head>
            <title>Home - Fernando</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        
          <Navbar />
    
          <main className={styles.main}>
    
            { children }
    
          </main>     
        </div>
      )
};
