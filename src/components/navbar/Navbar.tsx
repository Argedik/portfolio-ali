import React from 'react'
// import styles from './Navbar.module.sass';
const styles = require("./Navbar.module.sass");

const Navbar: React.FC <{}> = () => {
  return (
    <div className={styles.navbar}>Navbar</div>
  )
}

export default Navbar