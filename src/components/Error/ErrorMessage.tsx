import styles from './Error.module.css';

const ErrorMessage = ({error}: {error: string}) => <div className={styles.Error}>Error: {error}</div>

export default ErrorMessage  ;