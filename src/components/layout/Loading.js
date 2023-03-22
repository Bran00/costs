import loading from '../../assets/loading.svg';

import styles from './Loading.module.css';

function Loading() {
  return (
    <div className={styles.loader_loading}>
      <img src={loading} alt="loading" className={styles.loader}/>
    </div>
  )
}

export default Loading;