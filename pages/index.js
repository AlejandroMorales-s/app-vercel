import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href={"/pokemon"}>
        <h1>Ver todos los pokemon</h1>
      </Link>
    </div>
  )
}
