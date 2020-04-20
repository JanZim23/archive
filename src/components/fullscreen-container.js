import React from "react"
import styles from './fullscreen-container.module.css'

const FullscreenContainer = ({ children }) => {
    return (
      <div className={styles.fsContainer}>
        {children}
      </div>
    )
}

export default FullscreenContainer;