import styles from "./Legend.module.css";
// Legend showing what different colors represent
const Legend = () => {
    return (
        <div className={styles.legend}>
            <div className={`${styles.header}`}>Legend</div>
            <div className={`${styles.text}`}>
                <div className="App-main-legend-item-title">Previous Booking: </div> 
            </div>
            <div className={`${styles.text}`}>
                <div className="App-main-legend-item-title">Newly Inserted Booking:</div>
            </div>
            <div className={`${styles.text}`}>
                <div className="App-main-legend-item-title">Overlapping Booking:</div>
            </div>
            <div 
                className={`${styles.booking} ${styles['booking-previous']}`}
            ></div>
            <div className={`${styles.booking} ${styles['booking-new']}`}></div>
            <div className={`${styles.booking} ${styles['booking-overlap']}`}></div>
        </div>
        );
}

export default Legend;