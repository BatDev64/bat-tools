import * as Tabs from '@radix-ui/react-tabs'
import styles from './Tabs.module.css'

interface Props<T> {
  children?: React.ReactNode
  items: T[]
  value: (item: T) => string
  keyValue: (item: T) => string
  renderItem: (item: T, i?: number) => React.ReactNode
}
export const TabsContent = <T,>({
  children,
  items,
  value,
  keyValue,
  renderItem
}: Props<T>) => {
  return (
    <>
      {items.map((el, i) => (
        <Tabs.Content
          className={styles.content}
          value={value(el)}
          key={keyValue(el)}>
          {renderItem(el, i)}
          {children}
        </Tabs.Content>
      ))}
    </>
  )
}
