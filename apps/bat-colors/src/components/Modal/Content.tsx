import styles from './Modal.module.css'

interface Props {
  children: React.ReactNode
}

export const Content = ({ children }: Props) => {
  return <div className={styles.content}>{children}</div>
}
