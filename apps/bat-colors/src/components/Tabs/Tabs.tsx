import * as TabsPrimitive from '@radix-ui/react-tabs'
import styles from './Tabs.module.css'

interface Props {
  children: React.ReactNode
  defaultValue: string
}

export const Tabs = ({ children, defaultValue }: Props) => {
  return (
    <TabsPrimitive.Root
      className={styles.root}
      defaultValue={defaultValue}>
      {children}
    </TabsPrimitive.Root>
  )
}
